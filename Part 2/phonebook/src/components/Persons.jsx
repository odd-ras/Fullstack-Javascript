export default function Persons({ persons, search }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>Contacts</th>
        </tr>
      </thead>
      <tbody>
        {persons
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((person) => (
            <tr key={person.id}>
              <td>{person.name}: </td>
              <td>{person.number}</td>
              <td>{person.id}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
