export default function ImproveSkills() {
    const list=[
        "Discover Exciting recipes",
        "Experiment with food",
        "Write own recipes",
        "Explore nutrition facts",
        "Get expert cooking tips",
        "Interactive Chatbot" 
       ]
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img10.png" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Boost Your Culinary Skills</h1>
                {list.map((item,index)=>(
                    <p className="skill-item"key={index}>{item}</p>
                ))}
                
                    <button className="btn">signup now</button>
            </div>
        </div>
    )
}