import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image as RNImage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section - Blue Background */}
      <View style={styles.headerContainer}>
        <SafeAreaView edges={['top']} style={styles.safeArea}>
          <View style={styles.headerContent}>
            {/* Top Row: Greeting & Cart */}
            <View style={styles.topRow}>
              <Text style={styles.greetingText}>Hey, Halal</Text>
              <View style={styles.cartContainer}>
                <Ionicons name="cart-outline" size={28} color="#fff" />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>3</Text>
                </View>
              </View>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
              <TextInput
                placeholder="Search Products or store"
                placeholderTextColor="#A9B4D5"
                style={styles.searchInput}
              />
            </View>

            {/* Delivery Info */}
            <View style={styles.deliveryRow}>
              <View>
                <Text style={styles.deliveryLabel}>DELIVERY TO</Text>
                <View style={styles.deliveryValueRow}>
                  <Text style={styles.deliveryValue}>Green Way 3000, Sylhet</Text>
                  <Ionicons name="chevron-down" size={16} color="#D1D5DB" />
                </View>
              </View>
              <View>
                <Text style={styles.deliveryLabel}>WITHIN</Text>
                <View style={styles.deliveryValueRow}>
                  <Text style={styles.deliveryValue}>1 Hour</Text>
                  <Ionicons name="chevron-down" size={16} color="#D1D5DB" />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerScroll} contentContainerStyle={styles.bannerContainer}>
          {/* Banner 1 */}
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
          {/* Banner 2 (Partial) */}
          <View style={[styles.bannerCard, { backgroundColor: '#E4DDCB', marginRight: 20 }]}>
            <View style={styles.bannerImagePlaceholder}>
              <Ionicons name="image-outline" size={40} color="#fff" />
            </View>
          </View>
        </ScrollView>

        {/* Recommended Section */}
        <Text style={styles.sectionTitle}>Recommended</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedScroll} contentContainerStyle={styles.recommendedContainer}>

          {/* Product Card 1 */}
          <View style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <Ionicons name="image-outline" size={40} color="#D1D5DB" />
            </View>
            <Text style={styles.productTitle}>Fresh Lemon</Text>
            <Text style={styles.productSubtitle}>Organic</Text>
            <View style={styles.productFooter}>
              <Text style={styles.productPrice}>Unit <Text style={styles.priceBold}>$12</Text></Text>
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
              <Text style={styles.productPrice}>Unit <Text style={styles.priceBold}>$06</Text></Text>
              <TouchableOpacity style={styles.addButton}>
                <Ionicons name="add" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Product Card 3 (Partial) */}
          <View style={styles.productCard}>
            <View style={styles.productImageContainer}>
              <Ionicons name="image-outline" size={40} color="#D1D5DB" />
            </View>
            <Text style={styles.productTitle}>Fresh Lime</Text>
            <Text style={styles.productSubtitle}>Organic</Text>
            <View style={styles.productFooter}>
              <Text style={styles.productPrice}>Unit <Text style={styles.priceBold}>$1</Text></Text>
            </View>
          </View>

        </ScrollView>

        {/* Extra spacing for tab bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
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
    borderBottomLeftRadius: 20, // Should this be rounded? The image looks like simple blue header but let's check carefully.
    // Looking at Image: The blue background seems to just be the top part. No curved bottom edge visible in screenshot, but common style.
    // Wait, the screenshot cuts off the header bottom? No, I see "Delivery to..." in blue.
    // The curve might be subtle or just straight. I'll stick to straight for now unless I see otherwise.
    // Actually re-examining: The banner "Get 50% OFF" is on white background BELOW the header.
  },
  safeArea: {
    backgroundColor: '#2B4C9B',
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#F9B023',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#2B4C9B',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#153075',
    borderRadius: 28, // Pill shape
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  deliveryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryLabel: {
    color: '#8891A5',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  deliveryValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  deliveryValue: {
    color: '#F8F9FB',
    fontSize: 14,
    fontWeight: '500',
  },
  scrollContent: {
    flex: 1,
  },
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
