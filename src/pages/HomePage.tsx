import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import Header from "../components/Header";  // Pastikan Header disesuaikan untuk React Native
import Footer from "../components/Footer";  // Pastikan Footer disesuaikan untuk React Native
import RecipeCard from "../components/RecipeCard";  // Pastikan RecipeCard disesuaikan untuk React Native
import styles from "../styles/HomePage.module";  // Mengimpor gaya yang sudah didefinisikan

const HomePage: React.FC = () => {
  const recipes = [
    {
      title: "Nasi Goreng",
      description: "Rice Goreng.",
      imageUrl: require('../assets/img/nasi_goreng.png'),  // Menggunakan require untuk gambar lokal
    },
    {
      title: "Chicken goreng",
      description: "gofood.",
      imageUrl: require('../assets/img/ayam-goreng.png'),  // React Native perlu path gambar lokal atau URL
    },
    {
      title: "juice alpukat",
      description: "the best juice.",
      imageUrl: require('../assets/img/juice_alpukat.png'),  // React Native perlu path gambar lokal atau URL
    },
    {
      title: "Bakso",
      description: "makanan favorite.",
      imageUrl: require('../assets/img/bakso.png'),  // React Native perlu path gambar lokal atau URL
    },
  ];

  return (
    <ScrollView style={styles.homePage}>
      <Header />
      <View style={styles.mainContent}>
        <Text>Discover Delicious Recipes</Text>
        <View style={styles.recipeGrid}>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              description={recipe.description}
              imageUrl={recipe.imageUrl}
            />
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default HomePage;
