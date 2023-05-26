import { Component } from 'react';
import { createMap } from '../../utilities/maps-api';

export default class MapCreationForm extends Component {
    state = {
        user: this.props.user,
        title: '',
        bio: '',
        photoURL: '%PUBLIC_URL%/map.png',
        error: ''
    };

  handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        const {user, title, bio, photoURL} = this.state;
        const formData = {user, title, bio, photoURL};
        const map = await createMap(formData);
    } catch {
        this.setState({ error: 'Map Creation failed - Try Again' });
    }
  };

  render() {
    return (
      <div>
        <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <input type="text" name="user" value={this.props.user} hidden readOnly/>
              <label>Title</label>
              <input type="text" name="title" value={this.state.name} onChange={this.handleChange} required />
              <label>Bio</label>
              <input type="text" name="bio" value={this.state.email} onChange={this.handleChange} required />
              <label>Photo</label>
              <select onChange={this.handleChange}>
                <option name="photoURL" value="1">Photo 1</option>
                <option name="photoURL" value="2">Photo 2</option>
                <option name="photoURL" value="3">Photo 3</option>
              </select>
              <button type="submit">Create Map</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}