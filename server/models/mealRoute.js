const { Router } = require("express");
const { getMeal, addMeal, editMeal , deleteMeal}= require("./meal");


const router = Router();

router.get("/getMeal", getMeal);
router.post("/saveMeal", addMeal);
router.delete("/deleteMeal", deleteMeal);
router.put("/editMeal", editMeal)

module.exports = router;