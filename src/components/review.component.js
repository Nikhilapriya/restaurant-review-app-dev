import React, { Component } from 'react';
import axios from 'axios';

export default class review extends Component {
  constructor(props) {
    super(props);

    this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onChangedishId = this.onChangedishId.bind(this);
    this.onChangecomment = this.onChangecomment.bind(this);
    //this.onChangeaddedOn = this.onChangeaddedOn.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: '',
      dishId: '',
      comment: '',
      //adedOn: '',
      dishes: []
    }
  }

  componentDidMount() {
    this.setState({ 
      dishes: ['121210','121211','121212','121213'],
      dishId: ''
    });
  }

  onChangeuserName(e) {
    this.setState({
      userName: e.target.value
    });
  }

  onChangedishId(e) {
    this.setState({
      dishId: e.target.value
    });
  }

  onChangecomment(e) {
    this.setState({
      comment: e.target.value
    });
  }

  /*onChangeaddedOn(e) {
    this.setState({
      adedOn: e.target.value
    });
  }*/

  onSubmit(e) {
    e.preventDefault();
  
    const restaurantreview = {
      userName: this.state.userName,
      dishId: this.state.dishId,
      comment: this.state.comment,
      //adedOn: this.state.adedOn,
    };
  
    console.log(restaurantreview);
    axios.post('http://localhost:5000/comment/add', restaurantreview)
  .then(res => console.log(res.data));
    
    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Add comments on your favorite Dish</h3>

        <img src="https://media.newstracklive.com/uploads/lifestyle-health/food-recipe/May/20/big_thumb/hyderabad_5ce2c5ebbbb17.PNG" alt="Biryani" width="180" height="160"></img>
<p><b>Biryani</b> dishId  -  121210</p>
<img src="https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg" alt="Biryani" width="180" height="160"></img>
<p><b>Masala Dosa</b> dishId  -  121211</p>
<img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg" alt="Biryani" width="180" height="160"></img>
<p><b>Samosa</b> dishId  -  121212</p>
<img src="https://www.culturalindia.net/iliimages/Gujarati-Food-1.jpg" alt="Biryani" width="180" height="160"></img>
<p><b>Gujarathi Special</b> dishId  -  121213</p>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>userName: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.userName}
                onChange={this.onChangeuserName}
                />
          </div>
          {/* <div className="form-group"> 
            <label>dishId: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.dishId}
                onChange={this.onChangedishId}
                />
          </div> */}
          <div className="form-group"> 
            <label>DishId: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.dishId}
                onChange={this.onChangedishIde}>
                {
                  this.state.dishes.map(function(dish) {
                    return <option 
                      key={dish}
                      value={dish}>{dish}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group">
            <label>comment: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.comment}
                onChange={this.onChangecomment}
                />
          </div>
          

          <div className="form-group">
            <input type="submit" value="Add comment" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}




/*
"<div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.userName}
                onChange={this.onChangeuserName}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          
img src"https://media.newstracklive.com/uploads/lifestyle-health/food-recipe/May/20/big_thumb/hyderabad_5ce2c5ebbbb17.PNG" alt="Biryani" width="180" height="160"></img>"
          
          <div className="form-group">
            <label>adedOn: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.adedOn}
                onChange={this.onChangeaddedOn}
                />
          </div>"
*/