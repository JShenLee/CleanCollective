import React from "react";
import { useState } from "react";
//simulates data returned from a API
import data from "./mock-data.json";

export const CreateForm = () => {
  // we can access the states data with the contact variable.
  // WE can change the state using the setContacts function
  const [contacts, setContacts] = useState(data);

  return (
    <div>
      {/*as the map functions iterates through the array of data it allows us to access each object through the contact variable */}

      <select name="cars" id="cars">
        {contacts.map((contact) => (
          <option value="volvo">{contact.fullName}</option>
        ))}
      </select>
    </div>
  );
};

export default CreateForm;
