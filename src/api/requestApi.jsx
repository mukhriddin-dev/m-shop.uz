import axios from "axios";

const KEY = 1;
const URL = "www.themealdb.com/api/json/v1/1/search.php";                //Search meal by name
const RANDOM = "www.themealdb.com/api/json/v1/1/random.php";             //Lookup a single random meal
const CATEGORY = "www.themealdb.com/api/json/v1/1/categories.php";       //List all meal categories
const CATEGORY_TYPE = "www.themealdb.com/api/json/v1/1/list.php?"        //List all Categories, Area, Ingredients
const SEARCH_ID = "www.themealdb.com/api/json/v1/1/lookup.php?i="        //Lookup full meal details by id
const FILTER_CATEGORY = "www.themealdb.com/api/json/v1/1/filter.php?c="  //Filter by Category
const FILTER_AREA = "www.themealdb.com/api/json/v1/1/filter.php?a="      //Filter by Area
const FILTER_INGREDINT = "www.themealdb.com/api/json/v1/1/filter.php?i="   //Filter by main ingredient


///===== MUKHRIDDIN KHODIEV TEST PROJECT ==== 2020 /////


// requests

const requestApi = {

   randomData: () => {
      return axios.get(RANDOM)
   },

   getCategory: () => {
      return axios.get(CATEGORY);
   },

   getCategoryType: (TYPE) => {
      return axios.get(`${CATEGORY_TYPE}${TYPE}=list`)
   },

   searchByName: (search) => {
      return axios.get(`${URL}?s=${search}`)
   },
   searchById: (ID) => {
      return axios.get(`${SEARCH_ID}${ID}`)
   },
   getFilterCategory: (search) => {
      return axios.get(`${FILTER_CATEGORY}${search}`)
   },
   getFilterArea: (search) => {
      return axios.get(`${FILTER_AREA}${search}`)
   }


};


export default requestApi;