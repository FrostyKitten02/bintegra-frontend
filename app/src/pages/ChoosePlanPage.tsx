import {Button} from "flowbite-react";
import {useParams} from "react-router-dom";
import {ChangeEvent, FormEvent, useState} from "react";
import FormHandler from "../Util/FormHandler";

export function ChoosePlanPage() {
    const {id} = useParams();
    const [chosen, setChosen] = useState<string>();
    //pridobimo offer iz backenda ter podatke packageOfferja

    const offerType: string = "mobilni";

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setChosen(prevState => (event.target.value));
        console.log("value" + event.target.value)
    }

    const handleChosenOffer = () => {
        //poslji na backend
        if (chosen === undefined)
            return;
        console.log("izbrana " + chosen)
        //preusmeri na zacetno stran ali profil
    }

    return (
        <div className="flex justify-center py-10">
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
                                        <input
                                            type="radio"
                                            value="vezava"
                                            onChange={handleChange}
                                            id="vezava-radio"
                                            name="choose-plan"
                                            className="hidden peer"
                                            required/>
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
                                        <input type="radio"
                                               value="narocnina"
                                               onChange={handleChange}
                                               id="narocnina-radio"
                                               name="choose-plan"
                                               className="hidden peer"
                                               required/>
                                        <label htmlFor="narocnina-radio"
                                               className="inline-flex h-full items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                            <div className="block">
                                                <div className="w-full title-a uppercase text-center">naročnina</div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            {
                                offerType == "mobilni" ?
                                    <div className="px-2 py-10">
                                        <hr />
                                        <div className="py-2">
                                            <p className="pb-4">
                                                Želite izbrati telefon?
                                            </p>

                                            <div className="flex justify-end">
                                                <Button className="bg-sage-green px-6 uppercase mx-5 hover:bg-gray-900 duration-500">
                                                    da
                                                </Button>
                                                <Button className="bg-sage-green px-6 uppercase hover:bg-gray-900 duration-500">
                                                    ne
                                                </Button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>

                                    : ""
                            }
                            <div className="flex justify-end pt-10">
                                <Button
                                    onClick={handleChosenOffer}
                                    className="bg-sage-green hover:bg-gray-900 uppercase py-1 px-3 duration-500">
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