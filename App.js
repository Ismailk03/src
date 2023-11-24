import React from 'react';
import './App.css';

function Header() {
  return <header>My Static App</header>;
 }

function Content() {
  return (
    <main>
      <p>Welcome to my static React app!</p>
    </main>
  );
}

function Footer() {
  return <footer>&copy; 2023 My Static App</footer>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;



