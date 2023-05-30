import {useState} from "react";


const QandAList = () => {
    const [showAddQuestion, setShowAddQuestion] = useState(false);
    const [newQuestion, setNewQuestion] = useState("");
    const [questions, setQuestions] = useState([
        { question: "Kako ne izgubit zivcev poleg tega", answer: "Nobody knows", showAnswerInput: false, newAnswer: "", isEditable: false },
        { question: "kako upravljati uporabniski profil", answer: "nekak", showAnswerInput: false, newAnswer: "", isEditable: false },
    ]);

    const toggleAddQuestion = () => {
        setShowAddQuestion(!showAddQuestion);
        setNewQuestion("");
    };

    const handleInputChange = (e:any) => {
        setNewQuestion(e.target.value);
    };

    const handlePostQuestion = () => {
        if (newQuestion.trim() !== "") {
            const newQuestionObj = { question: newQuestion, answer: "", showAnswerInput: false, newAnswer: "", isEditable: true };
            setQuestions([...questions, newQuestionObj]);
            setShowAddQuestion(false);
            setNewQuestion("");
        }
    };

    const handleAnswerQuestion = (index:any) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].showAnswerInput = true;
        setQuestions(updatedQuestions);
    };

    const handleAnswerInputChange = (e:any, index:any) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].newAnswer = e.target.value;
        setQuestions(updatedQuestions);
    };

    const handlePostAnswer = (index:any) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answer = updatedQuestions[index].newAnswer;
        updatedQuestions[index].showAnswerInput = false;
        setQuestions(updatedQuestions);
    };

    const handleCancelAnswer = (index:any) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].showAnswerInput = false;
        updatedQuestions[index].newAnswer = "";
        setQuestions(updatedQuestions);
    };

    return (
        <>
            {questions.map((q, index) => (
                <div key={index} className="mt-4">
                    <div className="flex items-center">
                        <button
                            className="text-gray-500 mr-2 focus:outline-none"
                            onClick={() => handleAnswerQuestion(index)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </button>
                        <h3 className="text-xl font-bold">{q.question}</h3>
                    </div>
                    {q.showAnswerInput && (
                        <div className="mt-4">
              <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter your answer..."
                  value={q.newAnswer}
                  onChange={(e) => handleAnswerInputChange(e, index)}
              ></textarea>
                            <div className="mt-2 flex justify-end">
                                <button
                                    className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
                                    onClick={() => handlePostAnswer(index)}
                                >
                                    Post
                                </button>
                                <button
                                    className="px-4 py-2 text-white bg-red-500 rounded"
                                    onClick={() => handleCancelAnswer(index)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                    {!q.showAnswerInput && q.answer && <p className="mt-2">{q.answer}</p>}
                </div>
            ))}

            <div className="mt-4">
                <div className="flex items-center">
                    <button
                        className="text-gray-500 mr-2 focus:outline-none"
                        onClick={toggleAddQuestion}
                    >
                        {showAddQuestion ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        )}
                    </button>
                    <h3 className="text-xl font-bold">ADD QUESTION</h3>
                </div>
                {showAddQuestion && (
                    <div className="mt-4">
            <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your question..."
                value={newQuestion}
                onChange={handleInputChange}
            ></textarea>
                        <div className="mt-2 flex justify-end">
                            <button
                                className="px-4 py-2 mr-2 text-white bg-blue-500 rounded"
                                onClick={handlePostQuestion}
                            >
                                Post
                            </button>
                            <button
                                className="px-4 py-2 text-white bg-red-500 rounded"
                                onClick={toggleAddQuestion}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};




export default QandAList;