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
                    src="https://img.freepik.com/free-vector/connected-world-concept-illustration_114360-3621.jpg?w=826&t=st=1685352073~exp=1685352673~hmac=609f683fde9e45ffafa37c4cda6a3ebebe408cc976351c74ee99bab4d53697d0"
                />
            </div>
            <div className="flex justify-center">
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
        </div>
    )
}