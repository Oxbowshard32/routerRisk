import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";

//All pages on website
import Home from './pages/Home'
import About from './pages/About'
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import News from "./pages/News";
import ErrorPage from "./pages/ErrorPage";
import Journals, { journalsLoader } from "./pages/journals/Journals";
import JournalDetails, { journalDetailsLoader } from "./pages/journals/JournalDetails";
import JournalsError from "./pages/journals/JournalsError";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import JournalsLayout from "./layouts/JournalsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    /* Parent Page */
    <Route path= "/" element={<RootLayout />}>
      {/* Children Pages */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="journals" element={<JournalsLayout />} errorElement={<JournalsError />}>
        <Route index element={<Journals />} loader={journalsLoader} />
        <Route
          path=":id"
          element={<JournalDetails />}
          loader={journalDetailsLoader}
        />
      </Route>

      {/* Handles Error 404 */}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App

/*
import React, { createContext, useContext, useState } from 'react';

// Define a custom Router context
const RouterContext = createContext();

// Create a custom Router component to manage routing
function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (to) => {
    window.history.pushState(null, null, to);
    setCurrentPath(to);
  };

  const contextValue = {
    path: currentPath,
    navigate,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}

// Create a custom Route component
function Route({ path, children }) {
  const { path: currentPath } = useContext(RouterContext);
  if (currentPath === path) {
    return children;
  }
  return null;
}

// Create your page components
function Home() {
  return <div>Home Page</div>;
}

function About() {
  return <div>About Page</div>;
}

function Faq() {
  return <div>FAQ Page</div>;
}

function Contact() {
  return <div>Contact Page</div>;
}

function News() {
  return <div>News Page</div>;
}

function ErrorPage() {
  return <div>Error 404 Page</div>;
}

// Your App component
function App() {
  return (
    <Router>
      <Route path="/" children={<Home />} />
      <Route path="/about" children={<About />} />
      <Route path="/help/faq" children={<Faq />} />
      <Route path="/help/contact" children={<Contact />} />
      <Route path="/news" children={<News />} />
      <Route children={<ErrorPage />} />
    </Router>
  );
}

export default App;
*/