export default function Footer() {
  return (
    <>
      <footer className = "footerbody">
        <div className="footer">

        <div>
          <h1>Expence_Tracker</h1>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <p>
              <a href="https://github.com/sahil-1707" target="_blank">
                Github
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/sahil-kumar-1707/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>

            <p>Email : shivkrianchitkulwar123@gmail.com</p>
            <p>Phone no. : +91 9921316791</p>
          </p>
        </div>
        </div>
        <div className="footer-bottom" style={{ borderTop: '1px solid #ccc', marginTop: '20px', paddingTop: '10px', textAlign: 'center' }}>
        <p>© 2024 Expense Tracker. All Rights Reserved.</p>
      </div>
      

      </footer>
      
    </>
  );
}
