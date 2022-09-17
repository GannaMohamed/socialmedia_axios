import React from "react";

//Nav and Pages
import Navbar from './components/Navbar'
import About from "./components/About"
import Postlist from "./components/Postlist"
import Userlist from "./components/Userlist"
import User from "./components/User"
import Commentlist from "./components/Commentlist.jsx"
import UserProfile from "./components/UserProfile";
import Nothing from "./components/404"
//Data
import posts from './JSON/posts.json'
import users from './JSON/users.json'
import commments from './JSON/comments.json'

//Router
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import SinglePost from "./components/SinglePost";

class App extends React.Component {
  state = {
      postlist: posts,
      userlist: users,
      commentlist: commments
  }
  
  render(){
    // findIdBeforeRendering = () = {

    // }


      return(
        <BrowserRouter>
        {/* nav */}
          <Navbar></Navbar>
          <hr/>
          <br/>
          <Routes>
            {/* home */}
            <Route path="/" element={<About></About>}/>
            <Route path="/about" element={<About></About>}></Route>
            {/* pages */}
            <Route path="/posts" element={<Postlist postlist={this.state.postlist}></Postlist>}/>
            <Route path="/posts/:postId" element={<SinglePost id={this.props.id}/>} />

            <Route path="/users" element={<Userlist userlist={this.state.userlist}></Userlist>}/>
            <Route path="/user:userId" element={<UserProfile id={this.props.id}/>} />

            {/* <Route path="/comments" element={<Commentlist commentlist={this.state.commentlist}></Commentlist>}></Route> */}
            {/* 404 */}
            <Route path="*" element={<Nothing/>}/>
            {/* <Route path="" element={<h2>404</h2>}></Route> */}
          </Routes>
        </BrowserRouter> 
      )
      // <div>+
      //   <Navbar></Navbar>
      //   <hr/>
      //   <br/>
      //   <About></About>

      //   <Postlist></Postlist>
      // </div>)
      // <CounterList></CounterList>
      
          
  } //overriding Components Class
}

export default App;

