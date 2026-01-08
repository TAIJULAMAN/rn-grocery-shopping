import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';

export default function Index() {
    const [loading, setLoading] = useState(true);
    const [hasLaunched, setHasLaunched] = useState(false);

    useEffect(() => {
        const checkFirstLaunch = async () => {
            try {
                const value = await AsyncStorage.getItem('hasLaunched');
                if (value !== null) {
                    // setHasLaunched(true); // Uncomment to enable one-time onboarding logic
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
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!hasLaunched) {
        return <Redirect href="/onboarding" />;
    }

    return <Redirect href="/(tabs)" />;
}
