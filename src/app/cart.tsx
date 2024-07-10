import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, StyleSheet, Platform, FlatList } from 'react-native';
import { useCart } from '../providers/CartProvider';
import CartListItem from '../components/CartListItem';
import Button from '../components/Button';
import { Text } from '../components/Themed';

interface CartProps {}

const Cart = (props: CartProps) => {
  const { items, total } = useCart();

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
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: '500' }}>
        Total: #{total}
      </Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {},
});
