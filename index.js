const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors')


const hotelsData = fs.readFileSync('hotels.json');
const hotels = JSON.parse(hotelsData);
app.use(cors());
app.get('/', (req, res) => {
    res.send('Welcome to the Hotel API');
});

app.get('/hotels', (req, res) => {
 
    const city = req.query.city;

   
    if (city) {
        const filteredHotels = hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());
        res.json(filteredHotels);
    } else {
        
        res.json(hotels);
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
