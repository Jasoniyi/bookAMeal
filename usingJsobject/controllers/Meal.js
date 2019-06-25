import MealModel from '../models/mealModel';

const Meal = {
    /**
     * @param {object} req
     * @param {object} res
     * @return {object} meal object
     */
    create(req, res) {
        if(!req.body.name || !req.body.size || !req.body.price) {
            return res.status(400).send({'message':'All fields are required'})
        }
        const meal = MealModel.create(req.body);
        return res.status(201).send(meal);
    },
    /**
     * 
     * @param {object} req
     * @param {object} res
     * @returns {object} meal object
     */
    viewOne(req, res) {
        const meal = MealModel.findOne(req.params.name);
        if(!meal) {
            return res.status(404).send({'message':'Meal not found'});
        }
        return res.status(200).send(meal);
    },
    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} meal object
     */
    viewMeals(req, res) {
        const meals = MealModel.viewAll();
        return res.status(200).send(meals);
    },
    /**
     * @param {object} req
     * @param {object} res
     * @returns {object} updated meal
     */
    updateMeal(req, res) {
        const meal = MealModel.findOne(req.params.name);
        if(!meal) {
            return res.status(404).send({'message': 'Meal not found'});
        }
        const updatedMeal = MealModel.updateMeal(req.params.name, req.body)
        return res.status(200).send(updatedMeal);
    },
    /**
     * 
     * @params {object} req
     * @params {object} res
     * @returns {object} status code 204
     */
    deleteMeal(req, res) {
        const meal = MealModel.findOne(req.params.name);
        if(!meal) {
            return res.status(404).send({'message': 'Meal not found'});
        }
        const meals = MealModel.deleteMeal(req.params.name);
        return res.status(200).send({'message':`${req.params.name} deleted`});
    }
}

export default Meal;