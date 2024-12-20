import React from "react";

const AppointmentOption = ({ appointmentCollection, setTreatment }) => {
  const { name, price, slots } = appointmentCollection;
  return (
    <div className="card bg-teal-900 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary bg-emerald-500 text-white"
            onClick={() => setTreatment(appointmentCollection)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
