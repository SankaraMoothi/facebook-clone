import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { changeUser } from "../Redux/Reducer";

function Login() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(changeUser(result._tokenResponse));
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="text-center">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="fblogo"
          width={500}
          height={500}
          className={"pr-2 pt-5 mb-3"}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div>
        <button className="btn btn-primary mt-5" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
