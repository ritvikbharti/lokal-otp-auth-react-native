import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useSessionTimer } from "../hooks/useSessionTimer";
import { logEvent } from "../services/analytics"; 
import { showLogs } from "../services/analytics";
import { useEffect } from "react";
// useEffect(() => {
//   showLogs();
// }, []);
type Props = NativeStackScreenProps<RootStackParamList, "Session">;

export default function SessionScreen({ navigation }: Props) {
  const time = useSessionTimer();

  const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");

  const logout = async () => {
  await logEvent("LOGOUT");

  navigation.reset({index: 0, routes: [{ name: "Login" }],
  });
};
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Session Started</Text>

      <View style={styles.timerBox}>
        <Text style={styles.timerText}>
          {minutes}:{seconds}
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
           <TouchableOpacity style={styles.debugBtn} onPress={showLogs}>
  <Text style={styles.debugText}>Show Logs</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
  },
  timerBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    marginBottom: 30,
  },
  timerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  logoutBtn: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  debugBtn: {
  marginTop: 20,
  backgroundColor: "#6b7280",
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  alignItems: "center",
},
debugText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "500",
},
});