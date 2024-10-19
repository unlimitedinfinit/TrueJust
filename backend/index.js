const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from the backend, i too was once a man who went to pages and saw things before i took an arrow to the face!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

