import React, { Component } from 'react';
import './App.css';
import gamesData from './gamesData'
import TeamList from './components/TeamList'
import PlayerDetails from './components/PlayerDetails'
import NavHeader from './components/Header'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux'


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavHeader />
        <TeamList teams={this.props.teams}/>
        {!this.props.selectedPlayer ? <div> Click Player for Details </div> :
          <PlayerDetails/>}
      </div>
    );
  }
}
const mapStateToProps= (state)=>{
  return{...state}
}
export default connect(mapStateToProps)(App);
