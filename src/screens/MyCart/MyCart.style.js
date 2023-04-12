import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
const width = Dimensions.get("window").width;
const height = Dimensions.get("screen").height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe713",
  },
  innerContainer: {
    paddingTop: "2%",
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.67,
    shadowRadius: 15.19,
    elevation: 60,
  },
  header: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    paddingTop: "10%",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
    paddingBottom: "2.2%",
  },
  headerh1: {
    paddingTop: 50,
    marginHorizontal: 23,
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },
  headerh2: {
    paddingLeft: 20,
    fontSize: 20,
    fontFamily: "Poppins_600SemiBold",
    paddingBottom: 30,
  },
  backStyle: {
    paddingTop: "8%",
    paddingLeft: "6%",
    position: "relative",
  },
  contant: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 20,
  },
  textStyle: {
    color: "grey",
    padding: 25,
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  gridStyle: {
    flexDirection: "column",
    borderWidth: 1.5,
    borderColor: "#E4E9F3",
    borderRadius: 6,
    height: 130,
    width: "28%",
    alignItems: "center",
    margin: 10,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonOpacity: {
    margin: 10,
    width: "95%",
    height: 60,
    borderWidth: 1.5,
    borderColor: "#E4E9F3",
    flexDirection: "row",
    alignItems: "center",
  },
  gridText: {
    paddingTop: 10,
    fontSize: 10,
    fontFamily: "Poppins_600SemiBold",
    color: "black",
  },
  ListText: {
    fontSize: 15,
    paddingLeft: "10%",
    fontFamily: "Poppins_600SemiBold",
    color: "black",
  },
  ListImg: {
    margin: 25,
  },
  gridImg: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: 46,
    width: 46,
    resizeMode:'contain'
  },
  mainGrid: {
    flexDirection: "column",
    flex: 1,
    marginTop: 25,
  },
  gridView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    //justifyContent:"space-around"
  },
  gridInnerView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    //justifyContent:"space-around"
  },
  gridStyleRow: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
  },
  HTrecycleImg: {
    width: 46,
    height: 46,
    resizeMode:'contain'
  },
  rewardImg: {
    width: 46,
    height: 46,
    resizeMode:'contain'
  },
  historyImg: {
    width: 46,
    height: 46,
    resizeMode:'contain'
  },
  RecycleOrderImg: {
    width: 38.16,
    height: 46,
  },
  ListStyleView: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  RecycleListImg: {
    width: 29,
    height: 27,
    marginLeft: "10%",
  },
  HTrecycleImgList: {
    width: 29,
    height: 27,
    marginLeft: "10%",
  },
  RewardListImg: {
    width: 29,
    height: 33,
    marginLeft: "10%",
  },
  HistorylistImg: {
    width: 29,
    height: 29,
    marginLeft: "10%",
  },
  RecycleOrderListImg: {
    width: 27.58,
    height: 33.25,
    marginLeft: "10%",
  },
  indicatorContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
  },
  ToggleImg: {
    width: 22,
    height: 22,
  },
  ToggleView: {
    flexDirection: "row",
    marginHorizontal: "4.5%",
    justifyContent: "flex-end",
    marginTop: "4%",
  },

  contentContainer: {
    height: height * 0.95,
  },
  modalRedeem: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 3,
  },
  popStyle: {
    width: 500,
    height: 500,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalstyle: {
    backgroundColor: "white",
    width: 350,
    height: height * 0.85,
  },
  alignCenter: {
    alignItems: "center",
    marginTop: 23,
  },
  starImg: {
    width: 133.56,
    height: 170.98,
    marginBottom: 23,
  },
  redeemPoints: {
    marginTop: 60,
    marginBottom: 17,
    marginHorizontal: 18,
    fontSize: 24,
    alignSelf: "center",
    fontFamily: "Poppins_600SemiBold",
    color: "#51AB1D",
  },
  desc: {
    paddingHorizontal: 33,
    fontSize: 12,
    alignSelf: "center",
    color: "#6E6E6E",
    fontFamily: "Poppins_400Regular",
    marginLeft: 10,
  },
  descLine: {
    fontSize: 12,
    color: "#6E6E6E",
    fontFamily: "Poppins_400Regular",
    marginHorizontal: 60,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  goBack: {
    backgroundColor: "#FFE713",
    width: 135,
    height: 40,
    borderRadius: 5,
    marginLeft: 6,
  },
  GobackText: {
    marginTop: 8,
    alignSelf: "center",
    fontSize: 17,
    color: "#1D1D1D",
    fontFamily: "Poppins_500Medium",
  },
  continue: {
    marginVertical: 23,
    backgroundColor: "#51AB1D",
    width: 135,
    height: 40,

    borderRadius: 5,
  },
  continueText: {
    marginTop: 8,
    alignSelf: "center",
    fontSize: 17,
    color: "#FFFFFF",
    fontFamily: "Poppins_500Medium",
  },
  mainClaim: {
    flex: 1,
  },
  innerClaim: {
    marginTop: "80%",
    marginLeft: "13%",
    height: 55,
    width: 286,
    backgroundColor: "white",
    borderWidth: 0.2,
    borderColor: "#707070",
  },
  innerDonate: {
    marginTop: "101%",
    marginLeft: "13%",
    height: 55,
    width: 286,
    backgroundColor: "white",
    borderWidth: 0.2,
    borderColor: "#707070",
  },
  claimText: {
    top: 10,
    textAlign: "center",
    alignSelf: "center",
    color: "#6E6E6E",
    fontSize: 10,
    fontFamily: "Poppins_400Regular",
  },
  modal_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_modal: {
    width: "90%",
    height: 200,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#707070",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },
});
