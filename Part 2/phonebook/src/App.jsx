import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "212-456-7890" },
    { name: "Kelvin Oddras", number: "212-456-7894" },
    { name: "Karen Lewinski", number: "212-456-7893" },
    { name: "Monica Chandler", number: "212-456-7892" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  // handle typing into input field
  const handleNameEntry = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };

  //handle addition of persons
  const handleNewPersonAddition = (event) => {
    event.preventDefault();

    const newObject = {
      name: newName,
      number: newNumber,
    };
    // callback function to check existing entries
    const isExisting = (element) =>
      JSON.stringify(element) !== JSON.stringify(newObject);
    if (persons.every(isExisting)) {
      //if no duplicates
      setPersons(persons.concat(newObject));
      setNewName("");
      setNewNumber("");
      //if duplicates
    } else {
      window.alert(`${newName} is already added to phonebook!`);
      setNewName("");
      setNewNumber("");
    }
  };

  //Handle New Number Entry
  const handleNumberEntry = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };

  // Handle Filter
  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  const filterArr = persons.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onFilter={handleFilter} />
      <PersonForm
        name={newName}
        number={newNumber}
        onAddName={handleNameEntry}
        onAddNumber={handleNumberEntry}
        onAddPerson={handleNewPersonAddition}
      />

      <h2>Numbers</h2>
      <Persons filteredList={filterArr} />
    </div>
  );
};

export default App;
