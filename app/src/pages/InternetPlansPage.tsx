import PlanCard from "../components/PlanCard";


export default function InternetPlansPage(){
    return (
        <div className="mb-32 text-gray-800 grid justify-center pt-12">
            <h2 className="text-3xl font-bold text-center mb-12">Izberite paket</h2>
            <div className="grid mx-12 relative grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-40 lg:gap-x-16">
                <PlanCard
                    features={["Hitrosti do 100 mbps do uporabnika", "Hitrosti do 20 mbps od uporabnika"]}
                    name={"Osnovni paket"}
                    price={19.99}
                    priceInterval="mesec"/>
                <PlanCard
                    features={["Hitrosti do 350 mbps do uporabnika", "Hitrosti do 80 mbps od uporabnika"]}
                    name={"Srednji paket"}
                    price={29.99}
                    priceInterval="mesec"/>
                <PlanCard
                    features={["Hitrosti do 1 gbps do uporabnika", "Hitrosti do 200 mbps od uporabnika"]}
                    name={"Preminum paket"}
                    price={49.99}
                    priceInterval="mesec"/>
            </div>
        </div>
)
}