import { Link } from "react-router-dom";
import Book from "../components/book";
import useGetBooks from "../hooks/useGetBooks"

export default function Books() {

    const {data, isFetched} = useGetBooks();

    return (
        <div className="p-10">
            <h1 className="font-black text-4xl mb-4">Books</h1>
            <div className="flex flex-col">
                {
                    !isFetched
                    ? <p>loading</p>
                    : data.map(book => <Book isbn={book.isbn} title={book.title} />) 
                }
            </div>
        </div>
    )
} 