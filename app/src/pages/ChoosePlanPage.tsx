import {Button} from "flowbite-react";

export function ChoosePlanPage() {
    return (
        <div>
            <div
                className="my-4 sm:m-4 bg-white border border-gray-300 rounded-lg shadow p-4 sm:p-8">
                <div className="relative h-full">
                    <div className="">
                        <h5 className="mb-4 title-a uppercase text-center text-xl text-gray-900">
                            SREDNJI PAKET MOBITEL
                        </h5>
                        <hr className="pb-4 gray-400 border-gray-300"/>
                        <div>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Osnovna cena:
                                </span>
                                {"9.99"}€
                            </p>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Kategorija:
                                </span>
                                {"mobilni"}
                            </p>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Opis:
                                </span>
                                {"opis storitve kaj vse ponuja lahko v alinejah napises "}
                            </p>
                            <div className="flex justify-between mt-8">
                                <ul className="grid w-full gap-6 md:grid-cols-2">
                                    <li>
                                        <input type="radio" id="vezava-radio" name="choose-plan" value="hosting-small"
                                               className="hidden peer" required/>
                                        <label htmlFor="vezava-radio"
                                               className="inline-flex h-full items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                            <div className="block p-4">
                                                <div className="w-full title-a uppercase text-center">Vezava</div>
                                                <div className="w-full">trajanje 24 mescev</div>
                                                <div className="w-full">cena s popustom 6.99€ prvih 12 mescev</div>
                                            </div>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="narocnina-radio" name="choose-plan" value="hosting-big"
                                               className="hidden peer"/>
                                        <label htmlFor="narocnina-radio"
                                               className="inline-flex h-full items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full title-a uppercase text-center">naročnina</div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>

                            </div>
                            <div className="flex justify-end pt-10">
                                <Button className="bg-sage-green hover:bg-gray-900  uppercase py-1 px-3">
                                    <span className="font-bold tracking-wider">
                                        potrdi izbrano
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}