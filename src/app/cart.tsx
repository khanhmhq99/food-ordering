import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Platform, FlatList } from 'react-native';
import { useCart } from '../providers/CartProvider';
import CartListItem from '../components/CartListItem';

interface CartProps {}

const Cart = (props: CartProps) => {
  const { items } = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{
          padding: 10,
          gap: 10,
        }}
      ></FlatList>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {},
});
