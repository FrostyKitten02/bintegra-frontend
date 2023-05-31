
import QandAList from "../components/QuesionCard";

export default function FrequentQuestions(){
    return(
        <>
            <div className="flex items-center justify-between">
                <div className="w-1/3">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-vector/curiosity-search-concept-illustration_114360-10850.jpg?w=826&t=st=1685471227~exp=1685471827~hmac=288ac3533d38b89b2c999a3d4ff5bce44fc119f330faa1a768d7de6464c6dfca"
                        alt="Question"
                    />
                </div>
                <div className="w-2/3">
                    <div >
                        <h5 className="title-a text-2xl uppercase text-gray-900">
                            Pogosta vprašanja
                        </h5>
                        <br/>
                    </div>
                <QandAList/>
                </div>

            </div>

            </>
    )
}