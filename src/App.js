import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            Dictionary <span className="openBook">📖</span>
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p className="small">
            This app was made by Celia Corona-Doran with React{" "}
            <img src={logo} className="App-logo" alt="logo" />
            and is open sourced on
            <a
              href="https://github.com/Newadventure2022/Travel-Project"
              target="_blank"
              rel="noreferrer"
              title="Link to Celia's GitHub"
            >
              GitHub.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
