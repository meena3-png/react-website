import {useState, useEffect} from 'react'
import { useParams } from 'react-router'

const UsersDetail = () => {
    const {userId} = useParams();

    const API = "https://jsonplaceholder.typicode.com/users/"  + userId;
    console.log("API URL",API);

    const [userDetail, setUserDetail]= useState([]);
    const [isLoading, setIsLoading]= useState((false));
    const [isError, setIsError]= useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                setIsError("");
                
                const response = await fetch(API);
                const data = await response.json();
               
                setUserDetail(data);
            } catch (error) {
                console.error("Error fetching users:", error);
                setIsError("Failed to fetch users.")

            } finally{
                setIsLoading(false);
            }
        };

        fetchUsers()
    }, [API]);
    if (isLoading) {
        return <p>loading...</p>;
    }
    if (isError){
        return <p>{isError}</p>;
    }

  return (
    <div>hi
       <h1>{userDetail.name}</h1>
       <p>Email: {userDetail.email}</p>
       <p>Phone: {userDetail.phone}</p>
       <p>Website: {userDetail.website}</p>
       <p>Company: {userDetail.company?.name}</p>
       <p>
       Address: {userDetail.address?.suite}, {userDetail.address?.street}
       {userDetail.address?.city}, {userDetail.address?.zipcode}
       </p>
    </div>
  )
}

export default UsersDetail