import React, { useState } from "react";
import { SafeAreaView, TextInput, Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";
import logo from "../assets/icon.jpg"; // Asegúrate de tener un logo de Netflix

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePasswordReset = () => {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        setMessage("Revisa tu correo para restablecer tu contraseña");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setLoading(false);
        setMessage("No se pudo enviar el correo. Verifica tu dirección de correo electrónico.");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#888"
      />

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <Button
        title="Recuperar contraseña"
        loading={loading}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={styles.resetButton}
        titleStyle={styles.resetButtonText}
        onPress={handlePasswordReset}
        containerStyle={styles.resetButtonContainer}
      />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>¿Recordaste tu contraseña?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.loginButton}>Inicia sesión.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  resetButton: {
    backgroundColor: '#e50914',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButtonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  resetButtonText: {
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

export default ForgotPassword;
