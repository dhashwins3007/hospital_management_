function DoctorCard({ doctor, onSelect }) {
  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>

      <p>
        <b>Specialty:</b> {doctor.specialty}
      </p>

      <p>
        <b>Experience:</b> {doctor.experience} years
      </p>

      <p>
        <b>Rating:</b> ⭐ {doctor.rating}
      </p>

      <p>
        <b>Consultation Fee:</b> ₹{doctor.fee}
      </p>

      <p>
        <b>Status:</b>{" "}
        {doctor.available ? "Available" : "Unavailable"}
      </p>

      {doctor.available ? (
        <button onClick={() => onSelect(doctor)}>
          Book Appointment
        </button>
      ) : (
        <button disabled>
          Not Available
        </button>
      )}
    </div>
  );
}

export default DoctorCard;