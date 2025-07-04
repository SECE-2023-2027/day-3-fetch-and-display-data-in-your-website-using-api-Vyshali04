const userList = document.getElementById("user-list");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    userList.innerHTML = ""; // Clear loading text
    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";

      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>📧 Email:</strong> ${user.email}</p>
        <p><strong>📍 City:</strong> ${user.address.city}</p>
        <p><strong>🏢 Company:</strong> ${user.company.name}</p>
      `;

      userList.appendChild(userCard);
    });
  })
  .catch((error) => {
    userList.innerHTML = `<p style="color:red; text-align:center;">❌ Failed to load data: ${error.message}</p>`;
  });
