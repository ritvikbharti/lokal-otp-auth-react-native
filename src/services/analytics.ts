import AsyncStorage from "@react-native-async-storage/async-storage";

export const logEvent = async (event: string) => {
  const logs = JSON.parse((await AsyncStorage.getItem("logs")) || "[]");
  logs.push({ event, time: new Date().toISOString() });
  await AsyncStorage.setItem("logs", JSON.stringify(logs));
};

export const showLogs = async () => {
  const logs = await AsyncStorage.getItem("logs");
  console.log("Stored Logs:", logs);
};