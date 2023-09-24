import Content from "./Content";
import Header from "./Header";

export default function Course(props) {
  const { courses } = props;
  return (
    <div>
      {courses.map((element) => (
        <div key={element.id}>
          <Header name={element.name} />
          <Content content={element.parts} />
        </div>
      ))}
    </div>
  );
}
