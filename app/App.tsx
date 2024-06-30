import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import TabsNavigator from './TabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "@/app/login";
import NotFoundScreen from "@/app/+not-found";

const Stack = createStackNavigator();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
                    <Stack.Screen name="+not-found" component={NotFoundScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
