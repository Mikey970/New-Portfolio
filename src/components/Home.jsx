//fire
import Image from "../imgs/pic.jpeg"
import "../css/Home.css"
function Home() {
  return (
    <div>
     
      <h1 className="homeText">
     
        <span className="h1Home"> Hi I'm Mike  <img className="homeImg" src={Image} width="100px" height="100px" /> <br />   </span>
       
        I'm a Full-Stack Developer <br />
        Lets work!<br />
        <button className="contactButton">Let's Do It</button>
      </h1>
      
      
    </div>
  );
}

export default Home