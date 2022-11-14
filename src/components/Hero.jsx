import vid from "../vids/shape_7.webm"

function Hero() {
    return ( 
        <div className="hero">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        poster="../img/banner.jpg"
      >
        <source src={vid} type="video/webm"></source>
      </video>    
      <div className="hero-text">
        <p className="welcome">WELCOME</p>
        <p className="hero-title">Mawuli's <br /> Art</p>
        <p className="hero-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        </div>   
</div>
     );
}

export default Hero;