import React, { useContext, useState } from "react";
import { UsernameContext } from "../context";


const Login = () => {
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName, _, setActiveUser] = useContext(UsernameContext)


  const handleSubmit = (event) => {
    console.log(displayName)
    event.preventDefault();
    setActiveUser(displayName)
    const newUsers = [...userName, displayName]
    setUserName([...new Set(newUsers)])
    window.location.href = `/${displayName}`;
  };


  return (
    <div className="form">
      <section>
        <div className="form-header">
          <h1>Hey There,Sign in with your username!</h1>
        </div>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="displayName">Username *</label>
              <input
                required
                type="text"
                name="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button type="submit">Submit Feedback</button>
            </div>
          </form>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Login;
