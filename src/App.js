import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="image">
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/091/515/original/book.jpeg?1690634784"
              className="img-fluid"
              alt="book"
            />
            <div className="text">
              <h1>Dictionary</h1>
            </div>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="Dog" />
        </main>
        <footer className="App-footer">
          <p className="small">
            This app was made by Celia Corona-Doran with React and open sourced
            on
            <a
              href="https://github.com/Newadventure2022/Travel-Project"
              target="_blank"
              rel="noreferrer"
              title="Link to Celia's GitHub"
            >
              <span> GitHub</span>.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
