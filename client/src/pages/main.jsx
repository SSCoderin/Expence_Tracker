import "../styles/global.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { useAuth } from "../../storage/auth";
import { useEffect, useState } from "react";

export default function Main() {
  const [expensedata, setExpensedata] = useState([]);
  const { isloggedin } = useAuth();

  useEffect(() => {
    getalldata();
  }, []);

  const handledelete = (val) =>{
    console.log(val);

  }

  const getalldata = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setExpensedata(data.data);
        console.log("this is my data", data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      {isloggedin ? (
        <>
          <h1> here is your daily expance </h1>

          <div style={{ padding: "20px" }}>
            {expensedata && expensedata.map((expense, index) => 
            <div key ={index}
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "15px",
                border: "2px solid #1a1a1a",
                borderRadius: "12px",
                marginBottom: "20px",
                backgroundColor: "#f8f9fa",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                }}>
                    <div>
                        <h3 style={{ color: "#1a1a1a", marginBottom: "10px" }}>category: {expense.category}</h3>
                        <p style={{ color: "#0056b3", fontSize: "1.1rem" }}>amount: {expense.amount}</p>
                        <p style={{ color: "#1a1a1a" }}>date: {expense.date}</p>
                        <p style={{ color: "#1a1a1a" }}>time: {expense.time}</p>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                        <button style={{
                            backgroundColor: "#0056b3",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            marginBottom: "10px",
                            transition: "background-color 0.3s"
                        }}>edit</button>
                        <button
                        onClick={() => handledelete(expense._id)}
                         style={{                            
                            backgroundColor: "#0056b3",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                            borderRadius: "6px",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                        }}>delete</button>
                    </div>
                </div>
                <hr style={{ border: "1px solid #dee2e6", margin: "15px 0" }} />
                <div style={{
                    paddingTop: "10px",
                }}>
                    <p style={{ color: "#1a1a1a" }}>comment: {expense.comment}</p>
                </div>
            </div>
        )}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
              width: "100%",
            }}
          >
            <h1>Welcome to the Expence Tracker</h1>
            <p>Track your expenses and manage your finances with ease.</p>
            <button
              onClick={() => {
                window.location.href = "/signup";
              }}
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px 30px",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            >
              get started
            </button>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
