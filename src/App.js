import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Dictionary Appt</p>
      </header>
      <footer className="App-footer">
        <p>
          This app was made with React{" "}
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </footer>
    </div>
  );
}
