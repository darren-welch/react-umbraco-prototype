import React, { Component } from "react";

class PageTitle extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4 text-center">
          {this.props.data["pageTitle"]}{" "}
        </h1>
        <hr className="my-4" />
        <p className="lead text-right">
          Developed by:{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://darrenwelch.co.uk"
          >
            Darren Welch
          </a>
        </p>
      </div>
    );
  }
}

export default PageTitle;
