import CustomImage from "./CustomImage";
export default function HeaderSection() {
    const images=[
        "img/gallery/img1.png",
        "img/gallery/img2.png",
        "img/gallery/img3.png",
        "img/gallery/img4.png",
        "img/gallery/img5.png",
        "img/gallery/img6.png",
        "img/gallery/img7.png",
        "img/gallery/img8.png",
        "img/gallery/img9.png"
    ].sort(() => Math.random() - 0.5)    
        return (
        <div className="section header">
            <div className="col typography">
                <h1 className="title">What We Stand For</h1>
                <p className="info">
                    Welcome to Recibot, your kitchen buddy! Whether you're looking for a quick recipe, need help with cooking tips, or want to try something new, Recibot 
                    is here to make cooking fun and easy. Ask me anything, and let’s get cooking!</p>
                    <button className="btn">explore now</button>
            </div>
    
            <div className="col gallery">
                {images.map((src,index)=>(
                    <CustomImage key={index}imgSrc={src} pt={"90%"}/>
                ))}
    
            </div>
        </div>
    )
}