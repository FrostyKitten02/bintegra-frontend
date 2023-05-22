import PlanCard from "../components/PlanCard";
import FancyPlanCard from "../components/FancyPlanCard";

export default function MobilePlansPage() {
    return (
        <div className="mb-32 text-gray-800 grid justify-center pt-12">
            <h2 className="text-3xl font-bold text-center mb-12">Izberite paket</h2>
            <div className="grid mx-12 relative md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-16">
                <FancyPlanCard
                    features={["10 GB prenosa podatkov v Sloveniji", "Neomejeni SMS-i", "Neomejene klici v Sloveniji"]}
                    name={"Osnovni paket"}
                    price={9.99}
                    priceInterval="mesec"/>
                <FancyPlanCard
                    features={["20 GB prenosa podatkov v Sloveniji", "Neomejeni SMS-i", "Neomejeni klici v Slovneiji", "5 GB mobilih podatkov v EU"]}
                    name={"Srednji paket"}
                    price={11.99}
                    priceInterval="mesec"/>
                {/*<PlanCard
                    features={["Neomejen prenos podatki v Sloveniji", "Neomejeni SMS-i", "Neomejeni klici v Slovneiji", "10 GB mobilih podatkov v EU"]}
                    name={"Preminum paket"}
                    price={15.99}
                    priceInterval="mesec"/>*/}
                <FancyPlanCard features={["Neomejeno število prenosa podatkov v Sloveniji", "Neomejeni SMS-i", "Neomejeni klici v Slovneiji", "10 GB mobilih podatkov v EU"]}
                               name={"Preminum paket"}
                               price={15.99}
                               priceInterval="mesec" />
            </div>
        </div>
    )
}

