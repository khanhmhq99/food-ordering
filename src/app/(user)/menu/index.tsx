import ProductListItem from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import products from '@/src/data/products';
import { FlatList, StyleSheet, View } from 'react-native';

const product = products[0];

export default function MenuScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ProductListItem product={item}></ProductListItem>
      )}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}
