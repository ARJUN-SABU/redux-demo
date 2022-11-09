import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    // console.log(state.user);
    return state.user;
  });
  useEffect(() => {
    dispatch(fetchUsers("https://jsonplaceholder.typicode.com/users"));
  }, []);

  return (
    <div>
      <h2>Number of users:</h2>
      {users.loading && <p>Loading user data</p>}
      {!users.loading && users.error ? <p>{users.error}</p> : null}
      {!users.loading && users.data.length
        ? users.data.map((user) => <p key={user.id}>{user.name}</p>)
        : null}
    </div>
  );
}

export default UserView;
