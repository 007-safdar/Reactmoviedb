/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import React,{useEffect, useState} from 'react';

//Config
import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL, API_KEY} from '../config';
//API
// import API from '../API';
import NoImage from '../images/no_image.jpg';
//hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

import HeroImage from '../HeroImage';
//Grid

import Thumb from './thumb';

import Grid from './Grid';

import Spinner from './Spinner'
//SearchBar
import SearchBar from './SearchBar';
const Home=()=>{
    const {state,loading,error,setSearchTerm}=useHomeFetch();
    
    
    return (
        <>
        {state.results[0]?(
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        />
        ):null    
    }
    <SearchBar setSearchTerm={setSearchTerm}/>
    <Grid header='Popular Movies'>
        {state.results.map(movie=>(
            <Thumb
             key={movie.id}
             clickable
             image={
                 movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: NoImage
             }
             movieId={movie.id}
            />
        ))}
    </Grid>
    <Spinner/>
    </>
    )
   
};
export default Home;