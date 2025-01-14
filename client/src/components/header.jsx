import "../styles/global.css";
import { useAuth } from "../../storage/auth";

export default function Header() {
  const {isloggedin} = useAuth();
  const movelogin = (page) => {
    if (page === "login") {
      window.location.href = "/login";
    } else if (page === "signup") {
      window.location.href = "/signup";
    }else if (page === "logout") {
      window.location.href = "/logout";
    }else if (page === "expence"){
      window.location.href = "/expence";
    } else {
      window.location.href = "/";
    }
  };
  return (
    <>
      <header className="header">
        <div>
          <h1>Expance_Tracker</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <p onClick={() => movelogin("/")}>Home</p>
          {
            isloggedin?(
              <>
              <p onClick={()=>{movelogin("expence")}}>Add Expence</p>
              <p onClick={() => movelogin("logout")}>Logout</p>
              </>
            ):(
              <>
              <p onClick={() => movelogin("login")}>Login</p>
          <p
            onClick={() => {
              movelogin("signup");
            }}
          >
            Sign Up
          </p>
              </>
            )
          }
          
        </div>
      </header>
    </>
  );
}
