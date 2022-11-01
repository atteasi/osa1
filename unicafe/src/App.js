import { useState } from "react";

const StatisticsLine = (props) => {
  return (
    <>
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
    </>
  );
};

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  } else {
    let all = props.good + props.neutral + props.bad;
    let average = (props.good * 1 + props.neutral * 0 + props.bad * -1) / all;
    console.log(props);
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine text='all' value={all}/>
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={`${(props.good / all) * 100}%`} />
          </tbody>
        </table>
      </>
    );
  }
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.clickHandle}>{props.text}</button>
    </>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandle={() => setGood(good + 1)} text="good" />
      <Button clickHandle={() => setNeutral(neutral + 1)} text="neutral" />
      <Button clickHandle={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
