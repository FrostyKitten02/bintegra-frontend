import {v4 as uuid} from "uuid";



export type PriceInterval = "mesec" | "leto";
const Feature = ({name, disabled}:{name: string, disabled?: boolean})=>{
    return(
        <li className="flex space-x-3">
            <svg aria-hidden="true" className={!disabled?"flex-shrink-0 w-5 h-5 text-blue-600":"flex-shrink-0 w-5 h-5 text-gray-400"}
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-900">{name}</span>
        </li>
    )
};

export default function PlanCard({features, name, price, priceInterval}:{features: string[], name: string, price: number, priceInterval: PriceInterval}){

    return(
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="relative h-full">
                <div className="mb-20">
                    <h5 className="mb-4 text-xl font-medium text-gray-900">{name}</h5>
                    <div className="flex items-baseline text-black">
                        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
                        <span className="text-3xl font-semibold">€</span>
                        <span className="ml-1 text-xl font-normal text-gray-500">/{priceInterval}</span>
                    </div>

                    <ul role="list" className="space-y-5 my-7">
                        {features.map((feature, index)=>{
                            return <Feature name={feature} key={uuid()}/>
                        })}
                    </ul>
                </div>

                <button
                    type="button"
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center mb-0 mt-auto absolute bottom-0">
                    Naroči
                </button>
            </div>
        </div>
    )
}