import SearchBar from "./SearchBar";

function Home({ search, setSearch }) {
  return (
    <section id="home" className="home">
      <h2>Hospital Appointment Booking</h2>

      <p>
        Find doctors and book your appointment easily.
      </p>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />
    </section>
  );
}

export default Home;