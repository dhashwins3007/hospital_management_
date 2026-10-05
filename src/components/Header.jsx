import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="logo-section">
        <img src={logo} alt="ABCD Hospital Logo" />
        <h1>ABCD Hospital</h1>
      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#doctors">Doctors</a>
        <a href="#appointments">Appointments</a>
      </nav>
    </header>
  );
}

export default Header;