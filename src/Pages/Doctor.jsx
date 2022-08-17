import React from "react";
import Appointment from "../Components/Appointment/Appointment";
import AppointmentExtra from "../Components/Appointment/AppointmentExtra";
import Doctorall from "../Components/Doctors/Doctorall";

const Doctor = () => {
  return (
    <>
      <Doctorall />
      <Appointment/>
      <AppointmentExtra/>
    </>
  );
};

export default Doctor;
