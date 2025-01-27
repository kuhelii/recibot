import ChiefCard from "./ChiefCard"
export default function ChiefSection(){
    const chiefs=[
        {
            name: "Juan Carlos",
            img: "img/top-chiefs/img1.png",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Sophia Brown",
            img: "img/top-chiefs/img2.png",
            recipesCount: "15",
            cuisine: "Italian",
        },
        {
            name: "Akira Yamamoto",
            img: "img/top-chiefs/img3.png",
            recipesCount: "12",
            cuisine: "Japanese",
        },
        {
            name: "Maria Gonzalez",
            img: "img/top-chiefs/img4.png",
            recipesCount: "8",
            cuisine: "Spanish",
        },
        {
            name: "James Smith",
            img: "img/top-chiefs/img5.png",
            recipesCount: "20",
            cuisine: "American",
        },
        {
            name: "Elena Petrova",
            img: "img/top-chiefs/img6.png",
            recipesCount: "18",
            cuisine: "Russian",
        },
    
    ].sort(() => Math.random() - 0.5)
    return(
<div className="section chiefs">
    <h1 className="title">Our Master Chiefs</h1>
    <div className="top-chiefs-container">
{/* <ChiefCard/>
<ChiefCard/>
<ChiefCard/>
<ChiefCard/>
<ChiefCard/>
<ChiefCard/> */}
{chiefs.map(chief => <ChiefCard key={chief.name} chief={chief}/>)}
    </div>
</div>
    )
}