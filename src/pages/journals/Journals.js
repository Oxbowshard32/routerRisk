import { useLoaderData, Link } from "react-router-dom"

export default function Journals() {
    const journals = useLoaderData()

    return (
        <div className="journals">
            {journals.map(journal => (
                <Link to= {journal.id.toString()} key={journal.id}>
                    <p>{journal.title}</p>
                    <p>Author: {journal.author}</p>
                </Link>
            ))}
        </div>
    )
}

export const journalsLoader = async () => {
    const res = await fetch('http://localhost:4000/journals')

    if (!res.ok) {
        throw Error('Journals could not be fetched.')
    }
    
    return res.json()
}
