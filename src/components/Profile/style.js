import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainBox: {
    width: "100%",
    margin: "50px 0",
  },
  boxLeft: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  profileImg: {
    width: "300px",
    height: "300px",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  },
  aboutText: {
    width: "70%",
    textAlign: "center",
    margin: "10px 0",
  },
  hexTitle: {
    marginTop: "10px",
    fontSize: "18pt",
    fontWeight: "bold",
    fontFamily: "Raleway",
    color: "#616161",
  },
}));
