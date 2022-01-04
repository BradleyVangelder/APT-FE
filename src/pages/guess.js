import axios from "axios";
import { useState } from "react";
import { API_URL } from "../app/constants";
import useGetBeforeGuess from "../hooks/useGetBeforeGuess"
import useGetBooks from "../hooks/useGetBooks";

export default function Guess() {
    const books = useGetBooks();
    const [title, setTitle] = useState("Zero to one");
    const [success, setSuccess] = useState(false);
    const [wrong, setWrong] = useState(false);

    const {data, isFetched, refetch} = useGetBeforeGuess();

    const handleSubmit = async (quoteId, bookTitleGuess) => {
        const { data } = await axios.get(API_URL + "/bookquotes/guess/" + quoteId + "/" + bookTitleGuess);
        if(data === true) {
            setSuccess(true)
            setWrong(false)
            refetch();
        } else {
            setSuccess(false)
            setWrong(true)
        }
        return data;
    }
    return (
        <div className="p-10">
            {
                !isFetched
                ? <p>loading</p>
                : <p className="mr-8 font-black text-4xl mb-3">"{data.quote}"</p>
            }

            <p className={wrong ? "block text-red-500 font-light text-sm mb-1" : "hidden"}>Wrong answer!</p>
            <p className={success ? "block text-green-500 font-light text-sm mb-1" : "hidden"}>Right, Congrats!</p>

            {
                !isFetched
                ? <p></p>
                : <div>
                    <select onChange={(e) => setTitle(e.target.value)} value={title} className="border border-inherit border-zinc-900 px-5 py-1 text-sm mr-2">
                        {
                            books.data.map(book => <option value={book.title}>{book.title}</option>)
                        }
                    </select>
                    <button onClick={() => handleSubmit(data.id, title)} className="bg-black px-5 py-1 text-white text-sm font-medium">Check</button>
                </div>
            }
        </div>
    )
}