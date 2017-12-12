
import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import store from '../store';

export default class Messages extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {

    const channelId = Number(this.props.match.params.channelId); // because it's a string "1", not a number!
    const messages = this.state.messages;
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
    );
  }
}
/////////////////dummy
import React from 'react';

export default function Message (props) {

  const message = props.message;

  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={message.author.image} alt="image" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{ message.author.name }</h4>
        { message.content }
      </div>
    </li>
  );
}

//subroutes
constructor () {
  super();
  this.state = {
    artist: {}
  };
}

componentDidMount () {
  const artistId = this.props.match.params.artistId;
  const mainPath = `/api/artists/${artistId}`;
  const paths = [mainPath, `${mainPath}/albums`, `${mainPath}/songs`];
  Bluebird
    .map(paths, path => axios.get(path))
    .map(res => res.data)
    .spread((artist, albums, songs) => {
      artist.albums = albums;
      artist.songs = songs;
      this.setState({ artist });
    });
}

render () {

  const artist = this.state.artist;
  const albums = artist.albums || [];
  const songs = artist.songs || [];

  return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><Link to={`/artists/${artist.id}/albums`}>ALBUMS</Link></li>
        <li><Link to={`/artists/${artist.id}/songs`}>SONGS</Link></li>
      </ul>
      <Switch>
        <Route path={`/artists/${artist.id}/albums`} render={() => (
          <AllAlbums albums={albums} />
        )} />
        <Route path={`/artists/${artist.id}/songs`} render={() => (
          <Songs songs={songs} />
        )} />
      </Switch>
    </div>
  );
}
}

export default SingleArtist;
