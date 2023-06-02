import PlanCard from "../components/PlanCard";


export default function InternetPlansPage() {
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
                    src="/pictures/internet_img.avif"
                />
            </div>
            <div className="flex justify-center">
                <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-40 lg:gap-x-16">
                    <PlanCard
                        offerId={4}
                        offerType="internet"
                        features={["Hitrosti do 100 mbps do uporabnika", "Hitrosti do 20 mbps od uporabnika"]}
                        name={"Osnovni paket"}
                        price={19.99}
                        priceInterval="mesec"/>
                    <PlanCard
                        offerId={5}
                        offerType="internet"
                        features={["Hitrosti do 350 mbps do uporabnika", "Hitrosti do 80 mbps od uporabnika"]}
                        name={"Srednji paket"}
                        price={29.99}
                        priceInterval="mesec"/>
                    <PlanCard
                        offerId={6}
                        offerType="internet"
                        features={["Hitrosti do 1 gbps do uporabnika", "Hitrosti do 200 mbps od uporabnika"]}
                        name={"Preminum paket"}
                        price={49.99}
                        priceInterval="mesec"/>
                </div>
            </div>
        </div>
    )
}