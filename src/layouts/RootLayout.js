import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Adrian's React Router Risk Prototype</h1>
          {/* Creates links to go to the selected page without refreshing the website */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="news"> News</NavLink>
          <NavLink to="help"> Help</NavLink>
          <NavLink to="journals"> Journals</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
