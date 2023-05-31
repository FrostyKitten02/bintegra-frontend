import {useState} from "react";


const QandA = ({question, answer}: { question: string, answer: string }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="w-full flex flex-col pb-2 items-start justify-center">
            <div className="flex w-full">
                <button
                    className="text-gray-500 mr-4 focus:outline-none"
                    onClick={toggleExpand}
                >
                    {expanded ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/>
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg>
                    )}
                </button>
                <h3 className="text-xl font-bold w-full">
                    {question}
                </h3>
            </div>
            {expanded && (
                <div className="my-4 w-full pl-16">
                    {answer}
                </div>
            )}
        </div>

    );
};

const QandAList = () => {
    const questions = [
        {
            question: " Kako nastavim televizijsko storitev in dostopam do kanalov?",
            answer: "Če želite nastaviti televizijsko storitev, priključite priloženi set-top box na televizor in kabelski priključek. " +
                "Sledite navodilom na zaslonu, da poiščete kanale in dokončate začetno nastavitev. Po nastavitvi lahko po kanalih brskate s priloženim daljinskim upravljalnikom. "
        },
        {
            question: " Ali lahko nadgradim hitrost interneta ali paket televizijskih kanalov?",
            answer: "Da, lahko nadgradite paket hitrosti interneta ali televizijskih kanalov." +
                " Preprosto se obrnite na našo službo za podporo strankam in pomagali vam bodo pri nadgradnji storitev v skladu z Vašimi željami.",
        }, {
            question: "Kako lahko odpravim težave z internetno povezavo?",
            answer: " Če imate težave z internetno povezavo,se najprej prepričajte, da so vsi kabli in povezave varne." +
                " Ponovno zaženite modem/usmerjevalnik in počakajte, da se ponovno poveže. Če se težava ne odpravi, se obrnite na našo službo za podporo strankam." +
                " Naša tehnična ekipa vam lahko pomaga pri diagnosticiranju in reševanju morebitnih težav z internetno povezljivostjo.",
        },
        {
            question: "Kakšen je vaš delovnik za podporo strankam?",
            answer: "Naša podpora strankam je na voljo od 8.00- 15.00 med tednom, in od 8.00-13.00 v soboto, da Vam pomagamo pri vseh poizvedbah, tehničnih težavah ali vprašanjih, povezanih s storitvami."

        },
        // Add more questions here...
    ];

    return (
        <div className="w-full">
            <h5 className="title-a text-2xl uppercase pb-6 text-gray-900">
                Pogosta vprašanja
            </h5>
            {
                questions.map((q, index) => (
                    <QandA
                        key={index}
                        question={q.question}
                        answer={q.answer}
                    />
                ))
            }
        </div>
    );
};

export default QandAList;
