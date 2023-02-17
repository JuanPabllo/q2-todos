import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveSecureStore(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

async function getValueForSecureStore(key: string): Promise<string | null> {
  const result = await AsyncStorage.getItem(key);
  return result;
}

async function deleteValueForSecureStore(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}

export { saveSecureStore, getValueForSecureStore, deleteValueForSecureStore };
