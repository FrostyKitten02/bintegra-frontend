import QandAList from "../components/QuesionCard";
import questions_img from "../pictures/questions_img.jpg";

export default function FrequentQuestions() {
    return (
        <div className="grid grid-cols-6 m-6 md:m-16">
            <div className="flex justify-center col-span-6 lg:col-span-2">
                <img
                    className="w-[60%] lg:w-full self-start p-6"
                    src={questions_img}
                    alt=""
                />
            </div>
            <div className="col-span-6 pb-10 flex lg:justify-start lg:col-span-4">
                <QandAList/>
            </div>
        </div>
    )
}