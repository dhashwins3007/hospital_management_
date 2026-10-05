import { useState } from "react";

function AppointmentBooking({ doctor, bookAppointment }) {
  const [patient, setPatient] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patient || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    bookAppointment({
      doctor: doctor.name,
      patient,
      date,
      time
    });

    setPatient("");
    setDate("");
    setTime("");
  };

  if (!doctor) {
    return (
      <p className="message">
        Select an available doctor before booking.
      </p>
    );
  }

  return (
    <div className="booking">
      <h2>Book Appointment</h2>

      <p>
        Doctor: <b>{doctor.name}</b>
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patient}
          onChange={(e) => setPatient(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="">Select Time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="04:00 PM">04:00 PM</option>
        </select>

        <button type="submit">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentBooking;