import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import {StackNavigationProp} from "@react-navigation/stack";

// Define your navigation param list
type RootStackParamList = {
  login: undefined;
  Register: undefined;
  settings: undefined;
  CollectionsList: { token: string };
};

// Define the navigation prop type for the login screen
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'settings'>;

// Define the props type
type Props = {
  navigation: LoginScreenNavigationProp;
};

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>

      <ThemedText>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text>Have an account? Login here</Text>
        </TouchableOpacity>
      </ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

export default SettingsScreen;
