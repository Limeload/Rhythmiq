import React from "react";
import TrackLists from "./TrackLists";

function SearchResults(props) {
    return (
        <div className="SearchResults">
  <h2>Results</h2>
  {/* <SearchResults searchResults={this.state.searchResults} /> */}
  <TrackLists tracks={props.searchResults} onAdd={props.onAdd} isRemoval={false}  />
</div>
    )
}

export default SearchResults;
