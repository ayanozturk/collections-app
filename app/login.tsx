import React, { useState } from 'react';
import {Text, TextInput} from "react-native";
import axios from 'axios';
import {ThemedView} from "@/components/ThemedView";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Button } from '@rneui/themed';
import { Input } from '@rneui/themed';
import Ionicons from "@expo/vector-icons/Ionicons";
import ParallaxScrollView from "@/components/ParallaxScrollView";

const API_URL = process.env.API_URL || 'http://localhost:8080';

const LoginScreen: React.FC = ({ }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const colorScheme = useColorScheme();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                email,
                password,
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Ionicons size={310} name="code-slash" />}>

        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemedView>
            <Text>Login</Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </ThemedView>
        </ThemeProvider>
        </ParallaxScrollView>
    );
}

export default LoginScreen;
