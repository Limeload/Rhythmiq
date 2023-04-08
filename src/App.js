import React from 'react';
import './App.css';
import Playlists from './components/Playlists';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Spotify from './util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Sweet Child O\' Mine',
          artist: 'Guns N\' Roses',
          album: 'Appetite for Destruction'
        },
        {
          id: 2,
          name: 'Highway to Hell',
          artist: 'AC/DC',
          album: 'Sixth Studio'
        }
      ],
      playlistName: 'Vibes',
      playlistTracks: [
        {
          id: 3,
          name: 'Stairway to Heaven',
          artist: 'Led Zeppelin',
          album: 'Led Zeppelin IV'
        },
        {
          id: 4,
          name: 'Bohemian Rhapsody',
          artist: 'Queen',
          album: 'A Night at the Opera'
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
   }

   addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.find((savedTrack) => savedTrack.id === track.id)) {
      tracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(
      (savedTrack) => savedTrack.id !== track.id
    );
    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: [],
      });
    });
  }

  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({ searchResults: tracks });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Rhy<span className="highlight">thm</span>iq</h1>
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
        <Playlists
        playlistName={this.state.playlistName}
        playlistTracks={this.state.playlistTracks}
        onRemove={this.removeTrack}
        onNameChange={this.updatePlaylistName}
        onSave={this.savePlaylist}
         />
        </div>
      </div>
    );
  }
}

export default App;
