import "./css-components/LoginPage.css";
import React, { useState } from "react";
function LoginPage() {
  localStorage.setItem("Rank", '');
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState();
  const url1 = 'http://124.121.24.202:8899/api/v1/auth/login';

  async function loginUser(credentials) {
    return fetch(url1, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      "emailUsername": username,
      "password": password
    });
    console.log(response);
    if ("accessToken" in response) {

      localStorage.setItem("accessToken", response["accessToken"]);
      localStorage.setItem("user", JSON.stringify(response["userData"]));
      if (response.userData.email == "Doe@test.com") {
        localStorage.setItem("Rank", 'ADMIN');
        window.location.href = "/HomePage"
      } else {
        localStorage.setItem("Rank", 'USER (Admin)');
        window.location.href = "/HomePage";
      }
    } else {

    }
  }

  return (
    <form className="body" onSubmit={handleSubmit}>
      <div className="Login"  >
        <div className="Logo" align="center">
          <img src="/image/Logo-Kumwell.png" width="250px" />
          <p className="SubName">Lightning Warning System</p>
        </div>
        <div className="Login-form" >
          <p>USERNAME OR EMAIL</p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)} />
          <p>PASSWORD</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)} />
          <div align="center">
            <button type="Submit" className="btn-login" >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default LoginPage;

