import _5 from "../images/gbagbo.jpg"
function About() {
    return ( 
        <div className="about">
            <div className="about-inner">
            <div className="about-text">
                <p className="name">Mawuli Gbagbo</p>
                <p className="description">
                I am a self-taught pencil artist, illustrator and graphic designer based in Hohoe,Ghana.
                I'm very passionate about art. My love for the artisan world ranges form creative arts, visual arts, oral arts through to all other forms of art you can think of.
                My goal is to be able to express various real life situations in different forms of arts so that a lot of audience can relate to what art really is whether you are an artistic person or not.
                </p>
                <div className="contacts">
                <a href="https://www.facebook.com/mawuli.gbagbo?_rdc=1&_rdr">FACEBOOK</a>
                <a href="https://www.instagram.com/mawuligbagbo/">INSTAGRAM</a>
                <a href="https://twitter.com/MawuliGbagbo">TWITTER</a>
                <a href="mailto:gbagboprince20@gmail.com">E-MAIL</a>

                </div>
            </div>
            <img src={_5} alt="" />

            </div>
        </div>
     );
}

export default About;