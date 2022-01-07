import { useState } from "react";
import {
    useParams
  } from "react-router-dom";
import useCreateQuote from "../hooks/useCreateQuote";
import useGetQuotes from "../hooks/useGetQuotes";
import Quote from "../components/quote";

export default function Quotes(props) {

    const [newQuote, setNewQuote] = useState("")

    const create = useCreateQuote()

    const { isbn } = useParams();

    const {data, isFetched} = useGetQuotes(isbn);

    const onAdd = async () => {
        create.mutateAsync({isbn: data.isbn, quote: newQuote})
        setNewQuote("")
    }

    return (
        <div className="p-10">
            {
                !isFetched
                ? <p></p>
                : <h2 className="font-black text-3xl mb-7">{data.bookTitle}</h2>
            }

            <p className="mb-2 text-xs font-light">Add a quote:</p>
            <div className="mb-14">
                <input className="border border-inherit border-zinc-900 px-5 py-1 text-sm mr-2" value={newQuote} onChange={(e) => setNewQuote(e.target.value)}/>
                <button onClick={() => onAdd()} className="bg-black px-5 py-1 text-white text-sm font-medium">Add</button>
            </div>
        {
            !isFetched
            ? <p>loading</p>
            : data.quotes.map(quote => <Quote isbn={data.isbn} q={quote.quote} quoteId={quote.id} bookId={data.id} bookTitle={data.bookTitle} />)
        }
        </div>
    )
}