export default function Home() {
    return (
      <div className="home">
        <div>
            <h2>Welcome to Adrian's React Router Risk Prototype</h2>
        </div>
        <div>
            <h3>Hello this is the Home page to show Single-Page Applications 
                using React Router! 
            </h3>
        </div>

        <p>As shown if you were to click on one of the buttons in the top 
            right labeled, "Home", "About", "News", or "Help" it will load the next page/"route" without 
            having to reafresh the page and make a call back to the server to retrieve
            the information.</p>
      </div>
    )
  }