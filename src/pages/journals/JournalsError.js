import { Link, useRouteError } from "react-router-dom"

export default function JournalsError() {
  const error = useRouteError()

  return (
    <div className="journals-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Go back to the Homepage</Link>
    </div>
  )
}