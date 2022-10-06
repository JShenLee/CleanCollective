import React from "react";
import { useState } from "react";
//simulates data returned from a API
import data from "./mock-data.json";

export const CreateForm = () => {
  // we can access the states data with the contact variable.
  // WE can change the state using the setContacts function
  const [contacts, setContacts] = useState(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {/*as the map functions iterates through the array of data it allows us to access each object through the contact variable */}
        {contacts.map((contact) => (
          <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CreateForm;
