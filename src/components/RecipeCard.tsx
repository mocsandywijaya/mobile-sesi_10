import React from 'react';
import { View, Text, Image } from 'react-native';

interface RecipeCardProps {
  title: string;
  description: string;
  imageUrl: any;  // Gunakan 'any' atau 'require' pada type
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={{ marginBottom: 20, alignItems: 'center' }}>
      <Image source={imageUrl} style={{ width: 300, height: 200, borderRadius: 10 }} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default RecipeCard;
