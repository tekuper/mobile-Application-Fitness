import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const DietCategoriesScreen = ({ handleCategoryPress, route }) => {
  const [categories, setCategories] = useState(["Vegan", "Keto", "Paleo", "Detox"]);
  const { allergies } = route.params;

  const getSelectedDiet = (allergies) => {
    if (allergies.includes("dairy")) {
      return "Detox";
    } else if (allergies.includes("nuts")) {
      return "Paleo";
    } else if (allergies.includes("shellfish")) {
      return "Vegan";
    } else if (allergies.includes("peanuts")) {
      return "Keto";
    } else {
      return "Vegan"; // Régime par défaut
    }
  };

  const onCategoryPress = (category) => {
    const selectedDiet = getSelectedDiet(allergies);
    handleCategoryPress(category, selectedDiet);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryPress(item)} style={styles.category}>
            <Text style={styles.categoryTitle}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  category: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#eee",
    marginVertical: 8,
  },
  categoryTitle: {
    fontSize: 16,
  },
});

export default DietCategoriesScreen;
