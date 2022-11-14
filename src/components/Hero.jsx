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
</div>
     );
}

export default Hero;