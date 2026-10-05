import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import AppointmentBooking from "./components/AppointmentBooking";
import AppointmentHistory from "./components/AppointmentHistory";
import AppointmentManagement from "./components/AppointmentManagement";
import Footer from "./components/Footer";
import bivinImage from "./assets/bivin.png";
import priyaImage from "./assets/priya.png";
import mansoorImage from "./assets/mansoor.png";
import meenaImage from "./assets/meena.png";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");
  const [availability, setAvailability] = useState("All");
  const [fee, setFee] = useState("All");
  const [rating, setRating] = useState("All");

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [bookingStatus, setBookingStatus] = useState("");

  const doctors = [
    {
      id: 1,
      name: "Dr. Arun Kumar",
      specialty: "Cardiologist",
      experience: 10,
      rating: 4.8,
      fee: 800,
      available: true,
      image: bivinImage
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Dermatologist",
      experience: 7,
      rating: 4.6,
      fee: 600,
      available: true,
      image: priyaImage
    },
    {
      id: 3,
      name: "Dr. Ravi Kumar",
      specialty: "Neurologist",
      experience: 12,
      rating: 4.9,
      fee: 1000,
      available: false,
      image: mansoorImage
    },
    {
      id: 4,
      name: "Dr. Meena Raj",
      specialty: "Pediatrician",
      experience: 8,
      rating: 4.5,
      fee: 500,
      available: true,
      image: meenaImage
    }
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const searchMatch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(search.toLowerCase());

    const specialtyMatch =
      specialty === "All" || doctor.specialty === specialty;

    const availabilityMatch =
      availability === "All" ||
      (availability === "Available" && doctor.available) ||
      (availability === "Unavailable" && !doctor.available);

    const feeMatch =
      fee === "All" ||
      (fee === "Below 600" && doctor.fee < 600) ||
      (fee === "600-800" && doctor.fee >= 600 && doctor.fee <= 800) ||
      (fee === "Above 800" && doctor.fee > 800);

    const ratingMatch =
      rating === "All" || doctor.rating >= Number(rating);

    return (
      searchMatch &&
      specialtyMatch &&
      availabilityMatch &&
      feeMatch &&
      ratingMatch
    );
  });

  const bookAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      status: "Confirmed"
    };

    setAppointments((prev) => [...prev, newAppointment]);
    setBookingStatus("Appointment booked successfully!");

    setTimeout(() => {
      setBookingStatus("");
    }, 3000);
  };

  return (
    <>
      <Header />

      <main>
        <section className="home">
          <h2>Doctor Search & Appointment Booking</h2>
          <p>Search doctors and book your preferred appointment.</p>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </section>

        <FilterPanel
          specialty={specialty}
          setSpecialty={setSpecialty}
          availability={availability}
          setAvailability={setAvailability}
          fee={fee}
          setFee={setFee}
          rating={rating}
          setRating={setRating}
        />

        <DoctorList
          doctors={filteredDoctors}
          onSelect={setSelectedDoctor}
        />

        <DoctorProfile
          doctor={selectedDoctor}
        />

        <AppointmentBooking
          doctor={selectedDoctor}
          bookAppointment={bookAppointment}
        />

        {bookingStatus && (
          <p className="success">{bookingStatus}</p>
        )}

        <AppointmentHistory
          appointments={appointments}
        />

        <AppointmentManagement
          appointments={appointments}
          setAppointments={setAppointments}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;