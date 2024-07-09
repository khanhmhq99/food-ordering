import ProductListItem from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import products from '@/src/data/products';
import { StyleSheet, View } from 'react-native';

const product = products[0];

export default function MenuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]}></ProductListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
});
