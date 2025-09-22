import { useState } from "react";
import "./AuthPage.css"; 

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="auth-container">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        {/* Front - Sign In */}
        <div className="card-front">
          <h2>Sign In</h2>
          <form>
            <input type="email" placeholder="Email" /><br />
            <input type="password" placeholder="Password" /><br />
            <button type="submit">Sign In</button>
          </form>
          <p>
            Don’t have an account?{" "}
            <span className="link" onClick={() => setIsFlipped(true)}>
              Sign Up
            </span>
          </p>
        </div>

        {/* Back - Sign Up */}
        <div className="card-back">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Full Name" /><br />
            <input type="email" placeholder="Email" /><br />
            <input type="password" placeholder="Password" /><br />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <span className="link" onClick={() => setIsFlipped(false)}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
