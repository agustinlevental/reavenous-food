
import './App.css';
import Business from '../Business/Business';
import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from "../../util/Yelp"



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state= {
      businesses : [] ,
    }

    this.searchYelp = this.searchYelp.bind (this);
  }

  searchYelp(term,location,sortBy) {
    console.log("hola")
    Yelp.search(term,location,sortBy).then ((businesses)=> {
      this.setState({
        businesses : businesses 
      })
    })

  }


  render() {
    return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar searchYelp = {this.searchYelp}> </SearchBar>
    <BusinessList businesses  = {this.state.businesses}></BusinessList> 
  </div>)
  }

}

export default App;
