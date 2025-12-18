const Dashboard = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <h2>Dashboard</h2>
  ) : (
    <h2>Access Denied</h2>
  );
};

export default Dashboard;
