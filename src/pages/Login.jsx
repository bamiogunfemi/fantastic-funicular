import React, { useContext, useState } from "react";
import { UsernameContext } from "../context";



const Login = () => {
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName, _, setActiveUser] = useContext(UsernameContext)


  const handleSubmit = (event) => {
    let cleanedName = displayName.toLowerCase().replace(/ /g, "_")
    event.preventDefault();
    setActiveUser(cleanedName)
    const newUsers = [...userName, cleanedName]
    setUserName([...new Set(newUsers)])
    window.close()
    window.open(`${window.location.href}${cleanedName}`).focus()

  }

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
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Login;
