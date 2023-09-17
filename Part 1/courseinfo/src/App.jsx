const App = () => {
  // const-definitions
  const course = "Half Stack application development";
  const contentDescription = [
    { part1: "Fundamentals of React", exercises1: 10 },
    { part2: "Using props to pass data", exercises2: 7 },
    { part3: "State of a component", exercises3: 14 },
  ];

  //Total Component
  const Total = (props) => {
    return (
      <div>
        <p>
          {" "}
          Number of exercises{" "}
          {props.contents[0].exercises1 +
            props.contents[1].exercises2 +
            props.contents[2].exercises3}{" "}
        </p>
      </div>
    );
  };

  // Part Component
  const Part = (props) => {
    return (
      <div>
        <p>
          {" "}
          {Object.values(props.items)[0]} {Object.values(props.items)[1]}{" "}
        </p>
      </div>
    );
  };

  // Content Component
  const Content = (props) => {
    return (
      <div>
        <Part items={props.contents[0]} />
        <Part items={props.contents[1]} />
        <Part items={props.contents[2]} />
      </div>
    );
  };

  // Header component
  const Header = (props) => {
    return (
      <div>
        <p>{props.course}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content contents={contentDescription} />
      <Total contents={contentDescription} />
    </div>
  );
};

export default App;
