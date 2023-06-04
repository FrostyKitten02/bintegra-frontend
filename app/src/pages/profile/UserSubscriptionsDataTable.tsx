import {Table} from "flowbite-react";

export function UserSubscriptionsDataTable() {

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
                        Cena
                    </Table.HeadCell>
                    <Table.HeadCell className="border-gray-300 hover:bg-gray-100 border-b bg-white w-[200px]">
                        Vrsta
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="text-center text-gray-900">
                        <Table.Cell className="whitespace-nowrap font-medium">
                            {"offer.title"}
                        </Table.Cell>
                        <Table.Cell>
                            {"offer.type"}
                        </Table.Cell>
                        <Table.Cell>
                            {"packageOffer.basePrice/mesec"}
                        </Table.Cell>
                        <Table.Cell>
                            {"mesečna narocnina / [st] vezava"}
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="text-center text-gray-900">
                        <Table.Cell className="whitespace-nowrap font-medium">
                            {"offer.title"}
                        </Table.Cell>
                        <Table.Cell>
                            {"offer.type"}
                        </Table.Cell>
                        <Table.Cell>
                            {"packageOffer.basePrice/mesec"}
                        </Table.Cell>
                        <Table.Cell>
                            {"mesečna narocnina / [st] vezava"}
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}