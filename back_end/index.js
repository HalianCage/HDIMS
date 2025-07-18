const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')
const PORT = process.env.PORT || 3000;
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is working!');
});


//route to fetch category list from database and pass to frontend
app.get('/getCategories', async (req, res) => {

    try {

        const result = await pool.query("SELECT * FROM category_list");
        res.json(result.rows);

    } catch (error) {
        
        console.log("Some error occured. Unable to fetch data", error);

    }

})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});