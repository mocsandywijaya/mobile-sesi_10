import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    flexDirection: 'column',
    minHeight: '100%', // Menggunakan '100%' untuk React Native
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  recipeGrid: {
    flexDirection: 'row', // Menggunakan flexbox untuk layout grid di React Native
    flexWrap: 'wrap', // Untuk memastikan elemen dapat dibungkus dalam baris
    gap: 20, // React Native tidak mendukung 'gap', gunakan margin untuk jarak antar elemen
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Untuk Android, gunakan elevation untuk efek shadow
    transition: 'transform 0.3s', // React Native tidak mendukung transition seperti web, Anda bisa menggunakan animasi
  },
  recipeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover', // 'object-fit' tidak didukung, gunakan resizeMode di React Native
  },
});

export default styles;
