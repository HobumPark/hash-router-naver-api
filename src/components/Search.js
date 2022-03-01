
import React,{Component} from 'react';
import "../css/Search.css";
import queryString from "query-string";
import { useLocation } from 'react-router-dom'
import axios from 'axios';

class Search extends Component {
  
  constructor(props){
    super(props)
    this.state={

    } 
  }

  componentDidMount(){
    console.log('componentDidMount')
    console.log(window.location)
    console.log(window.location.hash)
    //const params = new queryString.parse(window.location.hash); 
    //console.log(params)
    //const searchParams = new URLSearchParams(window.location.hash)
    //console.log(searchParams)
    //const bookName=searchParams.get('bookName')
    //console.log(bookName)
    const searchParams = new URLSearchParams(window.location.search)
    console.log(searchParams)
    console.log(searchParams.keys())
    this.getBooks();
  }

  getBooks = async()=>{
    console.log('getBooks')
    await axios({
      method: 'get',
      url: '/v1/search/book.json?query="사피엔스"',
      dataType: 'json',
      headers: {
        "X-Naver-Client-Id": 'FcXHkX_qtl65OMEljDS8',
        "X-Naver-Client-Secret": 'mzPsOA0aVg',
      },
     
    })
    .then(response => 
        { console.log(response);}
    );

  }

  render(){
    return (
    <div id="search">
      검색화면
    </div>
  );
  }
}

export default Search;
