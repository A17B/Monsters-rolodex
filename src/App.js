import './App.css';
import React,{ Component} from 'react';
import Cardlist from './components/card_list/Card_list';
import SearchBox from './components/Search_box/SearchBox';

class App extends Component{
constructor(){
  super()

  this.state={
  Monsters:[],
  SearchState:''

}
}
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>response.json())
  .then(users=>this.setState({Monsters:users}))
}

handleChange=e=>{
  this.setState({SearchState: e.target.value})
}
    render(){
      const {Monsters,SearchState}=this.state;
      const filteredMonster=Monsters.filter(monster=>monster.name.toLowerCase().includes(SearchState.toLowerCase()))

      return(
        <div className="App">
          <h1>
            Monsters Rolodex
          </h1>
          <SearchBox 
            placeholder='Search Monster'         
            handleChange={this.handleChange}
            />
          <Cardlist Monsters={filteredMonster}/>

      </div>
      )
    }
  }
export default App;
