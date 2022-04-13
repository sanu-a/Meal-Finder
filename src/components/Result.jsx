import React, { useState } from "react";
import Description from "./Description";
import "./styles/Result.css";

function Result(props) {
  const [hover, setHover] = useState(false);
  const [mealName, setMealName] = useState("");
  const [element, setElement] = useState();
  // console.log(props.result);
  if (!props.result) {
    return <h2>There are no search results. Try again!</h2>;
  }
  return (
    <div>
      <h2 id="heading2" className="heading2">
        Search results for '{props.searchValue}'
      </h2>
      <div id="img-container">
        {props.result.map((ele, i) => {
          return (
            <span
              key={i}
              id="img"
              onMouseEnter={(e) => {
                setHover(true);
                setMealName(ele.strMeal);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              onClick={() => {
                props.setShowDescription(true);
                setElement(ele);
              }}
            >
              <img src={ele.strMealThumb} key={ele.idMeal}></img>
              {hover && mealName === ele.strMeal ? (
                <h3>{ele.strMeal}</h3>
              ) : null}
            </span>
          );
        })}
        {props.showDescription ? <Description ele={element} /> : null}
      </div>
    </div>
  );
}
export default Result;
