import React, { useActionState, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask } from "../ReduxConfig/Slice";
const AddTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.globalData.users);
    const dispatch=useDispatch();
  useEffect(() => {
    const findUser = users.find((u) => u.id === parseInt(id));

    if (!findUser) {
      navigate("/users");
    } 
  }, [id, users, navigate]);
  const handleAddTask=async(previousData,currentFormData)=>{
    let {title,status}=Object.fromEntries(currentFormData);
    const errors=[];
    title=title.trim();
    status=status.trim();
    await new Promise((resolve)=>setTimeout(resolve,1500));
    if(!title){
        errors.push("Title field is Required!");
    }
    if(!status){
        errors.push("Status field is Required!");
    }
    if(errors.length >0){
        console.log({...previousData,error: errors.join(',')})
        return {...previousData,error: errors.join(',')}
    }    
    console.log({title,status,error:null,success: "Task added succesfully!"})
    dispatch(addTask({userId:id,title,status}));
    navigate(`/users/${id}`)

  }
  const [state,actionFunction,isPending]=useActionState(handleAddTask,{
    title:"",
    status:"",
    error:null,
    success:null
  })
  return (
<div className="flex justify-center items-center w-full h-screen">
      <form
        action={actionFunction}
        className="w-96 -mt-20 py-10 bg-white rounded shadow-lg flex flex-col justify-center items-center"
      >
        <h1 className="text-2xl font-bold text-center">Add Task</h1>

        
        {isPending && (
          <p className="text-md text-blue-600 text-center">
            Checking Data...
          </p>
        )}
        {state.success && <p className="text-md text-green-600 text-center">{state.success}</p>}



        <div className="flex flex-col w-[75%] space-y-2">
          <label htmlFor="title">
            <strong>Title:</strong>
          </label>
          <input
            type="text"
            id="title"
            className={`bg-white w-full py-1 px-2 rounded outline ${
              state.error &&
              (state.error.includes("Title field is Required!"))
                ? "outline-red-600"
                : "outline-black"
            }`}
            placeholder="Enter title..."
            name="title"
          />

        {state.error?.includes("Title field is Required!") && (
            <p className="text-red-500 text-sm">Username field is Required!</p>
          )}




          {/* Level */}
          <label htmlFor="status">
            <strong>Status</strong>
          </label>
          <select
            name="status"
            id="status"
            className={`bg-white w-full py-1 px-2 rounded outline ${
              state.error &&
              (state.error.includes("Status field is Required!"))
                ? "outline-red-600"
                : "outline-black"
            }`}
          >
            <option value="">Select Status:</option>
            <option value="penging">Pending</option>
            <option value="in-progress">In-progress</option>
            <option value="completed">Completed</option>
          </select>
        {state.error?.includes("Status field is Required!") && (
            <p className="text-red-500 text-sm">Username field is Required!</p>
          )}
          
          <button
            className="w-full mt-4 rounded bg-indigo-600 text-white font-semibold text-lg py-1 cursor-pointer"
            disabled={isPending}
          >
            {isPending? 'Checking ...':'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
