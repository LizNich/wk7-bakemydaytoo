import { Link } from "react-router-dom";

export default function FormPage() {
  return (
    <body>
      <Link to="/form" className="link-style"></Link>
      <h1>Join in! - Please fill in the form below</h1>
      <div className="container">
        <div className="box-text">
          <p>
            <strong>Welcome to our cake-sharing community!</strong>
            <br></br>
            To ensure a positive and enjoyable experience for everyone, please
            follow these simple rules: <br></br>
            <ol type="1">
              <li>
                Be Kind: Treat all members with respect and courtesy. Celebrate
                creativity and avoid negative or critical comments.
              </li>
              <li>
                Stay on Topic: Share posts and pictures related to cakes,
                baking, and decorating.
              </li>
              <li>
                Original Content: Only post pictures and content you own or have
                permission to share.
              </li>
              <li>
                No Offensive Material: Posts with offensive language,
                inappropriate content, or spam will be removed.
              </li>
              <li>
                Constructive Feedback: If offering advice, keep it helpful and
                supportive.
              </li>
            </ol>
            Let’s keep this a fun and friendly space for cake enthusiasts to
            connect and inspire each other!
          </p>
        </div>
        <form className="box-form">
          <input name="username" placeholder="Your Name" />
          <input
            name="image"
            placeholder="Sorry - Load image currently not available"
          />
          <input name="type_name" placeholder="Cake Type" />
          <input name="description" placeholder="Your Description" />
          <button>Submit it!</button>
        </form>
      </div>
    </body>
  );
}
