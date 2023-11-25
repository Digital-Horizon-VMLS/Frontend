import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
      },
    topicTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.white
      },
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
      NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
      },
      NavBar: {
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        width: '95%',
        justifyContent: 'space-evenly',
        borderRadius: 40
      },
      item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC55'
      },
      tabHeading: {
        padding: 20,
        flexDirection: 'row',
      },
      listWrapper: {
        flex: 1,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: .5,
        elevation: 10,
        shadowRadius: 5
      },
      listContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
      },
});

export default styles;