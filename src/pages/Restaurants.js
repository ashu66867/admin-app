import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import RestaurantList from '../components/RestaurantList';
import { APIPATH } from '../constants';

const Restaurants = () => {
    const [restaurantsArr, setRestaurantsArr] = useState([]);
    const [searchText, setSearchText] = useState('');

    const fetchRestaurants = async (searchText) => {
        const dummyData = [
            {
                "id": 1,
                "name": "A2B",
                "isActive": true
            },
            {
                "id": 2,
                "name": "Nandhini",
                "isActive": false
            },
            {
                "id": 3,
                "name": "McDonalds",
                "isActive": true
            },
            {
                "id": 4,
                "name": "Bihari Rasoi",
                "isActive": true
            }
        ];
        // const response = await fetch(APIPATH + '?restaurant=' + searchText);
        // const apiData = await response.json();
        // const data = (apiData) ? 
        // apiData.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())) : 
        // dummyData.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log('apiData = ' + apiData);
        // console.log('dummyData = ' , dummyData);
        // console.log('data = ' , data);
        // return data;

        const filteredData = await dummyData.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log('filteredData = ' , filteredData);        
        setRestaurantsArr(filteredData);
    };

    useEffect(() => {
        console.log('searchText = ' + searchText);
        let restroArr = fetchRestaurants(searchText);
        console.log('restroArr = ' , restroArr);
        // setRestaurantsArr(restroArr);
    }, [searchText]);
    return (
        <Box width={500}>
            <Typography variant="h4">Restaurants</Typography>
            <TextField
                placeholder='Type the name or id'
                onChange={(e) => {
                    console.log(e.target.value);
                    setSearchText(e.target.value);
                    return <></>
                }}
            >
            </TextField>
            {(restaurantsArr && restaurantsArr.length > 0) ?
                <RestaurantList restaurantArr={restaurantsArr} /> :
                <Typography margin={5}>No restaurants found</Typography>}
        </Box>
    )
}

export default Restaurants