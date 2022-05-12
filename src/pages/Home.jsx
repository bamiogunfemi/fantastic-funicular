import React, { useContext, useEffect, useMemo } from "react";
import { UsernameContext } from "../context";
import useWindowFocus from 'use-window-focus';
import { useLocation } from 'react-router-dom';
const Home = () => {

  const location = useLocation();
  const windowFocused = useWindowFocus();
  const displayName = location.state;
  const [userName, setUserName, activeUser, setActiveUser] = useContext(UsernameContext)

  let cleanedDisplayName = useMemo(() => displayName || activeUser, [activeUser, displayName])
  let cleanedDisplayNameNoCase = displayName?.toLowerCase() || activeUser?.toLowerCase()

  document.title = `${cleanedDisplayName} is active`

  useEffect(() => {
    if (windowFocused) {
      setTimeout(makeIdle, 60000)
    } else {
      makeActive()
    }
  }, [windowFocused])

  const makeIdle = () => setUserName(userName.map(obj => obj.name !== cleanedDisplayName ? { ...obj, status: 'idle' } : obj))
  const makeActive = () => setUserName(userName.map(obj => obj.name === cleanedDisplayName ? { ...obj, status: 'active' } : obj))

  const logoutUsername = () => {
    setUserName(userName.filter(({ name }) => name.toLowerCase() !== cleanedDisplayNameNoCase))
    setActiveUser('')
    window.location.href = `/login`;
  }


  return (
    <div className="form">

      <section>
        <div className="form-header">
          <h1>Hey There {cleanedDisplayName}, You're active
          </h1>
          {
            userName.filter(({ name }) => name !== cleanedDisplayName).map(({ name, status }) =>
              <h4 key={name}>{name} is {status}</h4>)
          }
        </div>

        <button onClick={logoutUsername}>
          Logout  {cleanedDisplayName}
        </button>
      </section>

    </div>
  );
};

export default Home;
