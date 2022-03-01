
import React,{Component} from 'react';
import { HashRouter,Route, Routes } from 'react-router-dom';

import Home from './components/Home.js';
import Search from './components/Search.js';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      searchText:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  searchBook=()=>{
    const {searchText}=this.state
    if(searchText==='' ||searchText===' ' ){
      alert("검색어를 입력하세요!")
      return
    } 
    window.location = "#/search?bookName="+searchText;
    //window.location.hash= "/search?bookName="+searchText;
  }

  render(){
    return (
    <HashRouter>
        <input type="text" onChange={this.handleChange} name="searchText"/>
        <button onClick={this.searchBook}>검색</button>
        <Routes>
              <Route exact path='/' element={<Home></Home>}/>
              <Route path='/search' element={<Search></Search>}/>
        </Routes>
      </HashRouter>
  );
  }
}

export default App;
