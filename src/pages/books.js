import { useState } from "react";
import { Link } from "react-router-dom";
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
                    : data.map(book => {
                        return (
                            <div className="px-3 py-3 bg-orange-300 mb-4 text-sm font-medium">
                                <Link to={"/quotes/" + book.isbn}>{book.title}</Link>
                            </div>
                        )
                    }) 
                }
            </div>
        </div>
    )
} 