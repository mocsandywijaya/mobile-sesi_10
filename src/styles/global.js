import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    margin: 0,
    backgroundColor: '#f8f8f8',
    color: '#333', // React Native mengatur warna teks menggunakan properti `color` di dalam komponen `Text`
  },
  link: {
    textDecorationLine: 'none', // Di React Native, untuk menghilangkan underline pada link, gunakan `textDecorationLine`
    color: 'inherit', // Tidak ada properti `color: inherit`, tapi Anda bisa mengaturnya secara manual pada elemen teks
  },
});

export default styles;
