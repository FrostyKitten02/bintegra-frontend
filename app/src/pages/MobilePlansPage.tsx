import PlanCard from "../components/PlanCard";

export default function MobilePlansPage() {
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
                    src="/pictures/mobile_img.avif"
                />
            </div>
            <div className="flex justify-center">
                <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-x-16">
                    <PlanCard
                        features={["10 GB prenosa podatkov v Sloveniji", "Neomejeni SMS-i", "Neomejene klici v Sloveniji"]}
                        name={"Osnovni paket"}
                        price={9.99}
                        priceInterval="mesec"/>
                    <PlanCard
                        features={["20 GB prenosa podatkov v Sloveniji", "Neomejeni SMS-i", "Neomejeni klici v Slovneiji", "5 GB mobilnih podatkov v EU"]}
                        name={"Srednji paket"}
                        price={11.99}
                        priceInterval="mesec"/>
                    <PlanCard
                        features={["Neomejeno število prenosa podatkov v Sloveniji", "Neomejeni SMS-i", "Neomejeni klici v Sloveniji", "10 GB mobilnih podatkov v EU"]}
                        name={"Preminum paket"}
                        price={15.99}
                        priceInterval="mesec"/>
                </div>
            </div>
        </div>
    )
}

