import { StyleSheet } from "react-native";

export const colors = {

    black: '#000000',
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
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: 50,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    port: {
        width: 80,
        height: 120,
        borderRadius: 5,
    },
    titleMovieContainer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blanco3
    },
    descriptionMovieContainer: {
        fontSize: 14,
        color: colors.blanco2
    },
    buttonsContainer: {
        flex: 2,
        paddingTop: 20,
    },
    background: {
        flex: 1,
        backgroundColor: colors.black
    },
    buttonsContainer: {
        flex: 2,
        paddingTop: 20,
        color: colors.blanco3
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
    text: {
        color: colors.blanco3,
        fontSize: 18,
    },
    divider: {
        marginVertical: 10
    }, 
    title: {
        color: colors.rojo2,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        direction: "center"
    },
});