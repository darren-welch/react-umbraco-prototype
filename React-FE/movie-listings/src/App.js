import React, { Component } from "react";
import "./App.css";
import BlogList from "./components/blogListing";
import { getAccessToken } from "./shared/umbraco-api";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PageTitle from "./components/pageTitle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }

  componentDidMount() {
    getAccessToken("login@umbreact.co.uk", "login@umbreact.co.uk").then(
      token => {
        this.getHomeContent(token);
      }
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <PageTitle data={this.state.content} />
          <div className="row">
            <div className="col text-center">
              <h2 className="text-warning mb-4">{this.state.content["movieListingsTitle"]}</h2>
              <BlogList data={this.state.content} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  getHomeContent(token) {
    fetch("http://localhost:65173/umbraco/rest/v1/content", {
      method: "get",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          content: data._embedded.content["0"].properties
        });
      });
  }
}

export default App;
