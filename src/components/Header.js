import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
            <nav className="nav">
                <div className="logo">
                    <p className="logo">Logo</p>
                </div>
                <div className="links">
                    <Link to="/" >
                        <div>Header</div>
                    </Link>
                </div>
            </nav>
        </>
    )
}