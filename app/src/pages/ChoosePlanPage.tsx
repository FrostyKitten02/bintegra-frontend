import {Button} from "flowbite-react";
import {useParams} from "react-router-dom";
import {ChangeEvent, useContext, useState} from "react";
import {PhoneShowcase} from "../components/PhoneShowcase";
import {ChevronRightIcon} from "@heroicons/react/24/outline";
import {OfferDto} from "../model/ResponseDtos";
import {IPageContext, PageContext} from "../components/PageContextProvider";
import PlansUtil from "../Util/PlansUtil";


export function ChoosePlanPage() {
    const {id} = useParams();
    const [chosenPackage, setChosenPackage] = useState<string>();
    const [phoneDecision, setPhonePhoneDecision] = useState<string>();
    const [chosenPhone, setChosenPhone] = useState<number>();
    const [chosenOffer, setChosenOffer] = useState<OfferDto>();
    const [loading, setLoading] = useState<boolean>(true);
    const context = useContext<IPageContext>(PageContext);

    const fetchChosenOffer = () => {
        context.api.offersApi
            .getOfferById(id ?? "")
            .then((response) => {
                setChosenOffer(response.data.offer ?? {});
                setLoading(false);
            });
    }

    if (loading) {
        fetchChosenOffer();
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setChosenPackage(prevState => (event.target.value));
    }

    const handleDecision = (event: ChangeEvent<HTMLInputElement>): void => {
        setPhonePhoneDecision(prevState => (event.target.value));
        if (event.target.value === "false")
            setChosenPhone(undefined);
    }

    const addChosenPhone = (phoneId: number): void => {
        setChosenPhone(prevState => (phoneId));
    }

    const handleChosenOffer = (): void => {
        //poslji na backend
        if (chosenPackage === undefined)
            return;
        context.api.subscriptionApi
            .subscribe(chosenPackage, chosenOffer?.id, chosenPhone)
            .then((response) => {
            })

        //preusmeri na zacetno stran ali profil
    }

    return (
        <div className="flex justify-center py-10">
            <div
                className=" my-4 sm:m-4 bg-white border border-gray-300 rounded-lg shadow p-4 sm:p-8">
                <div className="relative h-full">
                    <div className="">
                        <h5 className="mb-4 title-a uppercase text-center text-xl text-gray-900">
                            {chosenOffer?.title}
                        </h5>
                        <hr className="pb-4 gray-400 border-gray-300"/>
                        <div>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Osnovna cena:
                                </span>
                                {chosenOffer?.basePrice}€
                            </p>
                            <p className="py-3">
                                <span className="title-a pr-3 uppercase">
                                    Kategorija:
                                </span>
                                {PlansUtil.getCategory(chosenOffer?.type)}
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
                                                    <ChevronRightIcon
                                                        className="h-4 w-4 mr-3 col-span-1 text-gray-500"/>
                                                    <span className="col-span-5">
                                                        trajanje {chosenOffer?.fullDurationMonths} mescev

                                                    </span>

                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <ChevronRightIcon
                                                        className="h-4 w-4 mr-3 col-span-1 text-gray-500"/>
                                                    <span className="col-span-5">
                                                        cena s popustom {chosenOffer?.discountPrice}€ prvih {chosenOffer?.discountDurationMonths} mescev
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
                                                    <ChevronRightIcon className="h-4 w-4 col-span-1 text-gray-500"/>
                                                    <span className="col-span-5">
                                                        trajanje za nedoločen čas
                                                    </span>
                                                </div>
                                                <div className="grid grid-cols-6">
                                                    <ChevronRightIcon className="h-4 w-4 col-span-1 text-gray-500"/>
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
                                chosenOffer?.type === "MOBILE" ?
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
                                phoneDecision === "true" ?
                                    <PhoneShowcase setPhone={addChosenPhone}/>
                                    : ""
                            }
                            <div className="flex flex-wrap justify-end pt-10">
                                <div className="w-full uppercase font-bold">
                                    izbrali ste paket
                                    <span className="text-2xl mx-4">
                                        {chosenOffer?.title}
                                    </span>
                                    {chosenPhone ?
                                        <span>
                                            ter telefon
                                            <span className="text-2xl mx-4">
                                                {chosenPhone}
                                            </span>
                                        </span>
                                        : ""
                                    }

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