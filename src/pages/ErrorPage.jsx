import { Link } from "react-router-dom";

export default function ErrorPage(){
    return(
        <>
            <div className="error-message">
                We are sorry, but the page was not found! You can go back home by clicking <Link to='/'>here</Link>
            </div>
        </>
    )
}