import {v4 as uuid} from "uuid";
import {Link} from "react-router-dom";
import Paths from "../Paths";


export type PriceInterval = "mesec" | "leto";
const Feature = ({name, disabled}: { name: string, disabled?: boolean }) => {
    return (
        <li className="flex space-x-3">
            <svg aria-hidden="true"
                 className={!disabled ? "flex-shrink-0 w-5 h-5 text-sage-green" : "flex-shrink-0 w-5 h-5 text-gray-400"}
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
            </svg>
            <span className="text-base  font-normal leading-tight text-gray-900">{name}</span>
        </li>
    )
};
export default function PlanCard({
                                     discountPrice,
                                     offerType,
                                     offerId,
                                     features,
                                     name,
                                     price,
                                     priceInterval
                                 }: { discountPrice?: number, offerType?: string, offerId?: number, features: string[], name: string, price: number, priceInterval: PriceInterval }) {

    const setOfferPath = (): string => {
        switch (offerType){
            case "MOBILE":
                return Paths.MOBILE_PLANS;
            case "INTERNET":
                return Paths.INTERNET_PLANS;
            case "TELEVSION":
                return Paths.TV_PLANS;
            default: return "pathERROR"
        }
    }

    return (
        <div className="w-full flex max-w-sm group">
            <div
                className="hidden sm:block sm:group-hover:scale-[120%] ease-in-out absolute duration-700 bg-gray-900 z-19 polygon-diagonal h-60 w-60 md:h-80 md:w-80">
            </div>
            <div
                className="hidden sm:block absolute bg-sage-green z-19 sm:group-hover:scale-110 ease-in-out duration-700 polygon-diagonal-second h-80 w-80 md:h-96 md:w-96">
            </div>
            <div
                className="transition w-full sm:w-[300px] md:w-[350px] md:min-h-auto sm:hover:scale-105 duration-1000 z-20 my-4 sm:m-4 p-4 bg-white border border-gray-300 rounded-lg shadow sm:p-8">
                <div className="relative h-full">
                    <div className="mb-20">
                        <h5 className="mb-4 title-a uppercase text-2xl text-gray-900">
                            {name}
                        </h5>
                        <hr className="pb-4 gray-400 border-gray-300"/>
                        <div className="flex items-baseline text-black">
                            <span className="text-5xl pr-1 font-extrabold tracking-tight">
                                {price}
                            </span>
                            <span className="text-3xl font-semibold">€</span>
                            <span className="ml-1 text-xl text-gray-400">/{priceInterval}</span>
                        </div>
                        <div className="text-xs text-center text-gray-600 pt-2">
                            V primeru vezave velja pondbena cena {discountPrice}€.
                        </div>
                        <ul className="space-y-5 my-7">
                            {features.map((feature, index) => {
                                return <Feature name={feature} key={uuid()}/>
                            })}
                        </ul>
                    </div>
                    <Link
                        onClick={() => window.scroll(0, 0)}
                        to={`${setOfferPath()}/${offerId}`}
                        className="text-white bg-sage-green hover:bg-gray-900 ease-in-out duration-500 hover:transition font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center mb-0 mt-auto absolute bottom-0">
                        Naročite
                    </Link>
                </div>
            </div>
        </div>
    )
}