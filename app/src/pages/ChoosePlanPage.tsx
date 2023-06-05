import {Button} from "flowbite-react";
import {useParams} from "react-router-dom";
import {ChangeEvent, useContext, useState} from "react";
import {PhoneShowcase} from "../components/PhoneShowcase";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {OfferDto} from "../model/ResponseDtos";
import {OffersController} from "../model/api/controllers/OffersController";
import {IPageContext, PageContext} from "../components/PageContextProvider";


export function ChoosePlanPage() {
    const { id } = useParams();
    const [chosen, setChosen] = useState<string>();
    const [decision, setDecision] = useState<string>();
    const [chosenPhone, setChosenPhone] = useState<number>(-1);
    const [chosenOffer, setChosenOffer] = useState<OfferDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const context = useContext<IPageContext>(PageContext);

    const fetchChosenOffer = () => {
        context.api.offersApi
            .getOfferById(id??"")
            .then((response) => {
                setChosenOffer(response.data.offers??[]);
                setLoading(false);
            });
    }

    if (chosenOffer.length === 0 && loading) {
        fetchChosenOffer();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setChosen(prevState => (event.target.value));
        console.log("value" + event.target.value)
    }

    const handleDecision = (event: ChangeEvent<HTMLInputElement>): void => {
        setDecision(prevState => (event.target.value));
        if(event.target.value === "false")
            setChosenPhone(-1);
    }

    const addChosenPhone = (phoneId: number):void => {
        setChosenPhone(prevState => (phoneId));
        console.log("telefon, ki  ga je uporabnik  izbral: " + phoneId)
    }

    const handleChosenOffer = (): void => {
        //poslji na backend
        if (chosen === undefined)
            return;
        console.log("izbrana " + chosen)
        console.log("izbran telefon " + chosenPhone)
        //preusmeri na zacetno stran ali profil
    }

    return (
        <div className="flex justify-center py-10">
            <div
                className=" my-4 sm:m-4 bg-white border border-gray-300 rounded-lg shadow p-4 sm:p-8">
                <div className="relative h-full">
                    <div className="">
                        <h5 className="mb-4 title-a uppercase text-center text-xl text-gray-900">
                            {chosenOffer[0].title}
                        </h5>
                        <hr className="pb-4 gray-400 border-gray-300"/>
                        <div>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Osnovna cena:
                                </span>
                                {chosenOffer[0].basePrice}€
                            </p>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Kategorija:
                                </span>
                                {chosenOffer[0].type}
                            </p>
                            {/*
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Opis:
                                </span>
                                {"opis storitve kaj vse ponuja lahko v alinejah napises "}
                            </p>*/}
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
                                               className="inline-flex h-full max-w-[400px] w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                            <div className="block p-6">
                                                <div className="w-full title-a uppercase text-center">
                                                    Vezava
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <ChevronRightIcon className="h-4 w-4 mr-3 col-span-1 text-gray-500" />
                                                    <span className="col-span-5">
                                                        trajanje {chosenOffer[0].fullDurationMonths} mescev

                                                    </span>

                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <ChevronRightIcon className="h-4 w-4 mr-3 col-span-1 text-gray-500" />
                                                    <span className="col-span-5">
                                                        cena s popustom {chosenOffer[0].discountPrice}€ prvih {chosenOffer[0].discountDurationMonths} mescev
                                                    </span>

                                                </div>
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
                                               className="inline-flex h-full max-w-[400px] w-full text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                            <div className="block p-6">
                                                <div className="w-full title-a uppercase text-center">naročnina</div>
                                                <div className="grid grid-cols-6">
                                                    <ChevronRightIcon className="h-4 w-4 col-span-1 text-gray-500" />
                                                    <span className="col-span-5">
                                                        trajanje za nedoločen čas
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <ChevronRightIcon className="h-4 w-4 col-span-1 text-gray-500" />
                                                    <span className="col-span-5">
                                                        vsak mesec se zaračuna osnovna cena v vrednosti 9.99€
                                                    </span>
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            {
                                chosenOffer[0].type === "mobilni" ?
                                    <div className="px-2 py-10">
                                        <hr/>
                                        <div className="py-4 text-center">
                                            <p className="pb-4">
                                                Želite izbrati telefon?
                                            </p>
                                            <ul className="flex justify-center">
                                                <li>
                                                    <input
                                                        type="radio"
                                                        value="true"
                                                        onChange={handleDecision}
                                                        id="yes-radio"
                                                        name="telephone"
                                                        className="hidden peer"
                                                    />
                                                    <label htmlFor="yes-radio"
                                                           className="inline-flex mx-6 h-full items-center justify-center py-3 px-16 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                                        <div className="block">
                                                            <div className="w-full title-a uppercase text-center">DA
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                                <li>
                                                    <input
                                                        type="radio"
                                                        value="false"
                                                        onChange={handleDecision}
                                                        id="no-radio"
                                                        name="telephone"
                                                        className="hidden peer"
                                                    />
                                                    <label htmlFor="no-radio"
                                                           className="inline-flex h-full items-center justify-center py-3 px-16 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:bg-gray-100 peer-checked:border-gray-900 peer-checked:text-gray-900 hover:text-gray-600 hover:bg-gray-100">
                                                        <div className="block">
                                                            <div className="w-full title-a uppercase text-center">NE
                                                            </div>
                                                        </div>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr/>
                                    </div>

                                    : ""
                            }
                            {
                                decision === "true" ?
                                    <PhoneShowcase setPhone={addChosenPhone}/>
                                    : ""
                            }
                            <div className="flex flex-wrap justify-end pt-10">
                                <div className="w-full uppercase font-bold">
                                    izbrali ste paket
                                    <span className="text-2xl mx-4">
                                        {id}
                                    </span>
                                         ter telefon
                                    <span className="text-2xl mx-4">
                                        {chosenPhone}
                                    </span>
                                </div>
                                <Button
                                    onClick={handleChosenOffer}
                                    className="bg-sage-green hover:bg-gray-900 uppercase py-1 px-10 duration-500">
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