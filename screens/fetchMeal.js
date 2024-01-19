import axios from "axios";

const mealData = {
    Imagetitle: "Nom du repas",
    recette: "Recette du repas",
    ingredients: ["Ingrédient 1", "Ingrédient 2"],
    nutritionalValues: {
      calories: 400 ,
      protein: 15,
      carbohydrates: 30,
      fat: 10,
    },
    imageUri: "URL_de_l_image",
  };

const getMeal = (setMeal) => {
  axios.get("http://localhost:3000/getMeal").then(({ data }) => {
    setMeal(data)
  });
};

const addMeal = (mealData, setImageTitle, setMeal, setrecette, setIngredients, setNutritionalValues, setImageUri) => {
    axios.post(`http://localhost:3000/saveMeal`, mealData).then(() => {
      setImageTitle("");
      setrecette(""); 
      setIngredients([]); 
      setNutritionalValues({}); // Réinitialisez les valeurs nutritionnelles après l'ajout
      setImageUri(""); 
      getAllMeals(setMeal);
    });
  };
  

const editMeal = (mealId, mealData, setTitle, setMeal,setDescription, setIngredients, setNutritionalValues, setImageUri, setEditing) => {
    axios.put(`http://localhost:3000/editMeal`, { _id: mealId, ...mealData }).then(() => { // (...) est utilisé pour étendre les propriétés de mealData
      setImageTitle("");
      setrecette(""); 
      setIngredients([]); 
      setNutritionalValues({}); // Réinitialisez les valeurs nutritionnelles après l'ajout
      setImageUri(""); 
      setEditing(false);
      getAllMeals(setMeal);
    });
  };
  
const deleteMeal = (mealId, setMeal) => {
  axios.delete(`http://localhost:3000/deleteMeal`, {data : { _id: mealId }}).then(() => {
    getAllMeals(setMeal)
  });
}

export { getMeal, addMeal, editMeal , deleteMeal};
