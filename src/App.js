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
          <Dictionary defaultKeyword="Smile" />
        </main>
        <section>
          <footer className="App-footer">
            <div className="GitHub">
              This app was made by{" "}
              <a
                href="https://celia-corona-doran2023.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Link to Celia's Portfolio"
              >
                <span> Celia Corona-Doran </span>
              </a>
              and open sourced on
              <a
                href="https://github.com/Newadventure2022/Travel-Project"
                target="_blank"
                rel="noreferrer"
                title="Link to Celia's GitHub"
              >
                <span> GitHub</span>.
              </a>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}
