import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Reuse mock data for wishlist
// Reuse mock data for wishlist
type WishlistItem = {
    id: string;
    name: string;
    subtitle: string;
    price: number;
    icon: keyof typeof Ionicons.glyphMap;
};

const WISHLIST_ITEMS: WishlistItem[] = [
    { id: '1', name: 'Fresh Lemon', subtitle: 'Organic', price: 12, icon: 'image-outline' },
    { id: '2', name: 'Green Tea', subtitle: '2 Packages', price: 6, icon: 'leaf-outline' },
    { id: '3', name: 'Fresh Lime', subtitle: 'Organic', price: 10, icon: 'image-outline' },
];

export default function FavouriteScreen() {
    const renderItem = ({ item }: { item: WishlistItem }) => (
        <View style={styles.wishlistItem}>
            <View style={styles.itemImageContainer}>
                <Ionicons name="image-outline" size={30} color="#D1D5DB" />
            </View>
            <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <SafeAreaView edges={['top']} style={styles.safeArea}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerTitle}>Wishlist</Text>
                        <TouchableOpacity style={styles.cartButton}>
                            <Ionicons name="cart-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>

            <FlatList
                data={WISHLIST_ITEMS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        backgroundColor: '#2B4C9B',
        paddingBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    safeArea: {
        backgroundColor: '#2B4C9B',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#fff',
    },
    cartButton: {
        position: 'relative',
    },
    listContent: {
        paddingHorizontal: 20,
        paddingBottom: 100, // Space for tab bar
    },
    wishlistItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F9FB',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
    },
    itemImageContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginRight: 16,
    },
    itemDetails: {
        flex: 1,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1E222B',
        marginBottom: 4,
    },
    itemSubtitle: {
        fontSize: 12,
        color: '#616A7D',
        marginBottom: 4,
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1E222B',
    },
    addButton: {
        width: 32,
        height: 32,
        backgroundColor: '#2B4C9B',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
