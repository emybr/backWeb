
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

const {
	publicationRoutes,
	photoRoutes,
	portfolioRoutes,
	// mailRoutes,
} = require('./src/routes');

// Middlewares de express

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

// Routes
app.use('/api/publication', publicationRoutes);
app.use('/api/photo', photoRoutes);
app.use('/api/portfolio', portfolioRoutes)
// app.use('/api/email',mailRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`));
