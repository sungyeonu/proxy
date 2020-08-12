import React, { useState, useEffect } from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import arrow from "../images/left-arrow.svg";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: "88px",
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
}));

export default function Scouting(props) {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    // fetch JSON data from backend and store it into "data"
    fetch("http://localhost:5000/api_get")
      .then((response) => response.json())
      .then((data) => {
        setData({data})
      }
      );
  }, []);

  const handleChange = (loc, e) => {
    let newArr = props.exposures;
    newArr[loc][e.target.name] = e.target.checked;
    props.setExposures(newArr);
    console.log(props.exposures);
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
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scouting for exposures... </p>
      </div>
      <div className="leftmargin">
        <h3>Select all locations you have been to</h3>
      </div>
      <div className="centered">
        {data &&
          Object.keys(data.data).map((item, key) => {
            return (
              <Paper className={classes.paper} variant="outlined" elevation={2}>
                <p> { item } </p>
                {/* <form onSubmit={console.log()}> */}
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(item, e)}
                        name="8/11"
                      />
                    }
                    label="8/11"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(item, e)}
                        name="8/12"
                      />
                    }
                    label="8/12"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(item, e)}
                        name="8/13"
                      />
                    }
                    label="8/13"
                  />
                {/* </form> */}
              </Paper>
            );
          })}
        <Button
          onClick={() => props.setPage("exposures")}
          type="submit"
          variant="contained"
          className={classes.button}
        >
          Submit!
        </Button>
      </div>
    </div>
  );
}
