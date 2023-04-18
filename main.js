import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { validate } from './validation.js'

/*const response = await fetch(`http://localhost:8080/api/utenti/login/${username}/${password}`);
const apiGetAll = await fetch (`http://localhost:8080/api/utenti/findAll`);*/


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Login</h1>
    <div class="formContainer">
    <form method="post" action="Login" id="loginForm">
      <div class="formRow">
        <div class="labelContainer">
          <label for="usernameField"> Username</label>
        </div>
        <div class="fieldContainer">
          <div class="field">
            <input type="text" name="username" id="usernameField" class="inputField required"/>
          </div>
          <div class="validation">
            <p class="error hidden"> campo obbligatorio</p>
          </div>
        </div>
      </div>
      <div class="formRow">
        <div class="labelContainer">
          <label for="passwordField"> Password</label>
        </div>
        <div class="fieldContainer">
          <div class="field">
            <input type="password" name="password" id="passwordField" class="inputField required"/>
          </div>
          <div class="validation">
            <p class="error hidden"> campo obbligatorio</p>
          </div>
        </div>
      </div>
      <div class="formRow">
        <div class="fieldContainer">
          <div class="field">
            <input type="submit" class="inputFieldButton"/>
          </div>
          <div class="validation">
            <p class="error hidden"> credenziali errate</p>
          </div>
        </div>
      </div>
    </form>
    </div>
`
validate(document.querySelector("#loginForm"))