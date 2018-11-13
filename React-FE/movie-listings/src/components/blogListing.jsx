import React, { Component } from "react";
import { getAccessToken } from "../shared/umbraco-api";
import BlogItem from "../components/blogItem";

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }
  componentDidMount() {
    getAccessToken().then(token => {
      this.getMovies(token);
    });
  }
  render() {
    if (this.state) {
      return (
        <div className="row">
          {this.state.content.map((item, index) => {
            return <BlogItem data={item} />;
          })}
        </div>
      );
    } else {
      return <span>Loading...</span>;
    }
  }

  getMovies(token, nodeid) {
    fetch("http://localhost:65173/umbraco/rest/v1/content/1071/children", {
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
          content: data._embedded.content
        });
      });
  }
}

export default BlogList;
