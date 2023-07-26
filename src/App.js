import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>New Dictionary App By Celia</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <p className="small">
            This app was made by Celia Corona-Doran with React{" "}
            <img src={logo} className="App-logo" alt="logo" />
          </p>
        </footer>
      </div>
    </div>
  );
}
