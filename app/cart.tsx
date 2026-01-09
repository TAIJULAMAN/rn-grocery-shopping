import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Mock Cart Data
type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    icon: keyof typeof Ionicons.glyphMap;
};

const INITIAL_CART_ITEMS: CartItem[] = [
    { id: '1', name: 'Fresh Lemon', price: 12, quantity: 1, icon: 'image-outline' },
    { id: '2', name: 'Green Tea', price: 6, quantity: 2, icon: 'leaf-outline' },
    { id: '3', name: 'Fresh Lime', price: 10, quantity: 1, icon: 'image-outline' },
];

export default function CartScreen() {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const delivery = 35.00;
    const total = subtotal + delivery;

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.cartItem}>
            <View style={styles.itemImageContainer}>
                <Ionicons name={item.icon} size={30} color="#D1D5DB" />
            </View>
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.qtyButton}>
                    <Ionicons name="remove" size={16} color="#1E222B" />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.qtyButton}>
                    <Ionicons name="add" size={16} color="#1E222B" />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView edges={['top']} style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#1E222B" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Shopping Cart ({cartItems.length})</Text>
                    <View style={{ width: 40 }} />
                </View>
            </SafeAreaView>

            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.footer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Subtotal</Text>
                    <Text style={styles.summaryValue}>${subtotal}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Delivery</Text>
                    <Text style={styles.summaryValue}>${delivery.toFixed(2)}</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
                </View>

                <TouchableOpacity style={styles.checkoutButton} onPress={() => router.push('/checkout')}>
                    <Text style={styles.checkoutButtonText}>Proceed To Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#fff',
        paddingBottom: 10,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: 50,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1E222B',
    },
    listContent: {
        padding: 20,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F8F9FB',
    },
    itemImageContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#F8F9FB',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E222B',
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 14,
        color: '#1E222B',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F8F9FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qtyText: {
        marginHorizontal: 12,
        fontSize: 14,
        fontWeight: '600',
        color: '#1E222B',
    },
    footer: {
        padding: 24,
        paddingBottom: 40,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#616A7D',
    },
    summaryValue: {
        fontSize: 14,
        color: '#1E222B',
        fontWeight: '600',
    },
    totalLabel: {
        fontSize: 14,
        color: '#616A7D',
    },
    totalValue: {
        fontSize: 16,
        color: '#1E222B',
        fontWeight: '700',
    },
    checkoutButton: {
        backgroundColor: '#2B4C9B',
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    checkoutButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});
