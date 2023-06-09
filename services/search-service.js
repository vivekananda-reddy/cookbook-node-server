import axios from "axios"

const THIRD_PARTY_API = "http://www.themealdb.com/api/json/v1/1/"

export const searchByMeal = async (searchString) => {
    const response = await axios.get(`${THIRD_PARTY_API}search.php?s=${searchString}`)
    return response.data
}

export const getMealDetails = async (mealId) => {
    const response = await axios.get(`${THIRD_PARTY_API}lookup.php?i=${mealId}`)
    return response.data
}

export const getCategories = async () => {
    const response = await axios.get(`${THIRD_PARTY_API}categories.php`)
    return response.data
}

export const getMealsbyCategory = async (categoryName) => {
    const response = await axios.get(`${THIRD_PARTY_API}filter.php?c=${categoryName}`)
    return response.data
}

export const getRandomMeal = async () => {
    const response = await axios.get(`${THIRD_PARTY_API}random.php`)
    return response.data
}