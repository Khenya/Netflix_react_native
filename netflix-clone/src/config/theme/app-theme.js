import { StyleSheet } from "react-native";

export const colors = {
  black: "#000000",
  primary: "#EF233C",

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
    paddingTop: 0,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: 150,
    height: 80,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  containerDownlads: {
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
  deleteButton: {
    marginLeft: 10,
  },
  titleMovieContainer: {
    fontSize: 18,
    color: colors.blanco3,
  },
  descriptionMovieContainer: {
    fontSize: 12,
    color: colors.blanco3,
  },
  port: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  
  buttonsContainer: {
    flex: 2,
    paddingTop: 20,
  },
  background: {
    flex: 1,
    backgroundColor: colors.black,
  },
  buttonsContainer: {
    flex: 2,
    paddingTop: 20,
    color: colors.blanco3,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    // Sombra para iOS
    shadowColor: colors.black,
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
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  text: {
    color: colors.blanco3,
    fontSize: 18,
  },
  divider: {
    marginVertical: 10,
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  //estilos para Movie Component
  containerMovie: {
    borderRadius: 7,
    height: 155,
    width: 120,
    //borderWidth:2,
    overflow: "hidden",
  },
  headerComponentMovie: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  },
  containerLogoNetflix: {
    height: 20,
    width: 20,
  },
  headerBottomComponentMovie: {
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    marginTop: 108,
    margin: 6,
    height: 20,
    width: 105,
    backgroundColor: colors.rojo3,
    justifyContent: "center",
    alignItems: "center",
  },
  textTop10: {
    backgroundColor: colors.rojo3,
    fontSize: 10,
    fontWeight: "900",
    color: colors.blanco3,
    padding: 2,
  },
  textNuevaTemporada: {
    fontSize: 10,
    fontWeight: "800",
    color: colors.blanco3,
  },
  safeArea: {
    paddingTop: 50,
    flex: 1,
  },
  containerimageBackground: {
    flex: 1,
  },

  //Estilos para Perfil Component

  containerGeneralPerfil: {
    margin: 25,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:2,
    borderColor: colors.blanco3,
  },

  containerPerfil: {
    height: 70,
    width: 70,
    borderRadius: 15,
  },
  containerTextPerfil: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textPerfil: {
    fontSize: 25,
    fontWeight: "800",
    color: colors.blanco3,
  },
  //Estilos para HeaderPerfilComponent
  containerHeaderMiNetlix: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerIconsHeader: {
    width: 110,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //Estilos para el VistoRecientementeComponent
  containerMainVistoRecientemente: {
    flex: 1,
  },
  containerVistoRecientemente: {
    height: 130,
    width: 235,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    overflow: "hidden",
  },

  shareMovieVistoRecientemente: {
    height: 40,
    width: 90,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
    marginLeft: 130,

    // borderWidth:2,
    // borderColor:'blue'
  },

  containerTitleVistoRecientementeMovie: {
    height: 40,
    width: 235,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.rojo2,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  textTitleVistoRecientementeMovie: {
    fontSize: 15,
    color: colors.blanco3,
  },

  //Estilos para el Profile Screen

  subTitleForScroll: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 25,
    marginBottom: 5,
    color: colors.blanco3,
  },

  //Estilos para HeaderGeneralComponent

  containerHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 5,

    // borderWidth:2,
    // borderColor:'white',
  },

  containerHeaderImageWithBottons: {
    height: 350,
    //width: 900,
    // borderWidth: 2,
    // borderColor: "white",
  },

  containerImageDescripcionMovie: {
    height: 320,
    width: 430,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    // overflow: "hidden",
    // borderWidth:2,
    // borderColor:'white',
  },

  containerLogoNetflixx: {
    width: 100,
    height: 30,
    marginLeft: 25,
  },

  containerLogoNetflixx2: {
    width: 70,
    height: 20,
    marginLeft: 10,
  },

  containerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 10,
  },

  //estilos para MultipleButtonsComponent
  containerMultipleButtons: {
    height: 70,
    width: 300,
    backgroundColor: "#1f2124",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 12,
    paddingLeft: 12,
    marginTop: 250,
    marginLeft: 60,
  },
  containerButtonText: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainerButtonText: {
    fontSize: 10,
    color: colors.blanco3,
  },
  containerButtonOfMultipleButtons: {
    height: 35,
    width: 35,
    padding: 6,
    borderWidth: 2,
    borderColor: colors.rojo3,
    borderRadius: 17,
  },

  containerDescripcionMovieScreen: {
    flex: 1,
    backgroundColor: colors.black, //Por mientras
    // paddingTop: 50,
    justifyContent: "flex-start",
  },

  //estilos para Cast & Crew
  containerCastCrew: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 5,
    alignItems: "center",

    // borderWidth:2,
    // borderColor:'white'
  },

  textCastCrew: {
    color: colors.blanco3,
    fontSize: 20,
    fontWeight: "800",
  },

  //estiloPaRAActorMovieComponent

  containerActor: {
    height: 100,
    width: 100,
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 7,
    borderRadius: 15,
    overflow: "hidden",
  },

  containerShadowActor: {
    shadowColor: colors.blanco3,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
    marginBottom: 20,
    marginLeft:6,
  },

  containerButtonsMovieDescription:{
    flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginHorizontal: 18,
        backgroundColor: "gray",
        height: 50,
        borderRadius: 30,
        paddingHorizontal: 30,
  },
  // SearchScreen
  containerTextBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 15,
    color: colors.blanco3,
    opacity: 0.5,
    position: "absolute",
    left: 22,
    zIndex: 1,
  },
  icon: {
    fontSize: 18,
    color: colors.blanco3,
    justifyContent: "center",
    alignItems: "center",
    top:12
  },
  textInput: {
    width: "95%",
    height: 40, 
    backgroundColor: "#333333", 
    borderRadius: 5,
    paddingLeft: 35,
    opacity: 0.9,
    fontSize: 15,
    color: colors.blanco3, 
  },

  // Estilos CarruselComponent

  containerCarrusel :{
    height:100,
    width:200,
  },

  containerContinueWatching:{
    width:200,
            margin:20,
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: 'space-between',
            // borderWidth:2,
            // borderColor:'white'
  }
});
