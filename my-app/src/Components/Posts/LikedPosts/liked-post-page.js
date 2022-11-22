import React, { Component } from "react";
import PostCard from "./LikedPost.Card";
import axios from "axios";
import SearchBar from "../SearchBar"
import { ReactSession }  from 'react-client-session';

export class PostPage extends Component {
  state = {
    postUserName: "",
    postTitle: "",
    postBody: "",
    posts: [],
    search: [],
    searched: '',
    likes: [],
    likedPosts: []
  };

  // getSearched = () => {
  //   console.log("Hello search");
  //     // const post = axios.get('http://localhost:5000/user.post.route/searchPost/' + searched.postTitle);
  //     if (this.state.posts) {
  //     this.state.posts.map((post) => {
  //       if (post.postTitle === this.state.searched) {
  //         this.state.search.push(post);
  //       }
  //     })
  //   }
  // }

  // Get the User Post Data when the component mounts (onload function)
  componentDidMount = () => {
    // this.getAllUserPost();
    this.getLikedPosts();
      this.setState({ likedPosts: [] })
      // this.getSearched();
      // console.log(userId)
    // this.displayUserPost();
  };

  // componentDidUpdate = () => {
  //   this.getAllUserPost();
  //   this.state.search = [];
  //   this.state.searched = ReactSession.get('searchedValue')
  //   this.getSearched();
  // }

  

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
    const userSession = ReactSession.get('userSession')
    let userId = userSession._id;
    axios({
      method: "GET",
      url: "http://localhost:5000/user.post.route/getUserLikedPosts/" + userId,
    })
      .then((response) => {
        
        const data = response.data;
        this.setState({ likes: data });
        this.state.likes.map((liked) => {
          axios({
            method: "GET",
            url: "http://localhost:5000/user.post.route/getPost/" + liked,
          })
            .then((response) => {
              console.log('hello')
              this.setState({ likedPosts: [...this.state.likedPosts, response.data] });
            })
            .catch((err) => {
              alert("Error pulling user post data");
            });
        })

      })
      .catch((err) => {
        alert("Error pulling user post data");
      });
      // console.log(this.state.likes);

    
  }


  render() {

    return (
      
      <div>
        
          <SearchBar />
          {
            this.state.searched ? this.state.search.reverse().map((post) => (

              <PostCard
                id={post._id}
                username={post.postUserName}
                title={post.postTitle}
                body={post.postBody}
                likes={post.postLikes}
                key={post._id}
              />
            )) : this.state.likedPosts.reverse().map((post) => (
              
              <PostCard
                id={post._id}
                username={post.postUserName}
                title={post.postTitle}
                body={post.postBody}
                likes={post.postLikes}
                createdAt={post.createdAt}
                key={post._id}
              />

            ))
          }
      </div>
    
    );

  }
}
export default PostPage;