import { StyleSheet } from "react-native";
import colors from "../../config/colors";

// Style sheet for EditSettings

const styles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 170,
    width: 170,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    borderWidth: 2,
    overflow: "hidden",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalViewOne: {
    height: 600,
    width: 350,
    backgroundColor: "white",
    padding: 60,
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 10,
  },
  modalViewTwo: {
    height: 300,
    width: 350,
    backgroundColor: "white",
    padding: 60,
    borderRadius: 15,
    shadowColor: "#000",
    elevation: 10,
  },
  EthnicCenterView: {
    flex: 1,
    alignItems: "center",
    marginTop: 50, // Adjust this value based on your layout requirements
  },
  ethnicityModal: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    maxHeight: 300, // Adjust the max height as needed
  },
  modalOverhead: {
    width: 350,
    height: 55,
    justifyContent: "center",
    backgroundColor: colors.primary,
    position: "absolute",
  },
  modalOverheadEthnicities: {
    width: "100%", // Span the entire width
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Adjust this value to perfectly position the overhead on top of the modal
  },
  textOptions: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
  },
  updateButton: {
    alignItems: "center",
    top: 25,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.primary,
  },
  cancelButton: {
    alignItems: "center",
    top: 25,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
  },
  updateAndCancel: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: -25,
    marginTop: 10,
  },
  deleteButton: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    bottom: 1,
    justifyContent: "center",
    top: 200,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  ethnicityItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  ethnicityText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#3498DB",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  saveButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default styles;
