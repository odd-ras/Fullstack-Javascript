import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import noteService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    noteService.getAll().then((allPersons) => {
      setPersons(allPersons);
    });
  }, []);

  // Search Input Handler Function
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  //rest of code
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <Filter search={searchValue} onFilter={handleSearchInput} />
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
      />
      <hr></hr>
      <h1>Add New Contact</h1>
      <h1>Display Contacts</h1>
      <Persons persons={persons} search={searchValue} setPersons={setPersons} />
    </div>
  );
};

export default App;
