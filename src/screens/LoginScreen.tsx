import { useState } from "react";
import {View,TextInput,Text,StyleSheet,TouchableOpacity} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import {generateOtp} from "../services/otpManager"


type Props = NativeStackScreenProps<RootStackParamList, "Login">;


export default function LoginScreen({navigation} :Props){
    const [email,setEmail] = useState("");
    const sendOtp = ()=>{
        const otp = generateOtp(email);
        console.log("Generated OTP: ",otp);
        navigation.navigate("OTP",{email})
        
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login with OTP</Text>
        <Text style={styles.subtitle}>Enter your email to continue</Text>
    
        <TextInput
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />
    
        <TouchableOpacity style={styles.button} onPress={sendOtp}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
