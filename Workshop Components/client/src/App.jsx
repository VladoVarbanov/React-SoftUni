import * as userService from "./services/userService.js";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Search from "./components/Search.jsx";
import "./App.css";
import UserList from "./components/UserList.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then(setUsers)
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />

          <UserList users={users} />

          <button className="btn-add btn">Add new user</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
