import { useState } from "react";

function AppointmentManagement({ appointments, setAppointments }) {
  const [editId, setEditId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Cancelled" }
          : appointment
      )
    );
  };

  const startReschedule = (appointment) => {
    setEditId(appointment.id);
    setNewDate(appointment.date);
    setNewTime(appointment.time);
  };

  const saveReschedule = (id) => {
    if (!newDate || !newTime) {
      alert("Please select date and time");
      return;
    }

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              date: newDate,
              time: newTime,
              status: "Rescheduled"
            }
          : appointment
      )
    );

    setEditId(null);
  };

  if (appointments.length === 0) {
    return (
      <section className="management">
        <h2>Appointment Management</h2>
        <p className="message">
          No appointments available.
        </p>
      </section>
    );
  }

  return (
    <section className="management">
      <h2>Appointment Management</h2>

      {appointments.map((appointment) => (
        <div className="appointment" key={appointment.id}>
          <h3>Appointment Summary</h3>

          <p><b>Patient:</b> {appointment.patient}</p>
          <p><b>Phone:</b> {appointment.phone}</p>
          <p><b>Doctor:</b> {appointment.doctor}</p>
          <p><b>Specialty:</b> {appointment.specialty}</p>
          <p><b>Date:</b> {appointment.date}</p>
          <p><b>Time:</b> {appointment.time}</p>
          <p><b>Consultation Fee:</b> ₹{appointment.fee}</p>
          <p><b>Status:</b> {appointment.status}</p>

          {appointment.status !== "Cancelled" && (
            <>
              {editId === appointment.id ? (
                <div className="reschedule-form">
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                  />

                  <select
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                  >
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                  </select>

                  <button
                    onClick={() => saveReschedule(appointment.id)}
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="management-buttons">
                  <button
                    onClick={() => startReschedule(appointment)}
                  >
                    Reschedule
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() =>
                      cancelAppointment(appointment.id)
                    }
                  >
                    Cancel Appointment
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default AppointmentManagement;