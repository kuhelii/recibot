import React from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail = [], isLoading }) => {
  return (
    <div className="meals">
      {isLoading ? (
        // Show loading message while data is being fetched
        <p 
          className="loading-message"
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--primary-color)",
            marginTop: "20px",
          }}
        >
          ⏳ Loading...
        </p>
      ) : detail.length > 0 ? (
        // If meals are found, display them
        detail.map((meal) => (
          <div className="mealImg" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
            <NavLink to={`/meal/${meal.idMeal}`}>
              <button className="recipe-btn">Recipe</button>
            </NavLink>
          </div>
        ))
      ) : (
        // If no results are found after loading
        <p 
          className="no-results" 
          style={{
            textAlign: "center", 
            fontSize: "1.2rem", 
            fontWeight: "bold", 
            color: "#ff5733", 
            marginTop: "20px",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: "#fff4f2"
          }}
        >
          🔍 <span style={{ fontSize: "1.4rem" }}>No results found!</span> <br />
          <b style={{ color: "#d32f2f" }}>💬 Need help?</b> 
          &nbsp; Chat with our  
          <NavLink 
            to="/recibot" 
            style={{ color: "var(--primary-color)", fontWeight: "bold", textDecoration: "underline", marginLeft: "5px" }}
          >
            <b>:"Recibot": </b>
          </NavLink> 
          &nbsp;for cooking tips and recipe instructions!
        </p>
      )}
    </div>
  );
};

export default Mealcards;




