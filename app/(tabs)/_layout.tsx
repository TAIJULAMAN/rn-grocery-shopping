import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1E222B',
        tabBarInactiveTintColor: '#8891A5',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          height: 80,
          paddingTop: 10,
          paddingBottom: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, focused && styles.activeHomeTab]}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#F9B023" : "#8891A5"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, focused && styles.activeHomeTab]}>
              <Ionicons
                name={focused ? "grid" : "grid-outline"}
                size={24}
                color={focused ? "#F9B023" : "#8891A5"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: 'Favourite',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, focused && styles.activeHomeTab]}>
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                size={24}
                color={focused ? "#F9B023" : "#8891A5"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.tabIconContainer, focused && styles.activeHomeTab]}>
              <Ionicons
                name={focused ? "ellipsis-vertical" : "ellipsis-vertical-outline"}
                size={24}
                color={focused ? "#F9B023" : "#8891A5"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeHomeTab: {
    backgroundColor: '#1E222B',
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#F8F9FB',
  },
});
