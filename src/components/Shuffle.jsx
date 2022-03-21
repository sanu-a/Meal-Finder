import React from "react";
import "./styles/Description.css";

function Shuffle(props) {
  const arr = [];
  for (let i = 1; i <= 20; i++) {
    arr.push(i);
  }
  const ele = props.shuffleData;
  if (!ele) {
    return null;
  }
  return (
    <div id="desc-container">
      <h1>{ele.strMeal}</h1>
      <img src={ele.strMealThumb} style={{ width: 300, height: 300 }} />
      <div id="category">
        <p style={{ marginBottom: 10 }}>{ele.strCategory}</p>
        <p>{ele.strArea}</p>
      </div>
      <p id="desc">{ele.strInstructions}</p>
      <h1 style={{ margin: 10, fontFamily: '"Gochi Hand", cursive' }}>
        Ingredients
      </h1>
      <div id="ing-container">
        {arr.map((e) => {
          if (!ele["strIngredient" + e]) {
            return null;
          }
          return (
            <div id="ingredients">
              {ele["strIngredient" + e] + " - " + ele["strMeasure" + e]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Shuffle;
