import { useHistory } from "react-router-dom";
import richard from "../assets/richard.jpeg";



const Navbar = () => {
  const history = useHistory();

  return (
    <div style={{margin: 0}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary py-0">
        <div className="container-fluid py-2 " style={{backgroundColor:"#046582"}}>
          <img src= {richard} alt="richard watterson" className="bg-light border border-light border-3 rounded-circle " style={{width:"50px"}}/>
          <a className="navbar-brand text-center fs-3 text-white" href="/main" onClick={() => history.push("/main")}>
            {`──── <ChrisDev/> ────`}
          </a>
          <div className="buttons">
            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => history.push("/login")}
            >
              Sign In
            </button>

            <button
              type="button"
              className="ms-2 btn btn-outline-light"
              onClick={() => history.push("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
