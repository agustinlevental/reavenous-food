import React from 'react';
import "./SearchBar.css";

// const sortByOptions = {
//   'Best Match': 'best_match',
//   'Highest Rated': 'rating',
//   'Most Reviewed': 'review_count'
// } ;


// class SearchBar extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       term: '' ,
//       location: '' ,
//       sortBy: 'best_match'
    
//     } ;

//    this.handleTermChange = this.handleTermChange.bind(this);
//    this.handleLocationChan = this.handleLocationChan.bind (this);
//    this.handleSearch = this.handleSearch.bind (this)

//   }

//   getSortByClass (sortByOptions) {
//     if (this.state.sortBy == sortByOptions) {
//       return "active"
//     }
//     else { return ""}
//   }

//   handleSortByChange (sortByOption) {
//    this.setState ({sortBy: sortByOption}) 
//   }

//   handleTermChange(e) {
//     this.setState ({
//       term : e.target.value
//     })
//   }
//   handleLocationChan (e) {
//     this.setState ({
//       location : e.target.value
//     })
//   }

//   handleSearch (e) {
//       this.props.searchYelp (this.state.term,this.state.location ,this.state.sortBy)
//       e.preventDefault();
//   }

//     renderSortByOptions() {
//         // este metodo es solo por si cambia la API , para tener las keys
//         return Object.keys(sortByOptions)
//         // me va a decir las keys de sortByOption 
//         .map(sortByOption => 
            
//             // esa callback function como argumento se refiere a cada elemento dentro del objeto sortByOptions
//         {
//             let  sortByOptionValue = sortByOptions [sortByOption];
//             return <li
//              key= {sortByOptionValue}
//             className = {this.getSortByClass(sortByOptionValue)}
//             onClick= {this.handleSortByChange.bind(this,sortByOptionValue)}
//             >{sortByOption}</li>
//         });
//     }

//     render() {
//         return (
//             <div className="SearchBar">
//   <div className="SearchBar-sort-options">
//     <ul>
//      {this.renderSortByOptions()}
//      {/* lleva this porque hay que referir a la class que lo contiene, y lleva () porque have to be called  */}
//     </ul>
//   </div>
//   <div className="SearchBar-fields">
//     <input 
//           placeholder="Search Businesses"
//           onChange= {this.handleTermChange}  />
//     <input
//           placeholder="Where?" 
//           onChange= {this.handleLocationChan} />
//   </div>
//   <div className="SearchBar-submit">
//     <a onClick= {this.handleSearch}>Let's Go</a>
//   </div>
// </div>
//         )
//     }
// }

// export default SearchBar ;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;