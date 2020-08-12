import React from "react";
import img from '../images/remote-work-woman.svg';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const style = makeStyles({
  button: {
    backgroundColor: "#E24E42",
    color: "white",
    boxShadow: 'none',
    marginTop: '32px',
    width: "50%",
    height: "48px",
    fontWeight: "lighter",
    fontSize: "18px",
    textTransform: "none",
  },
});


export default function Welcome(props) {
  const classes = style();

  return (
    <div className="centered">
      <p className="title">Proxy</p>
      <img width="40%" alt="woman-walking" src={img} />
      <br />
      <Button
        onClick={() => props.setPage("login")}
        variant="contained"
        className={classes.button}
      >
        Get started!
      </Button>
    </div>
  );
}
