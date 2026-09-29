require("dotenv").config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

console.log(`process.env.PORT: ${process.env.PORT}`);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});