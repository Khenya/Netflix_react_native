import React, { useState } from "react";
import { SafeAreaView, TextInput, Text, StyleSheet, Image, View, TouchableOpacity, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from "../assets/icon.jpg"; // Asegúrate de tener un logo de Netflix

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const register = () => {
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        setMessage("Registro exitoso. Por favor, inicia sesión.");
        navigation.navigate("login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
        setMessage(errorMessage);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Número de teléfono"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        placeholderTextColor="#888"
      />

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Button
        title="Regístrate"
        loading={loading}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={styles.signupButton}
        titleStyle={styles.signupButtonText}
        onPress={register}
        containerStyle={styles.signupButtonContainer}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>¿Ya tienes una cuenta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.loginButton}>Inicia sesión.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
  },
  logo: {
    width: 200,
    height: 60,
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#222",
    color: "#fff",
  },
  signupButton: {
    backgroundColor: '#e50914',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
  },
  loginText: {
    color: '#888',
  },
  loginButton: {
    color: '#e50914',
    marginLeft: 5,
  },
});

export default SignUpScreen;
