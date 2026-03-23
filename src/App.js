import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="image">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/091/586/original/Book.jpeg?1690709237"
              className="img-fluid"
              alt="book"
            />
            <div className="text">
              <h1>Dictionary</h1>
            </div>
          </div>
        </header>

        <main>
          <Dictionary defaultKeyword="Smile" />
        </main>
      </div>

      <footer className="App-footer">
        <div className="GitHub">
          Designed and developed by{" "}
          <a
            href="https://celiacoronadoran.com"
            target="_blank"
            rel="noreferrer"
            title="Link to Celia's Portfolio"
          >
            <span> Celia Corona-Doran 👩🏾‍💻</span>
          </a>
          at
          <a
            href="https://www.threegloves.com"
            target="_blank"
            rel="noreferrer"
            title="Link to Three Gloves"
          >
            <span> Three Gloves</span>.
          </a>
        </div>
      </footer>
    </div>
  );
}
