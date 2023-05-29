import PlanCard from "../components/PlanCard";

export default function TelevisionPlansPage(){
    return  (
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
                    src="/pictures/television_img.avif"
                />
            </div>
            <div className="flex justify-center">
                <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-16">
                    <PlanCard
                        features={["150+ TV programov", "Ogled nazaj do 7 dni"]}
                        name={"Osnovni paket"}
                        price={26.99}
                        priceInterval="mesec"/>
                    <PlanCard
                        features={["180+ TV programov", "Ogled nazaj do 7 dni"]}
                        name={"Srednji paket"}
                        price={34.99}
                        priceInterval="mesec"/>
                    <PlanCard
                        features={["230+ TV programov", "Ogled nazaj do 7 dni"]}
                        name={"Preminum paket"}
                        price={44.99}
                        priceInterval="mesec"/>
                </div>
            </div>
        </div>
    )
}