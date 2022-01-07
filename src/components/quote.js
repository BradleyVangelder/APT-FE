import { useState } from "react"
import useDeleteQuote from "../hooks/useDeleteQuote"
import useUpdateQuote from "../hooks/useUpdateQuote"

export default function Quote({q, quoteId, isbn, test}) {
    const [edit, setEdit] = useState(test)
    const [input, setInput] = useState(q)

    const quote = useUpdateQuote()
    const del = useDeleteQuote()

    const onSubmit = async () => {
        quote.mutateAsync({input, quoteId})
        setEdit(false)
    }

    const onDelete = async () => {
        del.mutateAsync({quoteId})
    }

    return (
        <div data-testid={isbn}>
            {
                !edit
                ?<div className="flex mb-10 items-center">
                    <p className="mr-8 font-bold text-xl">"{q}"</p>
                    <button onClick={() => setEdit(!edit)} className="bg-green-500 rounded-full mr-2 px-5 py-1 text-white text-sm font-medium">Edit</button>
                    <button onClick={() => onDelete()} className="bg-red-500 px-5 rounded-full py-1 text-white text-sm font-medium">Delete</button>
                </div>
                :<div className="flex mb-6">
                    <input aria-label="quote" className="border border-inherit w-2/6 border-zinc-900 px-5 py-1 text-sm mr-2" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button className="bg-black px-5 py-1 text-white text-sm font-medium" onClick={() => onSubmit()}>save</button>
                </div>
            }
        </div>
    )
}