import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

interface ProductDetailsScreenProps {}

const ProductDetailsScreen = (props: ProductDetailsScreenProps) => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details ' + id }} />
      <Text>ProductDetailsScreen {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {},
});
