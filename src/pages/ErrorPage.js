import { Link } from "react-router-dom"

export default function errorPage() {
    return (
        <div>
            <h2>Error 404 - Page not found. </h2>
            <p>This page does not exist!</p>

            <p>To go back click here <Link to ="/">Homepage</Link></p>
        </div>
    )
}