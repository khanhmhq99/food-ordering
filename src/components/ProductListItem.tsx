import Colors from '@/src/constants/Colors';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Product } from '../models/types';
import { Link, useSegments } from 'expo-router';

type ProducListItemProps = { product: Product };

export const defaultPizzaImage: string =
  'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({ product }: ProducListItemProps) => {
  const segments = useSegments();
  
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || '' }}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
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
