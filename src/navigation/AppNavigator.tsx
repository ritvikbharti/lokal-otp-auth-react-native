import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
// import OtpScreen from "../screens/OtpScreen";
// import SessionScreen from "../screens/SessionScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Login" component={LoginScreen}/>
                {/* <Stack.Screen name = "OTP" component={LoginScreen}/> */}
                {/* <Stack.Screen name = "Login" component={LoginScreen}/> */}

            </Stack.Navigator>
        </NavigationContainer>
    );
}