import {Table} from "flowbite-react";
import {UserSubscriptionsDataTable} from "./profile/UserSubscriptionsDataTable";
import {UserSubscriptionShowcard} from "./profile/UserSubscriptionShowcard";
import React from "react";
import {Link} from "react-router-dom";
import Paths from "../Paths";

export default function ConstultantPage(){
    const user={
        id: 1,
        email: "user.email",
        subscription: "narocnina",
        price: 32,
        category: "kategorija"
    }

    const handleEdit=(userId: number)=>{

    }
    const handleInspect=(userId: number)=>{

    }
    return (
        <>
            <div className="py-14 w-full">
                <div className="px-4 sm:px-14 pb-16">
                    <div className="pb-2 text-left title-a text-2xl uppercase">
                        Vse uporabniške naročnine
                    </div>
                    <hr className="pb-4 md:pb-16" />
                    <div className="hidden lg:block">
                        <Table>
                            <Table.Head className="title-a bg-white text-gray-900">
                                <Table.HeadCell className="bg-white border-gray-300 hover:bg-gray-100 border-b w-[200px]">
                                    Uporabnik
                                </Table.HeadCell>
                                <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                                    Naročnina
                                </Table.HeadCell>
                                <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                                    Cena
                                </Table.HeadCell>
                                <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                                    Kategorija
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                <Table.Row className="text-center text-gray-900">
                                    <Table.Cell className="whitespace-nowrap font-medium">
                                        <Link to={Paths.USER_PORTAL_BASE_PATH} className="text-blue-500 hover:text-blue-700">
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

            </div>

               </>
    )
}