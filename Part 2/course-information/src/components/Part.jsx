export default function Part(props) {
  const { content } = props;
  return (
    <div>
      {content.map((element) => (
        <p key={element.id}>
          {element.name} {element.exercises}
        </p>
      ))}
    </div>
  );
}
