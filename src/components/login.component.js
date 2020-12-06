import React, { Component } from 'react';

export default class ExercisesList extends Component {
  render() {
    return (
       // <div id="wrapper">

        <div class="form_div">
        <p class="form_label">LOGIN FORM</p>
        <form method="post" action="">
        <p><input type="text" placeholder="UserID"></p>
        <p><input type="password" placeholder="Password"></p>
        <p><input type="submit" value="LOGIN"></p>
        </form>
        </div>
        <br>
        <br>
        <br>
        <div class="form_div">
        <p class="form_label">SIGNUP FORM</p>
        <form method="post" action="">
        <p><input type="text" placeholder="Enter Name"></p>
        <p><input type="text" placeholder="Enter UserID"></p>
        <p><input type="password" placeholder="Enter Password"></p>
        <p><input type="submit" value="SIGNUP"></p>
        </form>
        </div>
        
      
    )
  }
}