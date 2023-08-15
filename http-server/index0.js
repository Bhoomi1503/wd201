const retrieveEntries = () => {
  let entries = localStorage.getItem("user-Entries");
  return entries ? JSON.parse(entries) : [];
};

let userEntries = retrieveEntries();

const displayEntries = () => {
  const entries = retrieveEntries();

  const tableEntries = entries
      .map(
          (entry) => `<tr>
              <td style = "padding: 2px 4px">${entry.name}</td>
              <td style = "padding: 2px 4px">${entry.email}</td>
              <td style = "padding: 2px 4px">${entry.password}</td>
              <td style = "padding: 2px 4px">${entry.dob}</td>
              <td style = "padding: 2px 4px">${entry.acceptedTermsAndConditions}</td>
          </tr>`
      )
      .join("\n");

  const table = `<table>
      <thead>
          <tr>
              <th style = "padding: 2px 10px">Name</th>
              <th style = "padding: 2px 10px">Email</th>
              <th style = "padding: 2px 10px">Password</th>
              <th style = "padding: 2px 10px">Dob</th>
              <th style = "padding: 2px 10px">Accepted terms?</th>
          </tr>
      </thead>
      <tbody>${tableEntries}</tbody>
  </table>`;

  let details = document.getElementById("user-entries");
  details.innerHTML = table;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions = document.getElementById("terms").checked;

  const entry = {
      name,
      email,
      password,
      dob,
      acceptedTermsAndConditions,
  };

  userEntries.push(entry);
  localStorage.setItem("user-Entries", JSON.stringify(userEntries));
  displayEntries();
  userForm.reset();
};

let userForm = document.getElementById("user-form");
userForm.addEventListener("submit", saveUserForm);

displayEntries();