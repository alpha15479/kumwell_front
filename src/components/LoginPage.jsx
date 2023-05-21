import "./css-components/LoginPage.css";
import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import Cookies from 'js-cookie';
function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [onInput, setOnInput] = useState('');
  Cookies.remove('accessToken');
  const url1 = 'http://103.225.27.60:8082/api/v1/auth/login';
  async function loginUser(credentials) {
    return fetch(url1, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      "emailUsername": username,
      "password": password
    })
   

    if ("accessToken" in response) {
      const str = response.userData.username;
      const extracted = str.substring(0, 5);
      Cookies.set('acNam', extracted);
      Cookies.set('report', response.userData.role.report);
      Cookies.set('settingDevice', response.userData.role.settingDevice);
      Cookies.set('settingUser', response.userData.role.settingUser);
      Cookies.set('simulationMode', response.userData.role.simulationMode);
      Cookies.set('viewer', response.userData.role.viewer);
      console.log(Cookies.get('report'));
      console.log(Cookies.get('settingDevice'));
      console.log(Cookies.get('settingUser'));
      console.log(Cookies.get('simulationMode'));
      console.log(Cookies.get('viewer'));

      setError(false);
      swal({
        title: "Login Success",
        icon: "success",
      }).then(() => {
        Cookies.set('accessToken', response.accessToken, { secure: true, expires: 1 })
        if (response.userData.email === "admin@kumwell.com") {
          Cookies.set('Role', 'Admin')
          window.location.href = "/HomePage"
        } else {
          Cookies.set('Role', 'User');
          window.location.href = "/HomePage"
        }
      });
    }
    else if (username.trim().length === 0) {
      setOnInput(true);
      setError(false);
    }
    else if (password.trim().length === 0) {
      setOnInput(true);
      setError(false);
    }
    else {
      setError(true);
      setOnInput(false);
    }
  }
  useEffect(() => {
    if (window.location.pathname != "/") {
      window.location.href = "/";
    }
  }, [])
  return (
    <form className="body" onSubmit={handleSubmit}>
      <div className="Login"  >
        <div className="Logo" align="center">
          <img src="/image/Logo-Kumwell.png" width="250px" />
          <p className="SubName">Lightning Warning System</p>
        </div>
        <section className="flex">
          <div className="Login-form" >
            <p>USERNAME OR EMAIL</p>
            <input
              type="text"
              value={username || ''}
              id="username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <p>PASSWORD</p>
            <input
              type="password"
              value={password || ''}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error ? <><div className="wrong-message">username หรือ password ไม่ถูกต้อง</div></> : <></>}
            {onInput ? <><div className="wrong-message">กรุณาป้อนข้อมูล</div></> : <></>}
            <div align="center">
              <button type="Submit" className="btn-login" >
                Sign In
              </button>
            </div>
          </div>
        </section>
      </div>
      <div className="setOverFlow">
      </div>
    </form>
  )
}

export default LoginPage;

