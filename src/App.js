import React from "react";
import { UsernameProvider } from "./context";
import Routes from "./routes";
import "./App.css";

const App = () => (
  <UsernameProvider>
    <Routes />
  </UsernameProvider>
);

export default App;
