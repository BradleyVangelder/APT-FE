import useGetRandom from "../hooks/useGetRandom"

export default function Random() {
    const {data, isFetched} = useGetRandom();

    return (
        <div className="p-10 w-screen">
            {
                !isFetched
                ? <p>loading</p>
                : <div className="flex items-center w-full mx-auto">
                    <p className="mr-2 font-bold text-5xl">"{data.quote.quote}"</p>
                    <p className="font-light text-xs">{data.bookTitle}</p>
                </div>
            }
        </div>
    )
}