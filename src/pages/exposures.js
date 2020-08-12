import React, { useState, useEffect } from "react";
import "../App.css";
import arrow from "../images/left-arrow.svg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const style = makeStyles({
  paper: {
    margin: "24px",
    paddingLeft: "8px",
    textAlign: "left",
  },
  button: {
    backgroundColor: "#E24E42",
    color: "white",
    boxShadow: "none",
    width: "50%",
    height: "48px",
    fontWeight: "lighter",
    fontSize: "18px",
    textTransform: "none",
  },
});

export default function Exposures(props) {
  const classes = style();
  const [data, setData] = useState();

  useEffect(() => {
    // fetch JSON data from backend and store it into "data"
    fetch("http://localhost:5000/api_get")
      .then((response) => response.json())
      .then((data) => {
        setData({ data });
      });
  }, []);

  const people = () => {
    let arr = [];
    console.log("# Extracting dates that are set to true")
    if (data) {
      for (let i in props.exposures) {
        for (let j in props.exposures[i]) {
          if (props.exposures[i][j] === true) {
            for (let k in data.data[i][j]) {
              console.log("Name =", k, ", Time =", data.data[i][j][k]);
              arr.push(
                <Paper
                  className={classes.paper}
                  variant="outlined"
                  elevation={3}
                >
                  <h4> {i}</h4>
                  <p>
                    {k} - {data.data[i][j][k]}
                  </p>
                </Paper>
              );
            }
          }
        }
      }
    }
    console.log(arr)
    return arr
  }

  return (
    <div>
      <div style={{ display: "flex" }} className="leftmargin">
        <img
          className="arrow"
          alt="back-arrow"
          onClick={() => props.setPage("welcome")}
          src={arrow}
        />
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your exposures </p>
      </div>
      <div className="centered">
        {people()}
        <Button
          onClick={() => props.setPage("addLocations")}
          className={classes.button}
        >
          Add location
        </Button>
      </div>
    </div>
  );
}
