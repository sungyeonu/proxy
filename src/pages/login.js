import React from "react";
import img from "../images/mask-woman.svg";
import arrow from "../images/left-arrow.svg"
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../App.css";

const style = makeStyles({
  button: {
    backgroundColor: "#E24E42",
    color: "white",
    boxShadow: "none",
    marginTop: "32px",
    width: "50%",
    height: "48px",
    fontWeight: "lighter",
    fontSize: "18px",
    textTransform: "none",
    textAlign: "center",
  },

  textfield: {
    marginTop: "8px",
    marginBottom: "8px",
  },
});

export default function Login(props) {
  const classes = style();

  return (
    <div>
      <div className="leftmargin">
        <div style={{ display: "flex" }}>
          <img
            className="arrow"
            alt="back-arrow"
            onClick={() => props.setPage("welcome")}
            src={arrow}
          />
          <p>&nbsp;</p>
        </div>
        <h1>Log in</h1>
        <form onSubmit={() => props.setPage("scouting")}>
          <TextField
            className={classes.textfield}
            onChange={e => props.setName(e.target.value)}
            id="standard-basic"
            label="Name"
            required
          />
          <br/>
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Log in!
          </Button>
        </form>
      </div>
      <br />
      <br />
      <div className="centered">
        <img width="40%" alt="woman-walking" src={img} />
      </div>
    </div>
  );
}
