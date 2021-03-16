import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Book from "./components/Book";
import Column from "./components/Column";
import Container from "./components/Container";
import Nav from "./components/Nav";
import Row from "./components/Row";
import SearchContainer from "./components/SearchContainer";
import Title from "./components/Title";

import Saved from "./pages/Saved";
import Search from "./pages/Search";

// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Title />
        <Container>
          <Row>
            <Column size="2">
              <Nav />
            </Column>
            <Column size="10">
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
            </Column>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
