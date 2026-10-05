function AppointmentHistory({ appointments }) {
  return (
    <section id="appointments">
      <h2>Appointment History</h2>

      {appointments.length === 0 ? (
        <p className="message">
          No appointments available.
        </p>
      ) : (
        appointments.map((appointment, index) => (
          <div className="appointment" key={index}>
            <p>
              <b>Patient:</b> {appointment.patient}
            </p>

            <p>
              <b>Doctor:</b> {appointment.doctor}
            </p>

            <p>
              <b>Date:</b> {appointment.date}
            </p>

            <p>
              <b>Time:</b> {appointment.time}
            </p>
          </div>
        ))
      )}
    </section>
  );
}

export default AppointmentHistory;