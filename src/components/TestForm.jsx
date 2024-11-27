import React, { useState } from "react";
import { questions } from "../data/questions";
import styled from "styled-components";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: "", answer: "" }),
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer: value };
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Answers:", answers);
    onSubmit(answers);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <QuestionGroup key={q.id}>
            <Question>{q.question}</Question>
            <Options>
              {q.options.map((option, i) => (
                <Option key={i}>
                  <RadioInput
                    type="radio"
                    name={`question-${index}`}
                    value={q.type.split("/")[i]}
                    checked={answers[index]?.answer === q.type.split("/")[i]}
                    onChange={() => handleChange(index, q.type.split("/")[i])}
                  />
                  {option}
                </Option>
              ))}
            </Options>
          </QuestionGroup>
        ))}
        <SubmitButton type="submit">제출하기</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default TestForm;

const FormContainer = styled.div`
  height: 65vh; 
  width: 80%; 
  overflow-y: auto; 
  padding: 30px; 
  border: 2px solid #eee; 
  border-radius: 12px; 
  background: white; 
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
  margin: 20px auto; 
  scroll-behavior: smooth;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionGroup = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  input:checked + & {
    background-color: #ffcccc;
  }
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 1rem;
  color: white;
  background-color: #cc0000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6666;
  }
`;
