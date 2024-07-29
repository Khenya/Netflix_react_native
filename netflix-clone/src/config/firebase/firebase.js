// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { StyleSheet } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQAguJZsJHrOxXgHbRWpMFTcd75yPFq-I",
  authDomain: "netflix-dfc69.firebaseapp.com",
  databaseURL: "https://netflix-dfc69-default-rtdb.firebaseio.com",
  projectId: "netflix-dfc69",
  storageBucket: "netflix-dfc69.appspot.com",
  messagingSenderId: "461669253694",
  appId: "1:461669253694:web:241140c32a674b0531476f",
  measurementId: "G-WTWTFLFJDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, signInWithEmailAndPassword, onAuthStateChanged }



export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario logueado:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
        Alert.alert('Error', error.message);
      });
  };

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registro exitoso', 'Usuario registrado con éxito');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error de Registro', 'El correo electrónico ya está en uso.');
      } else {
        Alert.alert('Error de Registro', `Error: ${error.message}`);
      }
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <Text>Bienvenido, {user.email}</Text>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Iniciar Sesión" onPress={handleLogin} />
          <Button title="Registrar" onPress={handleRegister} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});