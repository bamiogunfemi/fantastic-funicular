import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UsernameContext } from "../context";



const Login = () => {
  const [displayName, setDisplayName] = useState("");
  const [userName, setUserName, _, setActiveUser] = useContext(UsernameContext)
  const history = useHistory()
  let cleanedName = displayName.toLowerCase().replace(/ /g, "_")

  const handleSubmit = (event) => {
    event.preventDefault();
    setActiveUser(cleanedName)
    const newUsers = [...userName, { name: cleanedName, status: 'active' }]
    setUserName(newUsers)
    history.push({
      pathname: `/`,
      state: cleanedName
    });


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
