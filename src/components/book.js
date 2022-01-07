import { Link } from "react-router-dom";

export default function Book({isbn, title}) {
    return (
        <div data-testid={isbn} className="px-3 py-3 bg-orange-300 mb-4 text-sm font-medium">
            <Link to={"/quotes/" + isbn}>{title}</Link>
        </div>
    )
}