import {Table} from "flowbite-react";
import React, {useState} from "react";


export default function UserPortalConsultantCustomerSubscriptions(){
const user={
    id:1,
    email: "user.email"
}
    const [isEditing, setIsEditing] = useState(false);
    const [editedValues, setEditedValues] = useState({
        package: "offer.title",
        category: "offer.type",
        price: "packageOffer.basePrice/mesec",
        type: "mesečna narocnina / [st] vezava",
    });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event:any, key:any) => {
        setEditedValues({
            ...editedValues,
            [key]: event.target.value,
        });
    };

    const handleSave = () => {
        // Save the edited values here
        setIsEditing(false);
    };
    return(
        < >


            <div className="py-14 w-full">
            <div className="px-4 sm:px-14 pb-16">
                <div className="pb-2 text-right title-a text-2xl uppercase">
                    aktivne naročnine
                </div>
                <div className="pb-2 text-left title-a text-2xl ">
                    {user.email}
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
                                Cena
                            </Table.HeadCell>
                            <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                                Vrsta
                            </Table.HeadCell>
                            {isEditing && (
                                <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]"></Table.HeadCell>
                            )}
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="text-center text-gray-900">
                                <Table.Cell className="whitespace-nowrap font-medium">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedValues.package}
                                            onChange={(event) => handleInputChange(event, "package")}
                                        />
                                    ) : (
                                        editedValues.package
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedValues.category}
                                            onChange={(event) => handleInputChange(event, "category")}
                                        />
                                    ) : (
                                        editedValues.category
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedValues.price}
                                            onChange={(event) => handleInputChange(event, "price")}
                                        />
                                    ) : (
                                        editedValues.price
                                    )}
                                </Table.Cell>
                                <Table.Cell>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={editedValues.type}
                                            onChange={(event) => handleInputChange(event, "type")}
                                        />
                                    ) : (
                                        editedValues.type
                                    )}
                                </Table.Cell>
                                {isEditing ? (
                                    <Table.Cell>
                                        <button className="text-blue-500 hover:text-blue-700" onClick={handleSave}>
                                            Save
                                        </button>
                                    </Table.Cell>
                                ) : (
                                    <Table.Cell>
                                        <button className="text-blue-500 hover:text-blue-700" onClick={handleEdit}>
                                            Edit
                                        </button>
                                    </Table.Cell>
                                )}
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>


            </div>

        </div>
        </>
    )
}