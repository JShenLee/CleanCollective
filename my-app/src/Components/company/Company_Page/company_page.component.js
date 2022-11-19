import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material"

//Cards
import TopCard from "./top/topCard";
import SideCompaniesCard from "./reccomendedCompanyCard.js/sideCompaniesCard";
import CompanyPost from "./companyPostCard.js/companyPosts.component";



export default function CompanyPage() {

    const myStyle = {
        width: "120%",
        height: "30%"
    }
    return (
        <Box style={myStyle}>
            <Grid container spacing={6}>
                <Grid item xs={6} md={8}>
                    <TopCard />
                </Grid>
                <Grid item xs={6} md={4}>
                    <SideCompaniesCard />
                </Grid>
                <Grid item xs={6} md={8}>
                    <CompanyPost />
                </Grid>

            </Grid>
        </Box>

    );
}