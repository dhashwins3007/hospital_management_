function DoctorProfile({ doctor }) {
  if (!doctor) {
    return (
      <p className="message">
        Select a doctor to view profile.
      </p>
    );
  }

  return (
    <div className="profile">
      <div className="doctor-profile-content">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-profile-image"
        />

        <div className="doctor-details">
          <h2>Doctor Profile</h2>

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
            <b>Availability:</b>{" "}
            {doctor.available ? "Available" : "Unavailable"}
          </p>

          <p>
            <b>Consultation:</b> Online & In-person
          </p>
        </div>

      </div>
    </div>
  );
}

export default DoctorProfile;