export default function (props) {
  const { content } = props;
  const arr = content.map((element) => element.exercises);
  const initialValue = 0;
  const arrSum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return (
    <div>
      <h3>total of {arrSum} exercises</h3>
    </div>
  );
}
