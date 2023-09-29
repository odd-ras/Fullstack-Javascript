import { useState } from "react";

export default function PersonForm(props) {
  const { persons, setPersons } = props;
  const [newEntry, setNewEntry] = useState({
    name: "",
    number: "",
    id: "",
  });

  // Handle Name Change
  const handleNameChange = (e) => {
    setNewEntry({
      ...newEntry,
      name: e.target.value,
    });
  };

  const handleNumberChange = (e) => {
    setNewEntry({
      ...newEntry,
      number: e.target.value,
    });
  };

  const handleIdChange = (e) => {
    setNewEntry({
      ...newEntry,
      id: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const exists = persons.find((user) => user.name === newEntry.name);
    if (exists) {
      window.alert("Name already exists!!!");
      setNewEntry({
        ...newEntry,
        name: "",
        number: "",
        id: "",
      });
    } else {
      setPersons(persons.concat(newEntry));
      setNewEntry({
        ...newEntry,
        name: "",
        number: "",
        id: "",
      });
    }
  };

  return (
    <form>
      <p>
        Name :{" "}
        <input
          type="text"
          value={newEntry.name}
          name="name"
          onChange={handleNameChange}
        />
      </p>{" "}
      <p>
        Number :{" "}
        <input
          type="text"
          name="number"
          value={newEntry.number}
          onChange={handleNumberChange}
        />
      </p>{" "}
      <p>
        Id :{" "}
        <input
          type="text"
          value={newEntry.id}
          name="Id"
          onChange={handleIdChange}
        />
      </p>{" "}
      <p>
        <button type="submit" onClick={handleSubmit}>
          Add User
        </button>
      </p>
    </form>
  );
}
