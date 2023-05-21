import PlanCard from "../components/PlanCard";

export default function MobileInternetPlans(){
    return (
        <div className="mb-32 text-gray-800 grid justify-center pt-12">
            <h2 className="text-3xl font-bold text-center mb-12">Izberite paket</h2>
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-x-12">
                <PlanCard
                    features={["Hitrosti do 100 mbps do uporabnika", "Hitrosti do 20 mbps od uporabnika", "200gb prenosa podatkov"]}
                    name={"Osnovni paket"}
                    price={12.99}
                    priceInterval="mesec"/>
                <PlanCard
                    features={["Hitrosti do 350 mbps do uporabnika", "Hitrosti do 80 mbps od uporabnika", "300gb prenosa podatkov"]}
                    name={"Srednji paket"}
                    price={19.99}
                    priceInterval="mesec"/>
                <PlanCard
                    features={["Hitrosti do 1 gbps do uporabnika", "Hitrosti do 200 mbps od uporabnika", "400gb prenosa podatkov"]}
                    name={"Preminum paket"}
                    price={34.99}
                    priceInterval="mesec"/>
            </div>
        </div>
    )
}