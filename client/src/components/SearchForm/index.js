import React from "react";
import './SearchForm.css';

const SearchForm = props => (
        <div className="col-lg-12 col-sm-12">
            <form>
                <div className="form-group">
                    <label htmlFor="topic">Topic:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.topic}
                        name="topic"
                        type="text"
                        className="form-control"
                        id="search-topic"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startYear">Start Year:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.startYear}
                        name="startYear"
                        type="text"
                        className="form-control"
                        id="search-startyear"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endYear">End Year:</label>
                    <input
                        onChange={props.handleInputChange}
                        value={props.endYear}
                        name="endYear"
                        type="text"
                        className="form-control"
                        id="search-endyear"
                    />
                    <button
                        onClick={props.handleFormSubmit}
                        className="btn btn-block btn-primary mt-3"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
);

export default SearchForm;