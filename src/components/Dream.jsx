import img1 from "../images/3d-2.webp"
import img2 from "../images/3d.webp"

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
            <img className="img1" src={img1} alt="" />
            <img src={img2} alt="" />

            </div>
        </div>
      );
}

export default Dream;