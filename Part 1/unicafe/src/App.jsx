import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // StatisticLine Component
  const StatisticLine = (props) => {
    return (
      <table style={{ width: "25%" }}>
        <tbody>
          <tr>
            <td style={{ width: "25%" }}>{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  // Statistics Component
  const Statistics = (props) => {
    if (props.total === 0)
      return (
        <div>
          <p>No feedback given</p>
        </div>
      );
    else
      return (
        <div>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="total" value={props.total} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive + "%"} />
        </div>
      );
  };

  // Handle Good Click Button
  const handleClickGoodButton = () => {
    setGood(good + 1);
  };

  // Handle Neutral Click Button
  const handleClickNeutralButton = () => {
    setNeutral(neutral + 1);
  };

  // Handle Bad Click Button
  const handleClickBadButton = () => {
    setBad(bad + 1);
  };

  // Button Component
  const Button = (props) => {
    return (
      <div style={{ display: "inline" }}>
        <button onClick={props.handleClick}>{props.children}</button>
      </div>
    );
  };

  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 - bad * 1) / total;
  const positive = (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGoodButton}>Good</Button>
      <Button handleClick={handleClickNeutralButton}>Neutral</Button>
      <Button handleClick={handleClickBadButton}>Bad</Button>
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
