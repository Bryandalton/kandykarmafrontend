import React from "react";
import Login from "./components/pages/login";
import About from "./components/pages/about";
import Survey from "./components/pages/survey";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div id="menu">
          <ul id="menu-items">
            <li className="menu-item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link to="/survey">Survey</Link>
            </li>
            <li className="menu-item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="menu-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="display-container">
          <Routes>
            <Route path="/" element={""} />
            <Route path="/about" element={<About />} />
            <Route path="/survey" element={<Survey />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
          <div id="menu-background-image"></div>
      </ApolloProvider>
    </>
  );
}

export default App;
