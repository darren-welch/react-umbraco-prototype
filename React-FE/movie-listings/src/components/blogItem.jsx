import React, { Component } from "react";

class BlogItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-sm-4 ">
        <div className="card">
        <div className="card-header text-info"><h5 className="card-title">{this.props.data.properties["title"]}</h5></div>
          <img className="card-img-top" src={'http://umbraco-react-be.azurewebsites.net' + this.props.data.properties["movieImage"]} alt="Card image cap" />
          <div className="card-body">
            <p className="text-right"><h4 className="text-danger font-weight-bold">{this.props.data.properties["score"]}%</h4></p>
            <p className="card-text"><span dangerouslySetInnerHTML={{ __html: this.props.data.properties["review"] }} /></p>
            
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
