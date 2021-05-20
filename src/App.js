import logo from "./sheCodesLogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a href="https://www.linkedin.com/in/ina-pae-72800978/">Ina Pae</a>{" "}
            and is open-sourced on{" "}
            <a href="https://github.com/17turquoise/dictionary-project">
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://ecstatic-wiles-1d2cbb.netlify.app/">Netlify</a>{" "}
            Coded by <a href="https://www.shecodes.io/">SheCodes</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
