const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // Header Component
  const Header = (props) => {
    return (
      <div>
        <p> {props.title} </p>
      </div>
    );
  };

  // Total Component
  const Total = (props) => {
    return (
      <div>
        <p>
          {" "}
          Number of exercises{" "}
          {props.parts[0].exercises +
            props.parts[1].exercises +
            props.parts[2].exercises}{" "}
        </p>
      </div>
    );
  };

  // Content Component
  const Content = (props) => {
    return (
      <div>
        <Part arr={Object.values(props.parts)[1]} />
      </div>
    );
  };

  // Part Content
  const Part = (props) => {
    return (
      <div>
        <p>
          {" "}
          {props.arr[0].name} {props.arr[0].exercises}{" "}
        </p>
        <p>
          {" "}
          {props.arr[1].name} {props.arr[1].exercises}{" "}
        </p>
        <p>
          {" "}
          {props.arr[2].name} {props.arr[2].exercises}{" "}
        </p>
      </div>
    );
  };

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
