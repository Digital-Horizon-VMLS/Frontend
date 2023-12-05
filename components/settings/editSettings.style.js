import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
      elevation: 2,
      height: 170,
      width: 170,
      backgroundColor: '#efefef',
      position: 'relative',
      borderRadius: 999,
      overflow: 'hidden',
    },
    imageContainer: {
      flex: 1,
    },
    uploadBtnContainer: {
      opacity: 0.7,
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: 'lightgrey',
      width: '100%',
      height: '25%',
    },
    uploadBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyle: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    centerView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: colors.secondary,
      padding: 35,
      borderRadius: 20,
      shadowColor: '#000',
      elevation: 5,
    },
    textOptions: {            
      paddingVertical: 15,
      paddingHorizontal: 10,
      flexDirection: "row",
      justifyContent: "flex-start",
      gap: 10,
      alignItems: "center"
    },
    saveButton: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'green',
    },
    deleteButton: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'red',
      },
      buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        bottom: 1,
        justifyContent: 'center',
        top: 200
      }
});

export default styles;