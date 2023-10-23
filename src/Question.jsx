import PropTypes from "prop-types";
const Question = ({
  number,
  text,
  first,
  second,
  third,
  fourth,
  handleClick,
  handleNext,
  isNextButtonDisabled,
}) => {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col justify-center items-center p-10 gap-10 w-[60vw] border-2 border-gray-500 rounded-2xl">
        <h1>Question #{number}</h1>
        <p>{text}</p>
        <div className="flex ">
          <button onClick={handleClick}>{first}</button>
          <button onClick={handleClick}>{second}</button>
          <button onClick={handleClick}>{third}</button>
          <button onClick={handleClick}>{fourth}</button>
        </div>
      </div>
      <button onClick={handleNext} disabled={isNextButtonDisabled}>
        Next Question
      </button>
    </div>
  );
};

Question.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isNextButtonDisabled: PropTypes.bool.isRequired,
};

export default Question;
