import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        if (index <= 1) {
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definition.definition}
                <br />
                <strong>Example: </strong>
                <em>{definition.example}</em>
              </p>
              <br />
              <strong>Synonyms: </strong>
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          );
        } else return null;
      })}
    </div>
  );
}
