import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const APIKEY = "&api_key=e2ec246a213a485cb780585bbd44a5ec";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};