const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Log the submission (In a real app, you might send an email here)
    console.log(`New contact form submission:
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `);

    res.status(200).json({ message: 'Success! Your message has been received.' });
});

app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
