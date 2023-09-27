export default function Persons(props) {
  const { filteredList } = props;
  return (
    <div>
      <ul>
        {filteredList.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
