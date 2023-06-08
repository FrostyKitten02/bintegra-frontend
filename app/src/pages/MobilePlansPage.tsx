import PlanCard from "../components/PlanCard";
import mobile_img from "../pictures/mobile_img.jpg";
import {useContext, useState} from "react";
import {OfferDto} from "../model/ResponseDtos";
import {uuid} from "flowbite-react/lib/esm/helpers/uuid";
import PlansUtil from "../Util/PlansUtil";
import {IPageContext, PageContext} from "../components/PageContextProvider";

export default function MobilePlansPage() {
    const [mobileOffers, setMobileOffers] = useState<OfferDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const context = useContext<IPageContext>(PageContext);
    const fetchMobilePlans = () => {
       context.api.offersApi
            .getActiveOffersByType("MOBILE")
            .then((response) => {
                setMobileOffers(response.data.offers??[]);
                setLoading(false);
            });
    }

    if (loading) {
        fetchMobilePlans();
    }

    return (
        <div className="mb-32 text-gray-800 grid justify-center">
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
                    src={mobile_img}
                />
            </div>
            <div className="flex justify-center">
                <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-16">
                    {
                        mobileOffers.map( (offer) => {
                            return(
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

