import React from "react";
import './ResultList.css';

const ResultList = props => (
    <div className="col-sm-12 col-lg-12">
      <ul className="list-group">
        {props.results.map(result => (
          <li className="list-group-item" key={result._id}>
            <span><strong>Title (with link):</strong><a href={result.web_url} target="_blank">{result.headline.main}</a></span><br />
            <span><strong>Date published:</strong> {result.pub_date}</span><br />
            <button className="btn btn-primary float-right" onClick={() => props.handleSaveButton(props._id)}>Save</button>
          </li>
        ))}
      </ul>
    </div>
);

export default ResultList;
