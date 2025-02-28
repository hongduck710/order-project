import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSlice} from "../store/slice/userSlice";

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector((state) => state.userList);

    useEffect(() => {
        dispatch(userSlice());
    }, [dispatch]);

    useEffect(() => {
        setUserData(users);
    }, [users]);

    if(loading) {return <div>불러오는 중....</div>}

    return (
        <>
            <table>
                <tbody>
                    {userData?.map((user) => (
                        <tr key={user.id}> 
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );    
}

export default UserList;