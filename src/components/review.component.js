import React, { Component } from 'react';
import axios from 'axios';

export default class RestaurantReview extends Component {
  constructor(props) {
    super(props);

    this.onChangeuserId = this.onChangeuserId.bind(this);
    this.onChangedishId = this.onChangedishId.bind(this);
    this.onChangecomment = this.onChangecomment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userId: '',
      dishId: '',
      comment: '',
      dishes: []
    }
  }

  componentDidMount() {
    this.setState({ 
      dishes: ['121210','121211','121212','121213'],
      dishId: 'test user'
    });
  }

  onChangeuserId(e) {
    this.setState({
      userId: e.target.value
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

  onSubmit(e) {
    e.preventDefault();
  
    const restaurantreview = {
      userId: this.state.userId,
      dishId: this.state.dishId,
      comment: this.state.comment,
    };
  
    console.log(restaurantreview);
    axios.post('http://localhost:5000/comment/add', restaurantreview)
    .then(res => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
        <div style={{ backgroundImage: `url(https://www.freepptbackgrounds.net/wp-content/uploads/2020/03/Breakfast-food-Backgrounds-750x460.jpg)`,
       backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
       }}>

      <div>
        <h3><b>Add Comments on your Favorite Dish</b></h3>
        <img src="https://media.newstracklive.com/uploads/lifestyle-health/food-recipe/May/20/big_thumb/hyderabad_5ce2c5ebbbb17.PNG" alt="Biryani" width="180" height="160"></img>
<h4><b>Biryani</b> dish Id  -  121210</h4>
<img src="https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg" alt="Biryani" width="180" height="160"></img>
<h4><b>Masala Dosa</b> dish Id  -  121211</h4>
<img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg" alt="Biryani" width="180" height="160"></img>
<h4><b>Samosa</b> dish Id  -  121212</h4>
<img src="https://www.culturalindia.net/iliimages/Gujarati-Food-1.jpg" alt="Biryani" width="180" height="160"></img>
<h4><b>Gujarathi Special</b> dish Id  -  121213</h4>

        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>dishId (id for the dish is mentioned above for your reference): </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.dishId}
                onChange={this.onChangedishId}>
                {
                  this.state.dishes.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.userId}
                onChange={this.onChangeuserId}
                />
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
            <input type="submit" value="Add Comment" className="btn btn-primary" />
          </div>
        </form>
      </div>
      </div>
    )
  }
}

















