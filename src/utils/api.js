const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY
const headers = {
   'Access-Control-Allow-Origin': '*',
};


export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`, { headers })
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}