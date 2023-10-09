import noteService from "../services/persons";
import { useState } from "react";

export default function Persons({ persons, search, setPersons }) {
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
              <td>
                <button
                  onClick={() => {
                    if (window.confirm(`Delete Entry ${person.name}`)) {
                      noteService.deleteEntry(person.id).then(() => {
                        setPersons(persons.filter((p) => p.id !== person.id));
                      });
                      //setPersons(persons.filter((p) => p.id !== person.id));
                    }

                    // window.confirm(`Delete Entry ${person.name}?`)
                    //   ? noteService.deleteEntry(person.id)
                    //   : "";
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
