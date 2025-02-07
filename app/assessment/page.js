"use client";
import { useCallback, useEffect, useState } from "react";
import LeftPane from "@/components/LeftPane";
import QuestionView from "@/components/QuestionView";
import AssessmentScore from "@/components/AssessmentScore";
import useWebSocket from "@/customHooks/useWebSocket";

const Assessment = () => {
  const [assessmentTitles, setAssessmentTitles] = useState([]);
  const [questionMetaData, setQuestionMetaData] = useState(null);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleDataReceived = useCallback((response) => {
    if (response.type === "titles") {
      setAssessmentTitles(response.data);
    } else if (response.type === "question") {
      setQuestionMetaData(response.questionMetaData);
      setCurrentSetIndex(response.questionMetaData.currentSetIndex);
    } else if (response.type === "end") {
      setQuestionMetaData(null);
    }
  }, []);

  useEffect(() => {
    if (questionMetaData === null) {
      setShowScore(true);
    } else {
      setShowScore(false);
    }
  }, [questionMetaData]);

  const sendOption = useWebSocket(handleDataReceived);

  return (
    <div className="h-[100vh] bg-white ">
      <p className="text-app-header-blue text-[30px] font-medium pl-8 py-3 bg-app-faded-white ">
        Provn.ai
      </p>

      <div className="mt-12 flex">
        <LeftPane
          assessmentTitles={assessmentTitles}
          currentStep={showScore ? currentSetIndex + 1 : currentSetIndex}
        />
        {!showScore ? (
          <QuestionView
            questionMetaData={questionMetaData}
            sendOption={sendOption}
          />
        ) : (
          <AssessmentScore />
        )}
      </div>
    </div>
  );
};

export default Assessment;
