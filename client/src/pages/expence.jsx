import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/global.css";

export default function Expence() {
  const [user, setUser] = useState({
    category: "",
    amount: "",
    comment: "",
    date: "",
    time: "",
  });

  const submitdata = async () => {
    const newUser = {
      ...user,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    
    try {
      const response = await fetch("http://localhost:3000/api/expence", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Expense Added Successfully");
        setUser({
          category: "",
          amount: "",
          comment: "",
          date: "",
          time: "",
        });
        window.location.href = "/expence";
      } else {
        console.error("Failed to add expense");
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitdata();
  };

  return (
    <>
      <Header />
      <main className="signup-body">
        <div className="signup-container">
          <h1 className="signup-title">Add New Expense</h1>
          <p className="signup-subtitle">Track your expenses easily!</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Category"
              className="signup-input"
              value={user.category}
              onChange={(e) => setUser({ ...user, category: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Amount"
              className="signup-input"
              value={user.amount}
              onChange={(e) => setUser({ ...user, amount: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Comment"
              className="signup-input"
              value={user.comment}
              onChange={(e) => setUser({ ...user, comment: e.target.value })}
              required
            />

            <button type="submit" className="signup-btn">
              Add Expense
            </button>
          </form>
        </div>
      </main>
      <div style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}><Footer /></div>
      
    </>
  );
}