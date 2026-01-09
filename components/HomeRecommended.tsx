import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeRecommended() {
    return (
        <View>
            <Text style={styles.sectionTitle}>Recommended</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.recommendedScroll}
                contentContainerStyle={styles.recommendedContainer}
                snapToInterval={156} // 140 (card width) + 16 (margin)
                decelerationRate="fast"
            >

                {/* Product Card 1 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Fresh Lemon</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}><Text style={styles.priceBold}>$12</Text></Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Product Card 2 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Green Tea</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}> <Text style={styles.priceBold}>$06</Text></Text>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Product Card 3 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Fresh Lime</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}><Text style={styles.priceBold}>$10</Text></Text>
                    </View>
                </View>
                {/* Product Card 4 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Fresh Lime</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}><Text style={styles.priceBold}>$10</Text></Text>
                    </View>
                </View>
                {/* Product Card 5 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Fresh Lime</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}><Text style={styles.priceBold}>$10</Text></Text>
                    </View>
                </View>
                {/* Product Card 6 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Fresh Lime</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}><Text style={styles.priceBold}>$10</Text></Text>
                    </View>
                </View>
                {/* Product Card 7 */}
                <View style={styles.productCard}>
                    <View style={styles.productImageContainer}>
                        <Ionicons name="image-outline" size={40} color="#D1D5DB" />
                    </View>
                    <Text style={styles.productTitle}>Fresh Lime</Text>
                    <Text style={styles.productSubtitle}>Organic</Text>
                    <View style={styles.productFooter}>
                        <Text style={styles.productPrice}><Text style={styles.priceBold}>$10</Text></Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 30,
        color: '#1E222B',
        fontWeight: '400',
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 16,
    },
    recommendedScroll: {
        paddingLeft: 20,
    },
    recommendedContainer: {
        paddingRight: 20,
    },
    productCard: {
        width: 140,
        height: 194,
        backgroundColor: '#F8F9FB', // Very light gray from image
        borderRadius: 12,
        marginRight: 16,
        padding: 12,
    },
    productImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1E222B',
        marginBottom: 2,
    },
    productSubtitle: {
        fontSize: 12,
        color: '#616A7D', // Gray subtitle
        marginBottom: 12,
    },
    productFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    productPrice: {
        fontSize: 12,
        color: '#1E222B',
    },
    priceBold: {
        fontWeight: '700',
        fontSize: 14,
    },
    addButton: {
        width: 24,
        height: 24,
        backgroundColor: '#2B4C9B',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
