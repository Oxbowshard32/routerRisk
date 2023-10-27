import { Outlet } from "react-router-dom"

export default function JournalsLayout() {
  return (
    <div className="journals-layout">
      <h2>Journals</h2>
      <p>Check out the new journals that are indexed!</p>
      
      <Outlet />
    </div>
  )
}