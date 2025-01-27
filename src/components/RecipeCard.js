import CustomImage from "./CustomImage"
export default function RecipeCard({recipe}){
    return(
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="60%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, vero!</p>
                <a href="#!" className="view-btn">VIEW RECIPE</a>
            </div>

        </div>
    )

}