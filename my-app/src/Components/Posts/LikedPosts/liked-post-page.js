import React, { Component } from "react";
import PostCard from "./LikedPost.Card";
import axios from "axios";
import SearchBar from "../SearchBar"
import { ReactSession }  from 'react-client-session';

const userSession = ReactSession.get('userSession')
let userId = userSession._id

export class PostPage extends Component {
  state = {
    postUserName: "",
    postTitle: "",
    postBody: "",
    posts: [],
    search: [],
    searched: '',
    likes: []
  };

  getSearched = () => {
      // const post = axios.get('http://localhost:5000/user.post.route/searchPost/' + searched.postTitle);
      if (this.state.posts) {
      this.state.posts.map((post) => {
        if (post.postTitle === this.state.searched) {
          this.state.search.push(post);
        }
      })
    }
  }

  // Get the User Post Data when the component mounts (onload function)
  componentDidMount = () => {
      this.getAllUserPost();
      this.getSearched();
      // console.log(userId)
      this.getLikedPosts();
    // this.displayUserPost();
  };

  componentDidUpdate = () => {
    this.state.search = [];
    this.getAllUserPost();
    this.state.searched = ReactSession.get('searchedValue')
    this.getSearched();
  }

  

  getAllUserPost = () => {
    axios({
      method: "GET",
      url: "http://localhost:5000/user.post.route/",
    })
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        // console.log("User post data pulled from DB");
      })
      .catch((err) => {
        alert("Error pulling user post data");
      });
  };

  getLikedPosts = () => {
    axios({
      method: "GET",
      url: "http://localhost:5000/user.post.route/getUserLikedPosts/" + userId,
    })
      .then((response) => {
        const data = response.data;
        this.setState({ likes: data });
        // console.log("User post data pulled from DB");
      })
      .catch((err) => {
        alert("Error pulling user post data");
      });
      console.log(this.state.likes);
  }


  render() {
    return (
    this.state.likes.map((liked) => {
      this.state.posts.map((post) => {
        if (liked === post.postTitle) {
            <PostCard
                id={post._id}
                username={post.postUserName}
                title={post.postTitle}
                body={post.postBody}
                likes={post.postLikes}
                key={post._id}
              />
        }
      })
    }))
  
    // return (
    //   <div>
    //       <SearchBar />
    //       {
    //         this.state.searched ? this.state.search.reverse().map((post) => (

    //           <PostCard
    //             id={post._id}
    //             username={post.postUserName}
    //             title={post.postTitle}
    //             body={post.postBody}
    //             likes={post.postLikes}
    //             key={post._id}
    //           />
    //         )) : this.state.posts.reverse().map((post) => (
              
    //           <PostCard
    //             id={post._id}
    //             username={post.postUserName}
    //             title={post.postTitle}
    //             body={post.postBody}
    //             likes={post.postLikes}
    //             createdAt={post.createdAt}
    //             key={post._id}
    //           />

    //         ))
    //       }
    //   </div>
    // );

  }
}
export default PostPage;