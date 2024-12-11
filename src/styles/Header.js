import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff6347',
    color: '#fff',
    padding: 15,
    flexDirection: 'row', // Menggunakan flexbox untuk menyusun elemen secara horizontal
    justifyContent: 'space-between', // Menyebarkan item di antara kiri dan kanan
    alignItems: 'center', // Vertikal di tengah
  },
  ul: {
    listStyleType: 'none', // React Native tidak menggunakan `ul`, gunakan View dan Text untuk meniru list
    flexDirection: 'row',
    gap: 15, // Gunakan margin untuk mengatur jarak antar elemen
  },
  a: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
