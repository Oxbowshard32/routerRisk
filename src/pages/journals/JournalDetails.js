import { useLoaderData, useParams } from "react-router-dom"

export default function JournalDetails() {
    const { id } = useParams()
    const journal = useLoaderData()

    return (
        <div className="journal-details">
            <h2>Journal Details for {journal.title}</h2>
            <p>Author: {journal.author}</p>
            <p>Subject of journal: {journal.subject}</p>

            <div className="details">
                <p> {journal.info} </p>
            </div>
        </div>
    )
}

export const journalDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/journals/' + id)

    if (!res.ok) {
        throw Error('Journal does not exist.')
    }
    
    return res.json()
}