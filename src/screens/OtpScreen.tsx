import {useState} from "react";
import {View, TextInput,Text,StyleSheet,TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { validateOTP } from "../services/otpManager";


type Props = NativeStackScreenProps<RootStackParamList, "OTP">;

export default function otpScreen({route,navigation}:Props){
    const {email} = route.params;
    const [otp,setOtp] = useState("");
    const [error,setError] = useState("");
    const verifyOtp = ()=>{
        const result = validateOTP(email,otp);

        if(result.success){
            console.log("OTP_VALIDATION_SUCCESSFULL");
            
            navigation.navigate("Session");
        }else{
            setError(result.reason ?? "Invalid OTP");
        }
    }

return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={styles.subtitle}>We sent an OTP to {email}</Text>

      <TextInput
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={6}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={verifyOtp}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 3,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  error: {
    marginTop: 10,
    color: "red",
    fontSize: 14,
  },
});