import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { EnvelopeIcon, KeyIcon } from "react-native-heroicons/outline";
import { themeColor } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        setLoading(false);
      }
      if (currentUser) {
        navigation.replace("Main");
      }
    });

    return unSub;
  }, []);

  const loginUser = () => {
    if (email === "" || password === "") {
      Alert.alert(
        "Error",
        "Invaild details please fill all the details.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Ok",
            style: "default",
          },
        ],
        { cancelable: true }
      );
    } else {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;

          Alert.alert(
            "Login Success",
            "Your account has been logged in successfully.",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              {
                text: "Ok",
                style: "default",
              },
            ],
            { cancelable: true }
          );

          navigation.replace("Main");
        }
      );
    }
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      {loading ? (
        <View>
          <ActivityIndicator color={themeColor.primaryColor} size={"large"} />
        </View>
      ) : (
        <View>
          <View>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
            >
              Login To Continue
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 20,
              flexDirection: "row",
              paddingVertical: 20,
              paddingHorizontal: 10,
              gap: 10,
              borderRadius: 10,
              marginTop: 40,
              backgroundColor: themeColor.lightGray,
              borderColor: themeColor.lightGray,
            }}
          >
            <EnvelopeIcon color={"black"} />
            <TextInput
              placeholder="Enter Your Email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View
            style={{
              borderWidth: 1,
              marginHorizontal: 20,
              flexDirection: "row",
              paddingVertical: 20,
              paddingHorizontal: 10,
              gap: 10,
              borderRadius: 10,
              marginTop: 20,
              backgroundColor: themeColor.lightGray,
              borderColor: themeColor.lightGray,
            }}
          >
            <KeyIcon color={"black"} />
            <TextInput
              secureTextEntry
              placeholder="Enter Your Password"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity
            onPress={loginUser}
            style={{
              marginVertical: 40,
              marginHorizontal: 20,
              backgroundColor: themeColor.primaryColor,
              paddingVertical: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Don't have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.replace("Register")}>
              <Text style={{ fontWeight: "bold" }}>Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
