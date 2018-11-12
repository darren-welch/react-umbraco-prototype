import React, { Component } from "react";

class BlogList extends Component {
  render() {
    console.log(this.props.data.blogs);

    return <div className="col s12 m8 l9 left-align" />;
  }
}

export default BlogList;
