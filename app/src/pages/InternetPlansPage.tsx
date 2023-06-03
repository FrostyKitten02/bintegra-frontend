import PlanCard from "../components/PlanCard";
import internet_img from "../pictures/internet_img.jpg";
import {OffersController} from "../model/api/controllers/OffersController";
import {v4 as uuid} from "uuid";
import {useState} from "react";
import {OfferDto} from "../model/ResponseDtos";

export default function InternetPlansPage() {
    const [internetOffers, setInternetOffers] = useState<OfferDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchInternetPlans = () => {
        new OffersController("authKey")
            .getActiveOffersByType("INTERNET")
            .then((response) => {
                setInternetOffers(response.data.offers??[]);
                setLoading(false);
            });
    }

    if (internetOffers.length === 0 && loading) {
        fetchInternetPlans();
    }




    return (
        <div className="mb-32 text-gray-800 grid justify-center pt-12">
            <div className="flex justify-center flex-wrap pb-10">
                <div className="self-center flex justify-end flex-wrap flex-col text-center mb-12">
                    <span className="title-a text-3xl uppercase">
                      Izberite paket
                    </span>
                    <p className="text-right">
                        besedilo
                    </p>
                </div>
                <img
                    className="w-[70%] sm:w-[50%] md:w-[30%]"
                    alt=""
                    src={internet_img}
                />
            </div>
            <div className="flex justify-center">
                <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-40 lg:gap-x-16">
                    {
                        //TODO: display better data, price may not be correct, also show discount price!!!
                        internetOffers.map((offer) => {
                            return <PlanCard
                                key={uuid()}
                                features={["Hitrosti do " + offer?.downloadSpeed + " mbps do uporabnika", "Hitrosti do " + offer?.uploadSpeed + " mbps od uporabnika"]}
                                name={offer?.title??"N/A"}
                                price={offer?.basePrice??0}
                                priceInterval="mesec"/>
                        })
                    }
                    {/*<PlanCard*/}
                    {/*    features={["Hitrosti do 100 mbps do uporabnika", "Hitrosti do 20 mbps od uporabnika"]}*/}
                    {/*    name={"Osnovni paket"}*/}
                    {/*    price={19.99}*/}
                    {/*    priceInterval="mesec"/>*/}
                    {/*<PlanCard*/}
                    {/*    features={["Hitrosti do 350 mbps do uporabnika", "Hitrosti do 80 mbps od uporabnika"]}*/}
                    {/*    name={"Srednji paket"}*/}
                    {/*    price={29.99}*/}
                    {/*    priceInterval="mesec"/>*/}
                    {/*<PlanCard*/}
                    {/*    features={["Hitrosti do 1 gbps do uporabnika", "Hitrosti do 200 mbps od uporabnika"]}*/}
                    {/*    name={"Preminum paket"}*/}
                    {/*    price={49.99}*/}
                    {/*    priceInterval="mesec"/>*/}
                </div>
            </div>
        </div>
    )
}