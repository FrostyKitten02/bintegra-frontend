import {Table} from "flowbite-react";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {SubscriptionDto, UserDto} from "../../model/interfaces";
import {uuid} from "flowbite-react/lib/esm/helpers/uuid";
import SubscriptionUtil from "../../Util/SubscriptionUtil";
import PlansUtil from "../../Util/PlansUtil";
import {Simulate} from "react-dom/test-utils";
import contextMenu = Simulate.contextMenu;
import {IPageContext, PageContext} from "../../components/PageContextProvider";


const SubscriptionRow = ({subscription}:{subscription: SubscriptionDto}) => {
    return(
        <Table.Row>
            <Table.Cell className="border-b">{subscription.offer?.title}</Table.Cell>
            <Table.Cell className="border-b">{PlansUtil.getCategory(subscription.offer?.type)}</Table.Cell>
            <Table.Cell className="border-b">{SubscriptionUtil.getSubscriptionCurrentPrice(subscription)}</Table.Cell>
            <Table.Cell className="border-b">{SubscriptionUtil.getSubscriptionContractType(subscription)}</Table.Cell>
            <Table.Cell className="border-b">{PlansUtil.convertNumberToDate(subscription?.startDate)}</Table.Cell>
        </Table.Row>
    )
}


export default function UserPortalConsultantCustomerSubscriptions(){
    const {id} = useParams();
    const context = useContext<IPageContext>(PageContext);
    const [subscriptions, setSubscriptions] = useState<SubscriptionDto[]>([]);
    const initialState: UserDto = {
        firstname: "",
        lastname: ""
    }
    const [user, setUser] = useState<UserDto>(initialState);
    const [failed, setFailed] = useState<number>(-1);


    useEffect(() => {
        if (failed === 0 || failed > 10 || id == undefined) {
            return;
        }

        const controller = new AbortController();

        context.api.subscriptionApi.getSubscriptionByUserId(id, controller.signal)
            .then((response) => {
                if (context.loggedIn && (response.data.subscriptions === undefined || response.data.subscriptions === null)) {
                    setFailed(prevState => {
                        if (prevState === -1) {
                            return 1;
                        }
                        return prevState + 1;
                    })
                    return;//no abort needed!
                }
                setSubscriptions(response.data.subscriptions??[]);
                setUser(response.data.user??{});
                setFailed(0);
            })
            .catch((error) => {
                setFailed(prevState => {
                    if (prevState === -1) {
                        return 1;
                    }
                    return prevState + 1;
                });
                console.error(error);
            });

        // return () => {
        //     controller.abort();
        // }
    },[failed, context, id])

    useEffect(() => {
        setFailed(-1);
    }, [id])



    return(
        <div className="py-14 w-full">
            <div className="px-4 sm:px-14 pb-16">
                <div className="pb-2 text-left title-a text-2xl ">
                    Paketi uporabnika - {user.firstname + " " + user.lastname}
                </div>
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
                            {subscriptions.map((subscription) => <SubscriptionRow subscription={subscription} key={uuid()} />)}
                        </Table.Body>
                    </Table>
                </div>
                <div className="block lg:hidden">
                    {
                        subscriptions.map((subscription) => {
                            return(
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
                </div>
            </div>
        </div>
    )
}