import React, { Component } from 'react';
import axios from 'axios';

export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.onChangeuserId = this.onChangeuserId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userId: ''
    }

    this.onChangedishId = this.onChangedishId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dishId: ''
    }
  }

  onChangeuserId(e) {
    this.setState({
      userId: e.target.value
    })
  }
  
  onChangedishId(e) {
    this.setState({
      dishId: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const fav = {
      userId: this.state.userId,
      dishId: this.state.dishId
    }

    console.log(fav);

    axios.post('http://localhost:5000/favorite/add', fav)
      .then(res => console.log(res.data));

    this.setState({
      userId: '',
      dishId:''
    })
  }

  render() {
    return (
      <div>
        <h3>Add Favorite Dish</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>UserId: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.userId}
                onChange={this.onChangeuserId}
                />
          </div>

          <div className="form-group"> 
            <label>DishId: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.dishId}
                onChange={this.onChangedishId}
                />
          </div>
          
          <div className="form-group">
            <input type="submit" value="Add Favorite" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}