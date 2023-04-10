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

const cookbookController = (app) => {
    app.get('/api/search/:searchstring', searchByMeal)
    app.get('/api/details/:mid', getMealDetails)
}

export default cookbookController;