export function UserSubscriptionShowcard () {

    return(
        <div
            className="block lg:hidden my-4 sm:m-4 bg-white border border-gray-300 rounded-lg shadow p-4 sm:p-8">
            <div className="relative h-full">
                <div className="">
                    <h5 className="mb-4 title-a uppercase text-xl text-gray-900">
                        Paket: offer.title
                    </h5>
                    <hr className="pb-4 gray-400 border-gray-300"/>
                    <ul role="list" className="space-y-5 my-7">
                        <li className="flex flex-wrap">
                            <span className="title-a uppercase pr-3">
                                Cena:
                            </span>
                            9.99
                            <span>
                                €
                            </span>
                        </li>
                        <li className="flex flex-wrap">
                            <span className="title-a uppercase pr-3">
                                Kategorija:
                            </span>
                            mobilna
                        </li>
                        <li className="flex flex-wrap">
                            <span className="title-a uppercase pr-3">
                                Vrsta:
                            </span>
                            mesečna naročnina
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}