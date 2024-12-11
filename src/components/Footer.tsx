import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Footer';  // Impor gaya yang telah didefinisikan

const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ color: '#fff' }}>Footer Content</Text>
    </View>
  );
};

export default Footer;
