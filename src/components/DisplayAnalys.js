import { useState } from "react";
import axios from "axios";
import styled from "styled-components";


const initialRecipe = `2 overripe large bananas apple pork`;

const DisplayAnalys = () => {
  const [recipeText, setRecipeText] = useState(initialRecipe);
  const [calories, setCalories] = useState(0);
  const [healthLabels, setHealthLabels] = useState(["no labels now"]);
  const [nutrients, setNutrients] = useState({
    CA: { label: "Calcium, Ca", quantity: 42.12, unit: "mg" },
  });

  console.log("Initial calories: ", calories);
  console.log("Initial health labels: ", healthLabels);
  console.log("Initial NUTRIENTS: ", nutrients);
  console.log("Initial NUTRIENTS LABEL: ", nutrients["CA"]["label"]);
  console.log("Initial NUTRIENTS QUANTITY: ", nutrients["CA"]["quantity"]);

  const getInfo = () => {
    const axios = require("axios");

    const options = {
      method: "GET",
      url: "http://localhost:8000/display",
      params: { ingr: recipeText },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setCalories(response.data["calories"]);
        setHealthLabels(response.data["healthLabels"]);
        setNutrients(response.data["totalNutrients"])
        console.log("NUTRIENTS TOTAL: ", response.data["totalNutrients"]);
        console.log(
          "NUTRIENTS SUGAR: ",
          response.data["totalNutrients"]["SUGAR"].label
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div>
        <h1>API Display</h1>
        <button onClick={getInfo}>Get API information</button>
      </div>
      <div>
        <h2>Calories in this recipe: {calories}</h2>
        <div>
        <h2>Health Characteristics:</h2>
          
          <ListStyled>
          {healthLabels.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
          </ListStyled>
        </div>
        


        <h2>
        Nutrients:
        </h2>
        <ListStyled>
          {Object.keys(nutrients).map((nutrient, index) => (
            
            <div className="nutrient-info" key={index}>
              <ul>
              <li> Label: {nutrients[nutrient]["label"]}</li>
              <li> Quantity: {nutrients[nutrient]["quantity"]}</li>
              <li> Unit: {nutrients[nutrient]["unit"]}</li>
              </ul>
            </div>

          ))}
     </ListStyled>

      </div>
    </div>
  );
};

export default DisplayAnalys;


const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  ul {
    list-style-type: none;
  }
`