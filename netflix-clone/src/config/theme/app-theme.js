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
        paddingHorizontal: 10,
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
    deleteButton:{
        fontSize:24,
        textAlign: "right",
        color: colors.primary 
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
        color: colors.primary,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
    },

    //estilos para Movie Component 
    containerMovie: {
        borderRadius:7,
        height:155,
        width:120,
        //borderWidth:2,
        overflow:'hidden',
        
    },
    headerComponentMovie:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        margin:0,
    },
    containerLogoNetflix:{
        height:20,
        width:20,
    },
    headerBottomComponentMovie:{
        borderTopEndRadius:5,
        borderTopStartRadius:5,
        marginTop:108,
        margin:6,
        height:20,
        width:105,
        backgroundColor: colors.rojo3,
        justifyContent:'center',
        alignItems:'center',
    },
    textTop10:{
        backgroundColor:colors.rojo3,
        fontSize:10,
        fontWeight:'900',
        color:colors.blanco3,
        padding:2,
    },
    textNuevaTemporada:{
        fontSize:10,
        fontWeight:'800',
        color:colors.blanco3
    },
    safeArea:{
        paddingTop:50,
        flex:1,
    },
    containerimageBackground:{
        flex:1,
    },

    //Estilos para Perfil Component

    containerGeneralPerfil:{
        margin:25,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
       // borderWidth:2,
        borderColor: colors.blanco3,
    },
    
    containerPerfil:{
        height:70,
        width:70,
        borderRadius:15,
    },
    containerTextPerfil:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    textPerfil:{
        fontSize:25,
        fontWeight:'800',
        color:colors.blanco3
    },
    //Estilos para HeaderPerfilComponent
    containerHeaderMiNetlix:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    containerIconsHeader:{
        width:110,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    //Estilos para el VistoRecientementeComponent
    containerMainVistoRecientemente:{
        flex:1,
    },
    containerVistoRecientemente:{
        height:130,
        width:235,
        borderTopStartRadius:5,
        borderTopEndRadius:5,
        overflow:'hidden',
    },

    shareMovieVistoRecientemente: {
        height:40,
        width:90,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:80,
        marginLeft:130,

        // borderWidth:2,
        // borderColor:'blue'
    },

    containerTitleVistoRecientementeMovie:{
        height:50,
        width:235,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.rojo2,
        borderBottomEndRadius:5,
        borderBottomStartRadius:5,
    },
    textTitleVistoRecientementeMovie:{
        fontSize:15,
        color:colors.blanco3,
    },


    //Estilos para el Profile Screen

    subTitleForScroll :{
        fontSize:18,
        fontWeight:'700',
        marginTop:25,
        marginBottom:5,
        color:colors.blanco3
    }

});