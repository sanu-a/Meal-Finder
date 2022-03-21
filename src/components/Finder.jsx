import React, { useEffect, useRef, useState } from "react";
import Result from "./Result";
import Shuffle from "./Shuffle";
import "./styles/Finder.css";

function Finder() {
  const [showResults, setShowResults] = useState(false);
  const [showShuffle, setShowShuffle] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState(null);
  const [showDescription, setShowDescription] = useState(false);
  const [shuffleData, setShuffleData] = useState(null);

  function search() {
    setShowShuffle(false);
    setShowDescription(false);
    if (!searchValue.trim()) {
      alert("Please enter your meal");
      setSearchValue("");
      return;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        const reqData = data.meals;
        setResult(reqData);
      });
    setShowResults(true);
  }

  function shuffle() {
    setShowResults(false);
    setShowShuffle(true);
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((resp) => {
        const data = resp.meals;
        setShuffleData(data[0]);
      });
  }
  return (
    <>
      <header>
        <h1 id="heading1" className="heading">
          Meal Finder
        </h1>
        <div>
          <span style={{ position: "relative", width: 300 }}>
            <input
              id="input"
              className="finder"
              type="text"
              placeholder="search for meals or keywords"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />

            <button id="search" className="finder" onClick={search}>
              🔎
            </button>
          </span>
          <button id="shuffle" className="finder" onClick={shuffle}>
            🔀
          </button>
        </div>
      </header>
      {showResults ? (
        <Result
          searchValue={searchValue}
          // setSearchValue={setSearchValue}
          result={result}
          showDescription={showDescription}
          setShowDescription={setShowDescription}
        />
      ) : null}
      {showShuffle ? <Shuffle shuffleData={shuffleData} /> : null}
    </>
  );
}
export default Finder;
