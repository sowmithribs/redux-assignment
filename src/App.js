import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, remove } from "./redux/addUserSlice";
function App() {
  const [userDetial, setUserDetail] = useState({ id: "", name: "" });
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.users.value);

  const handleChange = (e) => {
    setUserDetail({
      id: new Date().getTime().toString(),
      name: e.target.value,
    });
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (userDetial.name !== "") {
      dispatch(addUser(userDetial));
    }
    console.log(userDetial);
    setUserDetail({
      id: "",
      name: "",
    });
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <div className="name">
          <input
            type="text"
            className="inp-name"
            placeholder="Enter here"
            value={userDetial.name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <button type="submit" className="btn-add">
          Add
        </button>
      </form>
      {allUsers.map((user) => {
        return (
            <div className="det-rem">
              <div className="details">{user.name}</div>
              <button
                className="btm-remove"
                onClick={() => dispatch(remove(user))}
              >
                Remove
              </button>
            </div>
        );
      })}
    </>
  );
}

export default App;
