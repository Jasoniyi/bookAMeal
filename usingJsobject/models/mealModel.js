import uuid from 'uuid';
import moment from 'moment';

class Meal {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
        this.meals = [];
    }
    /**
     * create a meal
     * @returns {object} meal object
     */
    create(data) {
        const newMeal = {
            id: uuid.v1(),
            size: data.size || '',
            price: data.price || '',
            name: data.name || ''
        };
        this.meals.push(newMeal);
        return newMeal
    }
    /**
     * find a meal
     * @param{name}
     * @returns {object} meal object
     */
    findOne(name) {
        return this.meals.find(meal => meal.name === name);
    }
    /**
     * View all meal
     * @returns {object} all meals
     */
    viewAll() {
        return this.meals;
    }
    /**
     * update a meal
     * @param {object} name
     * @param {object} data
     */
    updateMeal(name, data) {
        const meal = this.findOne(name);
        const index = this.meals.indexOf(meal);
        this.meals[index].size = data['size'] || meal.size;
        this.meals[index].price = data['price'] || meal.price;
        this.meals[index].name = data['name'] || meal.name;
        return this.meals[index];
    }
    /**
     * delete a meal
     * @param {object} name
     */
    deleteMeal(name) {
        const meal = this.findOne(name);
        const index = this.meals.indexOf(meal);
        this.meals.splice(index, 1);
        return {};
    }

}

export default new Meal();