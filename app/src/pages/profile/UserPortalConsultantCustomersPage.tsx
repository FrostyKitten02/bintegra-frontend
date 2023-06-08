import {Table} from "flowbite-react";
import React, {useContext, useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {UserDto} from "../../model/interfaces";
import {IPageContext, PageContext} from "../../components/PageContextProvider";
import {uuid} from "flowbite-react/lib/esm/helpers/uuid";
import Paths from "../../Paths";

const UserTableRow = ({user}: { user: UserDto }) => {
    const navigate = useNavigate();

    let path: string = "";
    if (user.id != undefined) {
        const strId = user.id.toString();
        console.log(strId)
        path = Paths.USER_PORTAL_CONSULTANT_CUSTOMER_SUBSCRIPTIONS.replace(":id", strId);
    }

    console.log(path)

    return (
        <Table.Row onClick={()=>navigate(path)} className="hover:cursor-pointer">
            <Table.Cell className="border-b text-center">{user.firstname}</Table.Cell>
            <Table.Cell className="border-b text-center">{user.lastname}</Table.Cell>
        </Table.Row>
    )
}

export default function UserPortalConsultantCustomersPage(){
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
                    Stranke
                </div>
                <hr className="pb-4 md:pb-16"/>
                <div className="block">
                    <Table>
                        <Table.Head className="bg-white text-center">
                            <Table.HeadCell className="border-b w-1/4">Ime</Table.HeadCell>
                            <Table.HeadCell className="border-b w-1/4">Priimek</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                users.map((user) => <UserTableRow key={uuid()} user={user}></UserTableRow>)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}