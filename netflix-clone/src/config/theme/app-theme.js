import { StyleSheet } from "react-native";

export const colors = {
  
  primary: '#EF233C',
  // GAMA DE ROJOS
  rojo1: "#75111D",
  rojo2: "#8F1524",
  rojo3: "#B31A2D",
  // GAMA DE ROSADOS
  rosado1: "#D72036",
  rosado2: "#F46577",
  rosado3: "#F9A7B1",
  // GAMA DE BLANCOS
  blanco1: "#FBC8CE",
  blanco2: "#FDE9EC",
  blanco3: "#FEF4F5",
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black
  },
  containerResult: {
    flex: 1,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonsContainer: {
    flex: 2,
    paddingTop: 20,
  },
  mainResult: {
    color: colors.blue,
    fontSize: 60,
    fontWeight: "500",
    textAlign: "right",
  },
  buttonEqual: {
    height: 80,
    width: 180,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subResult: {
    fontSize: 35,
    textAlign: "right",
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Sombra para Android
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  divider: {
    marginVertical: 10
  },title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    direction: "center"
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});