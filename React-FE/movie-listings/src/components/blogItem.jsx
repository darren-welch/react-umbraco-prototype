import React, { Component } from "react";

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-6 ">
        <div className="card">
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-title">{this.props.data.properties["title"]}</p>
            <p className="card-text">{this.props.data.properties["review"]}</p>
          </div>
        </div>
      </div>
    );
  }

  formatDate(dateTime) {
    return (
      dateTime.getMonth() + "/" + dateTime.getDate() + "/" + dateTime.getYear()
    );
  }
}

export default BlogItem;
