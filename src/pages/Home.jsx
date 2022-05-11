import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UsernameContext } from "../context";


const Home = () => {
  const [userName, setUserName, activeUser, setActiveUser] = useContext(UsernameContext)
  const { username } = useParams()
  useEffect(() => {
    console.log(activeUser !== username, username, activeUser)
    if (activeUser !== username) {
      window.location.href = `/`;
    }
  }, [activeUser, username])


  const logoutUsername = () => {
    setUserName(userName.filter((name) => name !== activeUser))
    setActiveUser('')
    window.location.href = `/`;
  }


  return (
    <div className="form">

      <section>
        <div className="form-header">
          <h1>Hey There {activeUser}, have a good day!
          </h1>
          {
            userName.filter((name) => name !== activeUser).map((name) =>
              <h4 key={name}>{name} is also online</h4>)
          }
        </div>

        <button onClick={logoutUsername}>
          Logout  {activeUser}
        </button>
      </section>

    </div>
  );
};

export default Home;
