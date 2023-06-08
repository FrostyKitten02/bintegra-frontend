import PlanCard from "../components/PlanCard";
import television_img from "../pictures/television_img.jpg";
import {useContext, useState} from "react";
import {OfferDto} from "../model/ResponseDtos";
import {v4 as uuid} from "uuid";
import PlansUtil from "../Util/PlansUtil";
import {IPageContext, PageContext} from "../components/PageContextProvider";

export default function TelevisionPlansPage(){
    const [televisionOffers, setTelevisionOffers] = useState<OfferDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const context = useContext<IPageContext>(PageContext);
    const fetchTelevisionPlans = () => {
        context.api.offersApi
            .getActiveOffersByType("TELEVSION")
            .then((response) => {
                setTelevisionOffers(response.data.offers??[]);
                setLoading(false);
            });
    }

    if (loading) {
        fetchTelevisionPlans();
    }
    return  (
        <div className="mb-32 text-gray-800 grid justify-center pt-12">
            <div className="flex justify-center flex-wrap pb-10">
                <div className="self-center flex justify-end flex-wrap flex-col text-center mb-12">
                    <span className="title-a text-3xl uppercase">
                      Izberite paket
                    </span>
                </div>
                <img
                    className="w-[70%] sm:w-[50%] md:w-[30%]"
                    alt=""
                    src={television_img}
                />
            </div>
            <div className="flex justify-center">
                <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-16">
                    {
                        televisionOffers.map( offer => {
                            return (
                                <PlanCard
                                    key={uuid()}
                                    offerId={offer.id}
                                    offerType={offer.type}
                                    features={PlansUtil.getOfferFeatures(offer)}
                                    name={offer.title??""}
                                    discountPrice={offer.discountPrice??0}
                                    price={offer.basePrice??0}
                                    priceInterval="mesec"/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}