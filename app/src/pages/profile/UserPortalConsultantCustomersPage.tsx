import {Table} from "flowbite-react";
import React, {useContext, useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import Paths from "../../Paths";
import {UserDto} from "../../model/interfaces";
import {IPageContext, PageContext} from "../../components/PageContextProvider";

export default function UserPortalConsultantCustomersPage(){
    const user={
        id: 1,
        email: "user.email",
        subscription: "narocnina",
        price: 32,
        category: "kategorija"
    }
    const context = useContext<IPageContext>(PageContext);
    const [users, setUsers] = useState<UserDto[]>([]);
    const [retry, setRetry] = useState<number>(-1);


    useEffect(() => {
        if (retry === 0 || retry > 5) {
            return
        }

        context.api.consultantApi.getConsultantCustomers()
            .then((response) => {
                setUsers(response.data.customers??[])
                setRetry(0)
            })
            .catch((error) => {
                setRetry(prevState => prevState + 1)
            })

    }, [retry]);


    return (
        <div className="py-16 w-full">
            <div className="px-6 sm:px-18 pb-16">
                <div className="pb-2 text-left title-a text-2xl uppercase">
                    Vse uporabniške naročnine
                </div>
                <hr className="pb-4 md:pb-16"/>
                <div className="hidden lg:block">
                    <Table>
                        <Table.Head className="bg-white">
                            <Table.HeadCell className="border-b w-1/4">Uporabnik</Table.HeadCell>
                            <Table.HeadCell className="border-b w-1/4">Naročnina</Table.HeadCell>
                            <Table.HeadCell className="border-b w-1/4">Cena</Table.HeadCell>
                            <Table.HeadCell className="border-b w-1/4">Kategorija</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="text-center text-gray-900">
                                <Table.Cell className="whitespace-nowrap font-medium">
                                    {/*TODO use customer id for path*/}
                                    <Link
                                        to={Paths.USER_PORTAL_CONSULTANT_CUSTOMER_SUBSCRIPTIONS.replace(":id", "1")}
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        {user.email}
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>{user.subscription}</Table.Cell>
                                <Table.Cell>{user.price}</Table.Cell>
                                <Table.Cell>{user.category}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <Outlet />
        </div>
    )
}