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
    <body>
      <Link to="/form" className="link-style"></Link>
      <div>
        <h1>Bake My Day!</h1>
        <p>
          lorem ipsomfdsafdfsafdsfndksaaf f fdslsk jfklsa fjdsal jfdsksla
          afjkdsla fjskl fdska fskl fjkdsl fjkdssa fjkdsla fjkdsla ajkflsda
          jfksdla fjsla fjkdsla fjdskl fdsjkla fdsjkla fjsdkalf djskalf dsjaklf
          dsjkalf dsjkalf dsjkal fjdkslajfkldsa fdjkslaf jdkls fslkdjf l
        </p>
        <div className="cake-container">
          {cakes.map((cake) => (
            <div key={cake.id} className="cake-item">
              <h3>{cake.username}</h3>
              <h2>{cake.image}</h2>
              <h4>{cake.type_name}</h4>
              <p>
                <em>{cake.description}</em>
              </p>
            </div>
          ))}
        </div>
      </div>
    </body>
  );
}
