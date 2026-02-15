import AsyncStorage from "@react-native-async-storage/async-storage";

export const logEvent = async (event: string) => {
  const logs = JSON.parse((await AsyncStorage.getItem("logs")) || "[]");
  logs.push({ event, time: new Date().toISOString() });
  await AsyncStorage.setItem("logs", JSON.stringify(logs));
};