import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Image as RNImage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import HomeBanner from '@/components/HomeBanner';
import HomeRecommended from '@/components/HomeRecommended';
import HomeDeals from '@/components/HomeDeals';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
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
                focusable={false}
                style={styles.searchInput}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <HomeBanner />
        <HomeRecommended />
        <HomeDeals />
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    borderRadius: 28,
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

});
