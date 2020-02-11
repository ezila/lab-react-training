import React, { Component } from 'react';
import IdCard from './Idcard.js';
import Greetings from './Greetings.js';
import Random from './Random.js';
import BoxColor from './BoxColor.js';
import Rating from './Rating.js';
import DriverCard from './DriverCard.js';

import './index.css'

class App extends Component {
  state = {
    userA: {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth:'1992-07-14',
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    userB: {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth:'1988-05-11',
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  };
  
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          picture={this.state.userA.picture}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          gender={this.state.userA.gender}
          height={this.state.userA.height}
          birth={this.state.userA.birth}
        />
        <IdCard 
          picture={this.state.userB.picture}
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          gender={this.state.userB.gender}
          height={this.state.userB.height}
          birth={this.state.userB.birth}
        />

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0}/>
        <BoxColor r={128} g={255} b={0}/>

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard 
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />
        <DriverCard 
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
      </div>

    );
  }
}

export default App;