import express from 'express';
import { sequelize } from './model';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Coucou');
});

sequelize.authenticate()
    .then(() => {
        console.log("Connected to database")

        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        });
    })
    .catch(() => console.error("Failed to connect to database"));


