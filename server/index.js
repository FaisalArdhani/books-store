import express from 'express'
import dotenv from 'dotenv'

const app = express();
dotenv.config()

const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    res.send('Halaman utama')
})

app.listen(port, () => {
    console.log('Server running...')
})