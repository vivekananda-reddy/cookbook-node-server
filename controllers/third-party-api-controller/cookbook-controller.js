import * as search from './../../services/search-service.js'
const searchByMeal = async (req, res) => {
    const mealName = req.params.searchstring;
    const meals = await search.searchByMeal(mealName)
    res.json(meals)
}

const getMealDetails = async (req, res) => {
    const mealId = req.params.mid;
    const mealDetails = await search.getMealDetails(mealId);
    res.json(mealDetails)
}

const getCategories = async (req, res) => {
    const categories = await search.getCategories();
    res.json(categories)
}

const cookbookController = (app) => {
    app.get('/api/search/:searchstring', searchByMeal)
    app.get('/api/details/:mid', getMealDetails)
    app.get('/api/categories', getCategories)
}

export default cookbookController;