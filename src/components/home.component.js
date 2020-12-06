import React, { Component } from 'react';

export default class ExercisesList extends Component {
  render() {
    return (
        <div style={{ backgroundImage: `url(https://www.freepptbackgrounds.net/wp-content/uploads/2020/03/Breakfast-food-Backgrounds-750x460.jpg)`,
       backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
       }}>
           
        <div><img src="assets\home.png" width="1110px" height="250px"/>
        <h1>MENU</h1>

        
            <img src="https://media.newstracklive.com/uploads/lifestyle-health/food-recipe/May/20/big_thumb/hyderabad_5ce2c5ebbbb17.PNG" height="300" width="300"/>
           <h1><b>Biryani</b></h1> 
        
            <img src="https://sukhis.com/wp-content/uploads/2020/01/Dosa.jpg" height="250" width="300"/>
            <h1><b>Masala Dosa</b></h1>
        
            <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg" height="200" width="300"/ > 
            <h1><b>Samosa</b></h1>
            <img src="https://www.culturalindia.net/iliimages/Gujarati-Food-1.jpg" height="250" width="300"/> 
            <h1><b>Gujarathi Special</b></h1>
        </div>
       
      
      </div>
    )
  }
}