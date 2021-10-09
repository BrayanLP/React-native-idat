const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col">
          <h1><strong>Hello</strong>, Brayan LP</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div className="row">
              <div className="col">
                <div className="card">BALANCE</div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="card">ANALYTICS</div>
                </div>
                <div className="col-2">
                  <div className="card">+30,000</div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="card">SAFATY</div>
                </div>
                <div className="col-2">
                  <div className="card">STATS</div>
                </div>
              </div>
            </div>
          </div>
            <div className="col-2">
              <div className="row">
                <div className="col">
                  <div className="card h-100">Profile</div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
