import OrderListItem from '@/src/components/OrderListItem';
import orders from '@/src/data/orders';
import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

interface OrderListProps {}

const OrderList = (props: OrderListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  container: {},
});
