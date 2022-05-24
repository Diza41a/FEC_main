import React ,{useState} from 'react';
import questionArray from './dummydata';
import QuestionList from './QuestionList.jsx';

const QuestionsAndAnswers = () => {
  return (
    <>
      <div className="main-q-a">
       {questionArray.map((question,i) => {
        return <QuestionList key={i} question={question} ></QuestionList>
      })}
    </div>
    </>

  );
};
export default QuestionsAndAnswers;
