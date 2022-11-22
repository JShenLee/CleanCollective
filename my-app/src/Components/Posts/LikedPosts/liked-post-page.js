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

  getSearched = () => {
      // const post = axios.get('http://localhost:5000/user.post.route/searchPost/' + searched.postTitle);
      if (this.state.posts) {
      this.state.posts.map((post) => {
        if (post.postTitle.match(this.state.searched)) {
          this.state.search.push(post);
        }
      })
    }
  }

  // Get the User Post Data when the component mounts (onload function)
  componentDidMount = () => {
      this.getSearched();
      this.getLikedPostsFromUser();
      console.log(this.state.likes)

  };

  componentDidUpdate = () => {
    this.state.search = [];
    this.state.searched = ReactSession.get('searchedValue')
    this.getSearched();
  }



  getLikedPostsFromUser = () => {
    const userSession = ReactSession.get('userSession')
    let userId = userSession._id;
    axios({
      method: "GET",
      url: "http://localhost:5000/user.post.route/getUserLikedPosts/" + userId,
    })
      .then((response) => {
        const data = response.data;
        this.setState({ likedPosts: data })

      })
      .catch((err) => {
        alert("Error pulling user post data");
      });
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