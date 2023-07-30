import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [image, setImage] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleImages(response) {
    console.log(response);
    setImage(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let imgApiKey = "o8145f06881d09401ad03t8b0f09e589";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    axios.get(imgApiUrl).then(handleImages);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary-container">
        <section>
          <div className="Dictionary">
            <form id="word-seach-form" onSubmit={handleSubmit}>
              <h5>What word would you like to look-up?</h5>
              <input
                type="search"
                placeholder="Enter a word"
                onChange={handleKeywordChange}
              />
              <div className="suggest">
                Suggested words: sunshine, dog, play, beach...
              </div>
            </form>
          </div>
        </section>
        <section>
          <Results results={results} />
        </section>
        <div className="Photo-Gallery">
          <section className="images">
            <Images image={image} />
          </section>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
