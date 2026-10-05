import DoctorCard from "./DoctorCard";

function DoctorList({ doctors, onSelect }) {
  return (
    <section id="doctors">
      <h2>Available Doctors</h2>

      {doctors.length === 0 ? (
        <p className="message">
          No doctors available for the selected filters.
        </p>
      ) : (
        <div className="doctor-list">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default DoctorList;