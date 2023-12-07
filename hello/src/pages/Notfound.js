import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div>
            <h1>  Seite nicht gefunden </h1>
            <Link to="/"> Zurück zur Startseite</Link>
        </div>
    );
}

export default NotFound;