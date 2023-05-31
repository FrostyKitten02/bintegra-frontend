import QandAList from "../components/QuesionCard";

export default function FrequentQuestions() {
    return (
        <div className="grid grid-cols-6 m-6 md:m-16">
            <div className="flex justify-center col-span-6 lg:col-span-2">
                <img
                    className="w-[60%] lg:w-full self-start p-6"
                    src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-10850.jpg?w=826&t=st=1685471227~exp=1685471827~hmac=288ac3533d38b89b2c999a3d4ff5bce44fc119f330faa1a768d7de6464c6dfca"
                    alt=""
                />
            </div>
            <div className="col-span-6 pb-10 flex lg:justify-start lg:col-span-4">
                <QandAList/>
            </div>
        </div>
    )
}