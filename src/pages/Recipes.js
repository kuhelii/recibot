import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard";

export default function Recipes(){
    const recipes=[
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img1.png",
            authorImg: "/img/top-chiefs/img1.png",
        },
        {
            title: "Panner Tikka Appetizer",
            image: "/img/gallery/img12.png",
            authorImg: "/img/top-chiefs/img1.png",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img10.png",
            authorImg: "/img/top-chiefs/img2.png",
        },
        {
            title: "Juicy Dumpling",
            image: "/img/gallery/img11.png",
            authorImg: "/img/top-chiefs/img3.png",
        },
        {
            title: "Spaghetti and Metaballs",
            image: "/img/gallery/img4.png",
            authorImg: "/img/top-chiefs/img4.png",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img5.png",
            authorImg: "/img/top-chiefs/img5.png",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img6.png",
            authorImg: "/img/top-chiefs/img6.png",
        }
       ].sort(() => Math.random() - 0.5)
    return(
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
            {/* <RecipeCard/> */}
            {recipes.map((recipe,index) => (
                <RecipeCard key={index} recipe={recipe}/>

            ))}
            
            </div>

        </div>
    )
}