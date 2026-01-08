import React, { useRef } from 'react';
import { View, FlatList, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingStepOne from '@/components/OnboardingStepOne';
import OnboardingStepTwo from '@/components/OnboardingStepTwo';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
    const router = useRouter();
    const flatListRef = useRef<FlatList>(null);

    const handleNext = () => {
        flatListRef.current?.scrollToIndex({ index: 1, animated: true });
    };

    const handleFinish = async () => {
        try {
            await AsyncStorage.setItem('hasLaunched', 'true');
            router.replace('/(tabs)');
        } catch (e) {
            console.error('Failed to save storage', e);
        }
    };
    const renderItem = ({ index }: { index: number }) => {
        if (index === 0) {
            return <OnboardingStepOne onNext={handleNext} />;
        }
        return <OnboardingStepTwo onFinish={handleFinish} />;
    };

    const slides = [1, 2];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={(item) => item.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                renderItem={renderItem}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
