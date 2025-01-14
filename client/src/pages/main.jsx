import "../styles/global.css"
import Header from "../components/header"
import Footer from "../components/footer"
import { useAuth } from "../../storage/auth"
export default function Main(){
    const {isloggedin} = useAuth()  
    return(
        <>
        <Header/>
        {
            isloggedin ? (<>
            <h1> here is your daily expance </h1>
            </>)
            : (
                <>
                <div style={{
                    display:"flex",
                    marginTop:"50px",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center",
                    height:"50vh",
                    width:"100%",
                }}>
                    <h1>Welcome to the Expence Tracker</h1>
                    <p>Track your expenses and manage your finances with ease.</p>
                    <button
                    onClick={()=>{
                        window.location.href = "/signup"
                    }}
                    style={{
                        backgroundColor:"black",
                        color:"white",
                        padding: "10px 30px",
                        borderRadius:"8px",
                        marginTop: "10px"
                    }}>
                        get started
                    </button>
                </div>
                </>
            )
        }
        <Footer/>
        
        </>
    )
}