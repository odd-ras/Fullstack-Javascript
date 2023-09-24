import Part from "./Part";
import Total from "./Total";

export default function Content(props) {
  const { content } = props;
  return (
    <div>
      <Part content={content} />
      <Total content={content} />
    </div>
  );
}
