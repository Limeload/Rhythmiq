import React from "react";
import TrackLists from "./TrackLists";

class Playlists extends React.Component {
    constructor(props) {
      super(props);
      this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
      this.props.onNameChange(event.target.value);
    }

    render() {    return (
        <div className="Playlist">
  <input value="New Playlist" onChange={this.handleNameChange}/>
  <TrackLists tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
  <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
</div>
    )
}
}

export default Playlists;
