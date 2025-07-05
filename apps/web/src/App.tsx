import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Quotes</h1>
        <p>Your daily dose of inspiration.</p>
        <button onClick={() => alert('Get the app!')}>
          Download the App
        </button>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <div className="feature-list">
            <div className="feature-item">
              <h3>Daily Quotes</h3>
              <p>Get a new quote every day to inspire you.</p>
            </div>
            <div className="feature-item">
              <h3>Favorites</h3>
              <p>Save your favorite quotes to read them later.</p>
            </div>
            <div className="feature-item">
              <h3>Notifications</h3>
              <p>Get notified daily with the quote of the day.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Daily Quotes. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;