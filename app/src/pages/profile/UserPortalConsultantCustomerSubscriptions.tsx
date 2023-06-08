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
    const [user, setUser] = useState<UserDto>({});
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
            </div>
        </div>
    )
}