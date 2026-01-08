import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';
import SplashScreen from '@/components/SplashScreen';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [hasLaunched, setHasLaunched] = useState(false);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                const [value] = await Promise.all([
                    AsyncStorage.getItem('hasLaunched'),
                    new Promise(resolve => setTimeout(resolve, 3000))
                ]);

                if (value !== null) {
                }
            } catch (e) {
                console.error('Failed to load storage', e);
            } finally {
                setLoading(false);
            }
        };

        checkFirstLaunch();
    }, []);

    if (loading) {
        return <SplashScreen />;
    }

    if (!hasLaunched) {
        return <Redirect href="/onboarding" />;
    }

    return <Redirect href="/(tabs)" />;
}
