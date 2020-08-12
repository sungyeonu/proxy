import React, { useState } from "react";
import "../App.css";
import arrow from "../images/left-arrow.svg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const style = makeStyles({
  paper: {
    margin: "24px",
    padding: "24px",
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
  const [location, setLocation] = useState("Rittenhouse Square");
  const [inputName, setInputName] = useState(props.name);
  const [date, setDate] = useState("8/11");
  const [time, setTime] = useState("0:00");

  const handleSubmit = (e) => {
    console.log("submitted")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "location": location,
        "date": date,
        "name": inputName,
        "time": time
      })

      }
      fetch('http://localhost:5000/api_post', requestOptions)

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
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add Locations </p>
      </div>
      <div className="centered">
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setInputName(e.target.value)}
              required
              id="name"
              label="Name"
              defaultValue={props.name}
            />
            <br />
            <br />
            <FormControl required>
              <InputLabel>Location</InputLabel>
              <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value={"Rittenhouse Square"}>
                  Rittenhouse Square
                </MenuItem>
                <MenuItem value={"Drexel Park"}>Drexel Park</MenuItem>
                <MenuItem value={"34th Station"}>34th Station</MenuItem>
                <MenuItem value={"Mario Statue"}>Mario Statue</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl required>
              <InputLabel>Date</InputLabel>
              <Select value={date} onChange={(e) => setDate(e.target.value)}>
                <MenuItem value={"8/11"}>8/11</MenuItem>
                <MenuItem value={"8/12"}>8/12</MenuItem>
                <MenuItem value={"8/13"}>8/13</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              onChange={(e) => setTime(e.target.value)}
              required
              id="time"
              label="Time"
              defaultValue={time}
            />
            <br />
            <br />
            <Button onClick={handleSubmit} className={classes.button}>
              Add location
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
}
