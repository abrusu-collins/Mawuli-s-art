import threed from "../images/3d-2.webp"
import three from "../images/3d.webp"

function Dream() {
    return (
        <div className="dream">
            <p className="slogan">
                Dream it.
            </p>
            <p className="design">
            I Design it.
            </p>
            <div className="img">
            <img className="img1" src={threed} alt="" />
            <img src={three} alt="" />

            </div>
        </div>
      );
}

export default Dream;