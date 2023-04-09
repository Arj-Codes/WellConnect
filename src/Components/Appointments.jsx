import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import tw from "tailwind-styled-components";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableContainer = tw(TableContainer)`
  w-full
  mt-5
`;

const StyledTableCell = tw(TableCell)`
  border-b
  py-4
  px-6
  font-medium
  text-gray-600
`;

const StyledTableRow = tw(TableRow)`
  hover:bg-gray-50
  cursor-pointer
`;

const StyledForm = styled(motion.form)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "2rem",
  backgroundColor: "white",
  borderRadius: "1rem",
  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
});

const AppointmentForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cause, setCause] = useState("");
  const [apps, setApps] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newApp = {
      name: name,
      date: date,
      time: time,
      cause: cause,
    };
    const newApps = [...apps, newApp];
    console.log(newApps);
    setApps(newApps);
  };

  return (
    <div
      className="wrapper flex flex-col items-center h-[100vh] justify-between"
      id="bg"
    >
      <div className="title text-white">
        <h1 className="font-bold text-3xl">Appointments Details</h1>
      </div>
      <div
        className="appointments w-[fit] p-2 bg-[#fefefe] rounded-2xl bg-opacity-40"
        id="carditems"
      >
        <div className="panel flex w-[80vw] justify-around p-2">
          <div className="left flex flex-col w-[50%] items-center gap-3">
            <div className="title">
              <h1 className="font-bold text-3xl bg-[#fefefe] rounded-2xl p-2">
                Schedule appointments!
              </h1>
            </div>
            <div className="schedule">
              <StyledForm
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                id="carditem"
                className="w-[25vw]"
              >
                <TextField
                  label="Patient's Name"
                  variant="outlined"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="Time"
                  variant="outlined"
                  type="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
                <TextField
                  label="Cause of Appointment"
                  variant="outlined"
                  value={cause}
                  onChange={(event) => setCause(event.target.value)}
                  required
                  multiline
                  rows={4}
                />
                <Button variant="contained" color="primary" type="submit">
                  Schedule Appointment
                </Button>
              </StyledForm>
            </div>
          </div>
          <div className="right flex flex-col w-[60%] items-center gap-3">
            <div className="title">
              <h1 className="font-bold text-3xl bg-[#fefefe] rounded-2xl p-2">
                View scheduled appointments!
              </h1>
            </div>
            <div className="list flex flex-col">
              <StyledTableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Name</StyledTableCell>
                      <StyledTableCell align="right">Date</StyledTableCell>
                      <StyledTableCell align="right">Time</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {apps.length > 0 ? (
                    <TableBody>
                      {apps.map((app, index) => (
                        <StyledTableRow key={index}>
                          <StyledTableCell component="th" scope="row">
                            {app.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {app.date}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {app.time}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  ) : (
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell colSpan={3} align="center">
                          No appointments scheduled
                        </StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  )}
                </Table>
              </StyledTableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
