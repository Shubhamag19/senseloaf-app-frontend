import { useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const QuestionView = ({ questionMetaData, sendOption }) => {
  const {
    currentSetIndex = 0,
    assessmentTitle = "",
    questionData = {},
    currentQuestionIndex = 0,
    totalQuestions = 0,
  } = questionMetaData ?? {};

  const {
    id = null,
    questionIndex = "",
    question = "",
    options = [],
    optionsFeedback = [],
  } = questionData ?? {};

  const [progressWidthPerc, setProgressWidthPerc] = useState(0);
  const [userOptionFeedback, setUserOptionFeedback] = useState("");

  useEffect(() => {
    setProgressWidthPerc(() => {
      return ((currentQuestionIndex - 1) / totalQuestions) * 100;
    });
    setUserOptionFeedback("");
  }, [questionMetaData]);

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    setSelectedOption("");
  }, [questionMetaData]);

  const handleSelectOption = (id) => {
    if (!selectedOption) {
      setSelectedOption(id);
      setProgressWidthPerc(() => {
        return (currentQuestionIndex / totalQuestions) * 100;
      });

      optionsFeedback.forEach((feedback) => {
        if (feedback.id === id) {
          setUserOptionFeedback(feedback.option);
        }
      });

      setTimeout(() => {
        sendOption(id);
      }, 2000);
    }
  };

  return (
    <div className="bg-white w-[70vw]">
      <div className="flex justify-between items-center mx-4 mt-4">
        <p className="font-medium text-app-header-blue">
          AI READINESS ASSESSMENT
        </p>
        <RxCrossCircled className="w-6 h-6 text-app-header-blue mr-28" />
      </div>
      <div className="mt-9 ml-20 w-[70%]">
        <div className="flex justify-between items-center pt-6">
          <p className="font-medium text-[20px] text-app-header-blue">
            {assessmentTitle}
          </p>

          <div className="w-36 h-3 bg-app-light-green rounded-full">
            <div
              className={`h-full bg-app-dark-green rounded-full`}
              style={{
                width: `${progressWidthPerc}%`,
                transition: progressWidthPerc > 0 ? "width 0.4s ease" : "none",
              }}
            ></div>
          </div>
        </div>
        {userOptionFeedback && (
          <div className="mt-6 bg-app-bg-gradient rounded-[10px] py-4 px-3 text-lg font-normal text-app-header-blue">
            <p className="font-bold">Noted</p>
            <p className="text-lg font-normal mt-1">{userOptionFeedback}</p>
          </div>
        )}
        <div className="mt-6 bg-app-border rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] py-4 px-3 text-lg font-normal text-app-header-blue">
          Q{questionIndex} {question}
        </div>
        <div className="mb-10">
          {options?.map((eachOption) => {
            const { id, option } = eachOption;
            return selectedOption === id ? (
              <div
                key={id}
                className={`mt-6 bg-white rounded-[10px] p-[1px] text-lg font-light text-app-options-blue `}
                style={{
                  background: "linear-gradient(to right, #007BE5, #00E582)",
                }}
              >
                <div className="bg-white py-4 px-3 rounded-[9px]">{option}</div>
              </div>
            ) : (
              <div
                key={id}
                className={`mt-6 bg-white rounded-[10px] py-4 px-3 text-lg font-light text-app-options-blue border border-app-options-border ${
                  selectedOption === "" ? "cursor-pointer" : "cursor-default"
                } `}
                onClick={() => handleSelectOption(id)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionView;
