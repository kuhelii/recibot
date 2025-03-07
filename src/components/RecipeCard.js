import CustomImage from "./CustomImage";
import { NavLink } from "react-router-dom"; 

export default function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="60%" />
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">
                    Discover amazing recipes with <span style={{ color: "#ff5733", fontWeight: "bold" }}>Recibot</span>! 🍽️  
                    Get personalized cooking tips and explore new flavors effortlessly. 🚀  
                </p>
                <NavLink to="/Recibot" className="view-btn">VIEW RECIPE</NavLink> 
            </div>
        </div>
    );
}
