function FilterPanel({
  specialty,
  setSpecialty,
  availability,
  setAvailability,
  fee,
  setFee,
  rating,
  setRating
}) {
  return (
    <div className="filters">
      <select
        value={specialty}
        onChange={(e) => setSpecialty(e.target.value)}
      >
        <option value="All">All Specialties</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Cardiac Electrophysiologist">
          Cardiac Electrophysiologist
        </option>
        <option value="Orthopaedics">Orthopaedics</option>
      </select>

      <select
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
      >
        <option value="All">All Availability</option>
        <option value="Available">Available</option>
        <option value="Unavailable">Unavailable</option>
      </select>

      <select
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      >
        <option value="All">All Consultation Fees</option>
        <option value="Below 600">Below ₹600</option>
        <option value="600-800">₹600 - ₹800</option>
        <option value="Above 800">Above ₹800</option>
      </select>

      <select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      >
        <option value="All">All Ratings</option>
        <option value="4">4+ Rating</option>
        <option value="4.5">4.5+ Rating</option>
        <option value="4.8">4.8+ Rating</option>
      </select>
    </div>
  );
}

export default FilterPanel;