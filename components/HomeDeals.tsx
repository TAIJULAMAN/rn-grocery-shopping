import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeDeals() {
    return (
        <View>
            <Text style={styles.sectionTitle}>Deals on Fruits & Tea</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.dealsScroll}
                contentContainerStyle={styles.dealsContainer}
                snapToInterval={176} // 160 (card width) + 16 (margin)
                decelerationRate="fast"
            >

                {/* Deal Card 1 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$325</Text>
                        <Text style={styles.title}>Orange Package 1 | 1 bundle</Text>
                    </View>
                </View>

                {/* Deal Card 2 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$89</Text>
                        <Text style={styles.title}>Green Tea Package 2 | 1 bundle</Text>
                    </View>
                </View>

                {/* Deal Card 3 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$100</Text>
                        <Text style={styles.title}>Apple Package 3 | 1 bundle</Text>
                    </View>
                </View>
                {/* Deal Card 4 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$325</Text>
                        <Text style={styles.title}>Orange Package 1 | 1 bundle</Text>
                    </View>
                </View>

                {/* Deal Card 5 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$89</Text>
                        <Text style={styles.title}>Green Tea Package 2 | 1 bundle</Text>
                    </View>
                </View>

                {/* Deal Card 6 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$100</Text>
                        <Text style={styles.title}>Apple Package 3 | 1 bundle</Text>
                    </View>
                </View>
                {/* Deal Card 7 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$325</Text>
                        <Text style={styles.title}>Orange Package 1 | 1 bundle</Text>
                    </View>
                </View>

                {/* Deal Card 8 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$89</Text>
                        <Text style={styles.title}>Green Tea Package 2 | 1 bundle</Text>
                    </View>
                </View>

                {/* Deal Card 9 */}
                <View style={styles.dealCard}>
                    <View style={styles.imageContainer}>
                        <Ionicons name="image-outline" size={50} color="#D1D5DB" />
                        <TouchableOpacity style={styles.wishlistButton}>
                            <Ionicons name="heart-outline" size={18} color="#FFC107" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addButton}>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.price}>$100</Text>
                        <Text style={styles.title}>Apple Package 3 | 1 bundle</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        color: '#1E222B',
        fontWeight: '700',
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 16,
    },
    dealsScroll: {
        paddingLeft: 20,
    },
    dealsContainer: {
        paddingRight: 20,
    },
    dealCard: {
        width: 160,
        marginRight: 16,
        backgroundColor: '#F8F9FB', // Light card background
        borderRadius: 12,
        padding: 12,
    },
    imageContainer: {
        width: '100%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        position: 'relative',
    },
    wishlistButton: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    addButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 28,
        height: 28,
        backgroundColor: '#2B4C9B',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        paddingHorizontal: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1E222B',
        marginBottom: 4,
    },
    title: {
        fontSize: 12,
        color: '#616A7D',
        lineHeight: 18,
    },
});
