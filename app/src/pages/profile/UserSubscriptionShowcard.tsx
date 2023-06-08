import {useContext, useEffect, useState} from "react";
import {SubscriptionDto} from "../../model/interfaces";
import {IPageContext, PageContext} from "../../components/PageContextProvider";
import {uuid} from "flowbite-react/lib/esm/helpers/uuid";
import PlansUtil from "../../Util/PlansUtil";
import SubscriptionUtil from "../../Util/SubscriptionUtil";

export function UserSubscriptionShowcard() {
    const [subscriptions, setSubscriptions] = useState<SubscriptionDto[]>();
    const context = useContext<IPageContext>(PageContext);
    const [retry, setRetry] = useState<number>(-1);


    useEffect(() => {
        if (retry === 0) {
            return;
        }

        if (retry > 7) {
            //console.log("Too many retries, error getting user subs!!");
            return
        }

        const controller = new AbortController();
        context.api.subscriptionApi
            .getSubscriptionsByUser(controller.signal)
            .then((response) => {
                setSubscriptions(response.data.subscriptions ?? [])
                setRetry(0)
            }).catch((error) => {
            setRetry(prevState => prevState + 1);
        });

        return () => {
            controller.abort();
        }
    }, [retry])
    return (
        <>
            {
                subscriptions?.map((subscription) => {
                    return (
                        <div
                            key={uuid()}
                            className="block lg:hidden my-4 sm:m-4 bg-white border border-gray-300 rounded-lg shadow p-4 sm:p-8">
                            <div className="relative h-full">
                                <div className="">
                                    <h5 className="mb-4 title-a uppercase text-xl text-gray-900">
                                        Paket: {subscription.offer?.title}
                                    </h5>
                                    <hr className="pb-4 gray-400 border-gray-300"/>
                                    <ul role="list" className="space-y-5 my-7">
                                        <li className="flex flex-wrap">
                            <span className="title-a uppercase pr-3">
                                Cena:
                            </span>{SubscriptionUtil.getSubscriptionCurrentPrice(subscription)}<span>
                                €
                            </span>
                                        </li>
                                        <li className="flex flex-wrap">
                            <span className="title-a uppercase pr-3">
                                Kategorija:
                            </span>
                                            {PlansUtil.getCategory(subscription.offer?.type)}
                                        </li>
                                        <li className="flex flex-wrap">
                            <span className="title-a uppercase pr-3">
                                Vrsta:
                            </span>
                                            {SubscriptionUtil.getSubscriptionContractType(subscription)}
                                        </li>
                                        <li className="flex flex-wrap">
                                            <span className="title-a uppercase pr-3">
                                                Datum pričetka:
                                            </span>
                                            {PlansUtil.convertNumberToDate(subscription.startDate)}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}