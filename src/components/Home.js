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

const Home=()=>{
    const {state,loading,error}=useHomeFetch();
    console.log(state.results[0]);
    
    return (
        <>
        {state.results[0]?(
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0]}.backdrop_path`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
        />
        ):null    
    }
    
    </>
    );
};
export default Home;