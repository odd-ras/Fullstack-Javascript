import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  //Hardcoded Start Data
  //An array of objects
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-53235", id: 2 },
    { name: "Dan Abramov", number: "12-43-23434", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-64231", id: 4 },
  ]);

  const [searchValue, setSearchValue] = useState("");

  // Search Input Handler Function
  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  //rest of code
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={searchValue} onFilter={handleSearchInput} />,
      <PersonForm persons={persons} setPersons={setPersons} />
      <hr></hr>
      <h1>Add New Contact</h1>
      <h1>Display Contacts</h1>
      <Persons persons={persons} search={searchValue} />
    </div>
  );
};

export default App;
