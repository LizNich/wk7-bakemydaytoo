import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    async function getCakes() {
      const response = await fetch("http://localhost:8080/cakes");
      const data = await response.json();
      setCakes(data);
      console.log(data);
    }

    getCakes();
  }, []);
  return (
    <div className="app-container">
      <header>
        <Link to="/form" className="link-style"></Link>
      </header>
      <main>
        <h1>Welcome to Bake My Day!</h1>
        <section className="cake-introduction">
          <p>
            At Bake My Day, we’re all about celebrating the joy of baking and
            sharing your sweetest creations with a community that loves cakes as
            much as you do.
            <br />
            Show off your cakes, get inspired by others, swap tips, and connect
            with fellow baking enthusiasts. From towering wedding cakes to
            whimsical cupcakes, every bake tells a story, and we can’t wait to
            see yours.
            <br />
            Join the conversation, share your passion, and let’s make every day
            a little sweeter. Happy baking!
          </p>
        </section>
        <section className="cake-container">
          {cakes.map((cake) => (
            <div key={cake.id} className="cake-item">
              <h3>{cake.username}</h3>
              <img
                src={cake.image}
                alt={`${cake.type_name}`}
                className="cake-image"
              />
              <h4>{cake.type_name}</h4>
              <p>
                <em>{cake.description}</em>
              </p>
            </div>
          ))}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Bake My Day</p>
      </footer>
    </div>
  );
}
