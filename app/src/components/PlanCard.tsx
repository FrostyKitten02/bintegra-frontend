import {v4 as uuid} from "uuid";


export type PriceInterval = "mesec" | "leto";
const Feature = ({name, disabled}:{name: string, disabled?: boolean})=>{
    return(
        <li className="flex space-x-3">
            <svg aria-hidden="true" className={!disabled?"flex-shrink-0 w-5 h-5 text-sage-green":"flex-shrink-0 w-5 h-5 text-gray-400"}
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
            </svg>
            <span className="text-base font-mono font-normal leading-tight text-gray-900">{name}</span>
        </li>
    )
};
export default function FancyPlanCard ({features, name, price, priceInterval}:{features: string[], name: string, price: number, priceInterval: PriceInterval}) {
    return(
        <div className="w-full flex max-w-sm group">
            <div className="sm:group-hover:scale-125 ease-in-out absolute duration-700 bg-gray-900 z-19 polygon-diagonal h-60 w-60 sm:h-80 sm:w-80">
            </div>
            <div className="absolute bg-sage-green z-19 sm:group-hover:scale-110 ease-in-out duration-700 polygon-diagonal-second h-80 w-80 sm:h-96 sm:w-96">
            </div>
            <div className="transition max-w-[300px] max-h-auto md:min-w-[350px] md:min-h-auto sm:hover:scale-105 duration-1000 z-20 mt-4 ml-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                <div className="relative h-full">
                    <div className="mb-20">
                        <h5 className="mb-4 text-xl font-mono font-bold text-gray-900">{name}</h5>
                        <hr className="pb-4" />
                        <div className="flex font-mono items-baseline text-black">
                            <span className="text-5xl pr-1 font-extrabold tracking-tight">{price}</span>
                            <span className="text-3xl font-semibold">€</span>
                            <span className="ml-1 text-xl text-gray-400">/{priceInterval}</span>
                        </div>

                        <ul role="list" className="space-y-5 my-7">
                            {features.map((feature, index)=>{
                                return <Feature name={feature} key={uuid()}/>
                            })}
                        </ul>
                    </div>

                    <button
                        type="button"
                        className="text-white bg-sage-green hover:bg-gray-900 ease-in-out duration-500 hover:transition font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center mb-0 mt-auto absolute bottom-0">
                        Naročite
                    </button>
                </div>
            </div>
        </div>
    )
}