import * as React from "react"
import { Link } from "gatsby"
// import "/Users/deodedianto/Documents/web deo/greentea/static/css/font-awesome.min.css"

function Whatsapp() {
    return (
        <div className="go-top">
            <p>
                <Link to="https://wa.me/6285204409450?text=Mas Roni, Saya Mau Konsultasi"><i className="fab fa-whatsapp"></i></Link>

            </p>
        </div>
    );
}

  export default Whatsapp