import express from 'express';
import bodyParser from 'body-parser';
import Meal from './usingJsobject/controllers/Meal';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
   return res.status(200).send({'message': 'Book Meal API running'})
});

app.post('/api/v1/meal', Meal.create);
app.get('/api/v1/meals', Meal.viewMeals);
app.get('/api/v1/meals/:name', Meal.viewOne);
app.put('/api/v1/meals/:name', Meal.updateMeal);
app.delete('/api/v1/meals/:name', Meal.deleteMeal); 

app.listen(port, () => {
    console.log(`BookaMeal API running on port ${port}`);
});

export default app;