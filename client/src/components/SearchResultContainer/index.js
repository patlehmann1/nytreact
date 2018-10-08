import React, { Component } from 'react';
import "./SearchResultContainer.css";
import MainHeader from '../MainHeader';
import ResultList from '../ResultList';
import SearchForm from '../SearchForm';
import API from "../../utils/API";

class SearchResultContainer extends Component {

    state = {
        topic: "",
        startYear: "",
        endYear: "",
        results: []
    };

    // componentDidMount() {
    //     this.setState({
    //         topic: "Golf",
    //         startYear: "1900",
    //         endYear: "2000"
    //     }), () => {
    //         API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear);
    //     };

    //     console.log(this.state.results);
    // };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Getting NYT Articles");

        API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
            .then((res) => {
                this.setState({ results: res.data.response.docs });
                console.log(this.state.topic);
                console.log(this.state.startYear);
                console.log(this.state.endYear);
                console.log("this.state.results: ", this.state.results);
            });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="app-wrapper">
                <div className='container-fluid'>
                    <MainHeader />
                    <SearchForm
                                topic={this.state.topic}
                                startYear={this.state.startYear}
                                endYear={this.state.endYear}
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-12">


                        </div>
                    </div>
                    <div className="row">
                        <ResultList results={this.state.results} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResultContainer;
