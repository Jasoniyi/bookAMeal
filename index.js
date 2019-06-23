import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   return res.status(200).send({'message': 'Book Meal API running'})
})

app.listen(port, () => {
    console.log(`BookaMeal API running on port ${port}`);
});

export default app;