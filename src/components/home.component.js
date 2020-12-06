import React, { Component } from 'react';

export default class ExercisesList extends Component {
  render() {
    return (
        <div style={{ backgroundImage: `url(https://www.freepptbackgrounds.net/wp-content/uploads/2020/03/Breakfast-food-Backgrounds-750x460.jpg)`,
       backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
       }}>
           
        <div><img src="assets\home.png" width="1500px"/>
        <h1>MENU</h1>

        <li> 
            <img src="https://media.newstracklive.com/uploads/lifestyle-health/food-recipe/May/20/big_thumb/hyderabad_5ce2c5ebbbb17.PNG" height="300" width="300"/>
            Hyderabad Biryani
        </li>
        <li>
            <img src="https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg" height="300" width="300"/>
            Dosa
        </li>
        <li>
            <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg" height="300" width="300"/ > Tandoori Paneer Samosa
        </li>
        <li>
            <img src="https://www.culturalindia.net/iliimages/Gujarati-Food-1.jpg" height="300" width="300"/> Gujarati Cuisine
        </li>
        </div>
        <p>You are on the <b>HOME</b>  component!</p>
      
      </div>
    )
  }
}