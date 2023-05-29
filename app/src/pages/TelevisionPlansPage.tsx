import PlanCard from "../components/PlanCard";

export default function TelevisionPlansPage(){
    return  (
        <div className="mb-32 text-gray-800 grid justify-center pt-12">
            <h2 className="text-3xl font-bold text-center mb-12">Izberite paket</h2>
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
    )
}