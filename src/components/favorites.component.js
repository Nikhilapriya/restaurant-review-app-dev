import React, { Component } from 'react';
import axios from 'axios';


export default class Favorites extends Component {
  constructor(props) {
    super(props);

    this.onChangeuserName = this.onChangeuserName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: ''
    }

    this.onChangedishId = this.onChangedishId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dishId: ''
    }
  }

  onChangeuserName(e) {
    this.setState({
      userName: e.target.value
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
      userName: this.state.userName,
      dishId: this.state.dishId
    }

    console.log(fav);

    axios.post('http://localhost:5000/favorite/add', fav)
      .then(res => console.log(res.data));

    this.setState({
      userName: '',
      dishId:''
    })
  }

  render() {
    return (


      <div>
        <h3>Add Favorite Dish</h3>

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




