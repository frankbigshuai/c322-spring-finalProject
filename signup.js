const host = "http://localhost:8080";

async function signup() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let address = document.getElementById("address").value;
  let customer = {
    userName: username,
    email: email,
    password: password,
    address: address,
  };
  let request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  };
  try {
    let response = await fetch(host + "/signup", request);
    if (response.status == 200) {
      alert("The registration was successful!");
      location.href = "login.html";
    } else {
      console.log(`response status:${response.status}`);
      alert("Something went wrong!");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong!");
  }
}
