import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>Hellp Beacuse</h4>

      {props.meaning.definitions.map(function (definition, index) {
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
      })}
    </div>
  );
}
