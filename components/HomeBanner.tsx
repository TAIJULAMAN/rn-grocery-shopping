import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeBanner() {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.bannerScroll}
            contentContainerStyle={styles.bannerContainer}
            snapToInterval={296}
            decelerationRate="fast"
        >
            <View style={[styles.bannerCard, { backgroundColor: '#F9B023' }]}>
                <View style={styles.bannerImagePlaceholder}>
                    <Ionicons name="image-outline" size={40} color="#fff" />
                </View>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>Get</Text>
                    <Text style={styles.bannerDiscount}>50% OFF</Text>
                    <Text style={styles.bannerSubtitle}>On first 03 order</Text>
                </View>
            </View>
            <View style={[styles.bannerCard, { backgroundColor: '#F9B023' }]}>
                <View style={styles.bannerImagePlaceholder}>
                    <Ionicons name="image-outline" size={40} color="#fff" />
                </View>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>Get</Text>
                    <Text style={styles.bannerDiscount}>50% OFF</Text>
                    <Text style={styles.bannerSubtitle}>On first 03 order</Text>
                </View>
            </View>
            <View style={[styles.bannerCard, { backgroundColor: '#F9B023' }]}>
                <View style={styles.bannerImagePlaceholder}>
                    <Ionicons name="image-outline" size={40} color="#fff" />
                </View>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>Get</Text>
                    <Text style={styles.bannerDiscount}>50% OFF</Text>
                    <Text style={styles.bannerSubtitle}>On first 03 order</Text>
                </View>
            </View>
            <View style={[styles.bannerCard, { backgroundColor: '#F9B023' }]}>
                <View style={styles.bannerImagePlaceholder}>
                    <Ionicons name="image-outline" size={40} color="#fff" />
                </View>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>Get</Text>
                    <Text style={styles.bannerDiscount}>50% OFF</Text>
                    <Text style={styles.bannerSubtitle}>On first 03 order</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bannerScroll: {
        marginTop: 20,
        paddingLeft: 20,
    },
    bannerContainer: {
        paddingRight: 20,
    },
    bannerCard: {
        width: 280,
        height: 160,
        borderRadius: 16,
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
    bannerImagePlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    bannerTextContainer: {
        flex: 1,
    },
    bannerTitle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '400',
    },
    bannerDiscount: {
        fontSize: 26,
        color: '#fff',
        fontWeight: '800',
    },
    bannerSubtitle: {
        fontSize: 14,
        color: '#fff',
        marginTop: 4,
    },
});
