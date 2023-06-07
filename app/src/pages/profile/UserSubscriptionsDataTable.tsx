import {Table} from "flowbite-react";
import {useContext, useEffect, useState} from "react";
import {IPageContext, PageContext} from "../../components/PageContextProvider";
import {SubscriptionDto} from "../../model/interfaces";
import {uuid} from "flowbite-react/lib/esm/helpers/uuid";
import PlansUtil from "../../Util/PlansUtil";


export function UserSubscriptionsDataTable() {
    const [subscriptions, setSubscriptions] = useState<SubscriptionDto[]>();
    const context = useContext<IPageContext>(PageContext);
    const [retry, setRetry] = useState<number>(-1);


    useEffect(() => {
        if ( retry === 0) {
            return;
        }

        if (retry > 7) {
            console.log("Too many retries, error getting user subs!!");
            return
        }

        const controller = new AbortController();
        context.api.subscriptionApi
            .getSubscriptionsByUser(controller.signal)
            .then((response) => {
                setSubscriptions(response.data.subscriptions??[])
                setRetry(0)
            }).catch((error) => {
                setRetry(prevState => prevState + 1);
            });

        return () => {
            controller.abort();
        }
    },[retry])


    const setCurrentPrice = (discountDuration?: number | undefined, startTime?: number): boolean => {
        startTime = startTime??0;
        discountDuration = discountDuration??0;
        const between: Date = new Date(Date.now() - startTime);
        const months: number = ((between.getFullYear() - 1970) * 12 - between.getMonth());
        if(months <= discountDuration){
            return true;
        }
        return false;
    }

    return (
        <div className="hidden lg:block">
            <Table>
                <Table.Head className="title-a bg-white text-gray-900">
                    <Table.HeadCell className="bg-white border-gray-300 hover:bg-gray-100 border-b w-[200px]">
                        Paket
                    </Table.HeadCell>
                    <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                        Kategorija
                    </Table.HeadCell>
                    <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                        Trenutna cena
                    </Table.HeadCell>
                    <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                        Vrsta
                    </Table.HeadCell>
                    <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                        Datum pričetka
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        subscriptions?.map((subscription) => {
                            return(
                                <Table.Row
                                    key={uuid()}
                                    className="text-center text-gray-900">
                                    <Table.Cell className="whitespace-nowrap font-medium">
                                        {subscription.offer?.title}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {PlansUtil.getCategory(subscription.offer?.type)}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {setCurrentPrice(subscription.offer?.discountDurationMonths, subscription.startDate) ? subscription.offer?.discountPrice : subscription.offer?.basePrice}€
                                    </Table.Cell>
                                    <Table.Cell>
                                        {subscription.subscriptionContract}
                                        {subscription.subscriptionContract ? "vezava" : "naročnina"}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {PlansUtil.convertNumberToDate(subscription?.startDate)}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        </div>
    )
}