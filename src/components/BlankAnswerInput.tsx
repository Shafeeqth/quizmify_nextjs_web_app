"use client"
import keywordExtractor from "keyword-extractor";
import React, { useMemo } from "react";
type Props = {
  answer: string;
  setBlankAnswers: React.Dispatch<React.SetStateAction<string>>
};

const BlankAnswerInput = ({ answer, setBlankAnswers }: Props) => {
  const BLANKS = "_____";
  const keywords = useMemo(() => {
    const words = keywordExtractor.extract(answer, {
      language: "english",
      remove_digits: true,
      return_changed_case: false,
      remove_duplicates: false,
    });
    const shuffled = words.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }, [answer]);

  const answerWithBlanks = useMemo(() => {
    const answerWithBlanks = keywords.reduce((acc, keyword) => {
      return acc.replace(keyword, BLANKS);
    }, answer);
    setBlankAnswers(answerWithBlanks)
    return answerWithBlanks;
  }, [keywords, answer, setBlankAnswers]);

  return (
    <div className="flex justify-start w-full mt-4">
      <h1 className="text-xl font-semibold">
        {answerWithBlanks.split(BLANKS).map((part, index, arr) => {
          return (
            <>
              {part}
              {index === arr.length - 1 ? null : (
                <input
                  id="user-blank-input"
                  className="text-center border-b-2 border-black dark:border-white"
                />
              )}
            </>
          );
        })}
      </h1>
    </div>
  );
};

export default BlankAnswerInput;
