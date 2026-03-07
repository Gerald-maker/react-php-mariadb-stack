import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000") // Backend API URL
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users from MariaDB</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map(u => <p key={u.id}>{u.name}</p>)
      )}
    </div>
  );
}

export default App;