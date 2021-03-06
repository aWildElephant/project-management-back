import cors from 'cors'
import express from 'express';
import { sequelize, Task } from './model';

const app = express();
const port = 3000;

app.use(express.json())

app.use(cors())

app.post('/task', async (req, res) => {
    const task = await Task.create(req.body)

    console.log("Saved %s", JSON.stringify(req.body));

    res.send(task)
})

app.get("/task/list", async (req, res) => {
    const tasks = await Task.findAll()

    res.send(tasks)
})

app.get("/task/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id)

    res.send(task)
})

app.put('/task/:id/status', async (req, res) => {
    const newStatus = req.body.status;

    await Task.update({ status: newStatus }, { where: { id: req.params.id } })

    res.sendStatus(200)
})

app.delete("/task/:id", async (req, res) => {
    await Task.destroy({ where: { id: req.params.id } })

    res.sendStatus(200)
})

sequelize.authenticate()
    .then(() => sequelize.sync())
    .then(() => {
        console.log("Connected to database")

        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        });
    })
    .catch(() => console.error("Failed to connect to database"));


