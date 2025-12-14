import {useEffect, useState} from 'react'
import { Link } from 'react-router';

const UserList = () => {
    const API = "https://jsonplaceholder.typicode.com/users";

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                setIsError("");
                
                const response = await fetch(API);
                const data = await response.json();
                // console.log(data);
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
                setIsError("Failed to fetch users.")

            } finally{
                setIsLoading(false);
            }
        };

        fetchUsers()
    }, []);
    if (isLoading) {
        return <p>loading...</p>;
    }
    if (isError){
        return <p>{isError}</p>;
    }

  return (
    <div>
    {users.length === 0 ? (
        <p>br me data</p>
    ):(
        users.map((user) => (
           <Link 
           to={`/users/${user.id}`}
           style={{
            margin: "20px 0",
            border: "1px solid black",
            padding: "10px",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
            width: "100%",
            display: "block",
           }

           }>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
           </Link>
        ))
    )}
   </div> 
  )
}

export default UserList