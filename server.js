const express = require('express');

const app = express();
const tempRoutes = require('./routes/temperature.js');

//init Middleware
app.use(express.json({extended: false}));

app.use('/temperature', tempRoutes);

app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));