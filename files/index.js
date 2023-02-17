const addUser = () => {
  data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value,
  };
  fetch("http://localhost:3000/addUser", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });
};
const DeleteUser = () => {
  body = { ID: document.getElementById("userID1").value };
  fetch("http://localhost:3000/delete", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then((res) => {
    console.log(res);
  });
};

const getUser = () => {
  value = { ID: document.getElementById("userID2").value };
  fetch("http://localhost:3000/get", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  }).then((res) => {
    console.log("res", res);
  });
};
const replaceUser = () => {
  value = { ID: document.getElementById("userID2").value };
  fetch("http://localhost:3000/replace", {
    method: "patch",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  }).then((res) => {
    console.log("res", res);
  });
};
