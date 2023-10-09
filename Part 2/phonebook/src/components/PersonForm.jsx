import { useState } from "react";
import noteService from "../services/persons";

export default function PersonForm(props) {
  const { persons, setPersons } = props;
  const [newEntry, setNewEntry] = useState({
    name: "",
    number: "",
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

  // const handleIdChange = (e) => {
  //   setNewEntry({
  //     ...newEntry,
  //     id: e.target.value,
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = persons.find((user) => user.name === newEntry.name);
    const changedPerson = { ...person, number: newEntry.number };

    if (person) {
      const index = persons.findIndex((el) => el.name === newEntry.name);
      const userId = index + 1;
      window.confirm(
        `${newEntry.name} is already added to phonebook, replace the old number with a new one?`
      )
        ? noteService.update(userId, changedPerson).then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.name !== newEntry.name ? person : updatedPerson
              )
            );
          })
        : "";
      setNewEntry({
        ...newEntry,
        name: "",
        number: "",
      });
    } else {
      noteService.create(newEntry).then((newPersonObject) => {
        setPersons(persons.concat(newPersonObject));
        setNewEntry({
          ...newEntry,
          name: "",
          number: "",
        });
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
        <button type="submit" onClick={handleSubmit}>
          Add User
        </button>
      </p>
    </form>
  );
}
