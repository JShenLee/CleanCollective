import { ReactSession } from "react-client-session";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//material ui imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";


//side panel
import SideCompaniesCard from "../../company/Company_Page/reccomendedCompanyCard.js/sideCompaniesCard";
import CreateCompanySidePane from "./side_panel/create_company_side_panel";

//middle panel
import DescriptionBox from "./middle_panel/information_edit_box.component";
import axios from "axios";
import { Card, CardHeader, CardContent } from "@mui/material";
import PostCard from "./ProfilePosts.Card";


export default function ProfilePage() {
  //grabbing user session data
  let data = ReactSession.get("userSession");
  let name = data.username;
  const params = useParams()

  const [value, setValue] = useState("");
  const [thisUserPosts, setThisUserPosts] = useState("");
  //constantly update the new posts on the page
  useEffect(() => {
    let userPostList = [];
    axios
      .get("http://localhost:5000/user/getUser/" + params.username)
      .then((response) => {
        userPostList = response.data.posts;
        setThisUserPosts(userPostList);
      })
      .catch((error) => {
        console.log("error!" + error);
      });
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const showUserPost = (event) => {
    console.log(thisUserPosts);
  };

  const myStyle = {
    width: "120%",
    height: "30%",
  };
  return (
    <Box style={myStyle}>
      <Grid
        style={{
          marginLeft: '16%',
          marginRight: 'auto',
          width: "70%"
        }}
        container
        direction={"column"}
        spacing={2}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={8}>
            <DescriptionBox></DescriptionBox>
          </Grid>

          <Grid item xs={6} md={4}>
            <Grid container spacing={6}>
              <Grid item xs={6} md={8}><SideCompaniesCard title="Recommended Companies" /></Grid>
              <Grid item xs={6} md={7.8}><CreateCompanySidePane /></Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6} md={8}>
          <Card elevation={5} style={{backgroundColor: 'rgb(240,240,240)'}}>
            <CardHeader
              title="Posts"
            />
            <CardContent>
              {thisUserPosts
                ? thisUserPosts.reverse().map(function (post) {
                  return (
                    <PostCard
                      id={post._id}
                      username={post.postUserName}
                      postsector={post.postSector}
                      title={post.postTitle}
                      body={post.postBody}
                      likes={post.postLikes}
                      createdAt={post.createdAt}
                      postLikes={post.postLikes}
                      key={post._id}
                    />
                  );
                })
                : null}
            </CardContent>
          </Card>
        </Grid>


      </Grid>
    </Box>
  );
}
