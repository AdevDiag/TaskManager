import React, { useActionState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../ReduxConfig/Slice";

const AddUser = () => {
  const users = useSelector((state) => state.globalData.users);
    const dispatch=useDispatch();
    const navigate=useNavigate();
  const handleAddUser = async (previousData, currentFormData) => {
    // Perform validation
    let { username, email, level } = Object.fromEntries(currentFormData);
    const errors = [];

    username = username.trim();
    email = email.trim();
    level = level.trim();

    const findUser = users.find((user) => user.username === username);

    if (findUser) {
      errors.push("Username Already exists!");
    }
    if (username === "" || !username) {
      errors.push("Username field is Required!");
    }
    if (email === "" || !email) {
      errors.push("Email field is Required!");
    } else if (!email.includes("@")) {
      errors.push("Email is Invalid!");
    }
    if (level === "" || !level) {
      errors.push("Level field is Required!");
    }

    if (errors.length > 0) {
      console.log({ ...previousData, error: errors.join(",") });
      return { ...previousData, error: errors.join(",") };
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    
    dispatch(addUser({username,email,level}));
    return { username,email,level, error: null,success:"User Signed In succesfully!" };
    
  };

  const [state, actionFunction, isPending] = useActionState(handleAddUser, {
    username: "",
    email: "",
    level: "",
    error: null,
    success:null
  });
useEffect(() => {
  if (state.success) {
    const timer = setTimeout(() => {
      navigate("/");
    }, 1500); // wait 1.5s
    return () => clearTimeout(timer); // cleanup if component unmounts
  }
}, [state.success]);


  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form
        action={actionFunction}
        className="w-96 -mt-20 py-10 bg-white rounded shadow-lg flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-bold text-center">Add User</h1>

        {isPending && (
          <p className="text-md text-blue-600 text-center">
            Checking Username...
          </p>
        )}
        {state.success && <p className="text-md text-green-600 text-center">{state.success}</p>}



        <div className="flex flex-col w-[75%] space-y-2">
          {/* Username */}
          <label htmlFor="username">
            <strong>Username:</strong>
          </label>
          <input
            type="text"
            id="username"
            className={`bg-white w-full py-1 px-2 rounded outline ${
              state.error &&
              (state.error.includes("Username Already exists!") ||
                state.error.includes("Username field is Required!"))
                ? "outline-red-600"
                : "outline-black"
            }`}
            placeholder="Enter username ..."
            name="username"
          />
          {state.error?.includes("Username Already exists!") && (
            <p className="text-red-500 text-sm">Username Already exists!</p>
          )}
          {state.error?.includes("Username field is Required!") && (
            <p className="text-red-500 text-sm">Username field is Required!</p>
          )}

          {/* Email */}
          <label htmlFor="email">
            <strong>Email:</strong>
          </label>
          <input
            type="text"
            id="email"
            className={`bg-white w-full py-1 px-2 rounded outline ${
              state.error &&
              (state.error.includes("Email field is Required!") ||
                state.error.includes("Email is Invalid!"))
                ? "outline-red-600"
                : "outline-black"
            }`}
            placeholder="Enter email ..."
            name="email"
          />
          {state.error?.includes("Email field is Required!") && (
            <p className="text-red-500 text-sm">Email field is Required!</p>
          )}
          {state.error?.includes("Email is Invalid!") && (
            <p className="text-red-500 text-sm">Email is Invalid!</p>
          )}

          {/* Level */}
          <label htmlFor="level">
            <strong>Level</strong>
          </label>
          <select
            name="level"
            id="level"
            className={`bg-white w-full py-1 px-2 rounded outline ${
              state.error && state.error.includes("Level field is Required!")
                ? "outline-red-600"
                : "outline-black"
            }`}
          >
            <option value="">Select Level:</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          {state.error?.includes("Level field is Required!") && (
            <p className="text-red-500 text-sm">Level field is Required!</p>
          )}

          <button
            className="w-full mt-4 rounded bg-indigo-600 text-white font-semibold text-lg py-1 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Submitting ..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
