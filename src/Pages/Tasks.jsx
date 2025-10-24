import { useEffect, useState, useTransition } from "react";
import { useSelector } from "react-redux";
import TaskTableDesign from "../Components/TaskTableDesign";

const Tasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isPending, startTransition] = useTransition();
  const allusers = useSelector((state) => state.globalData.users);

  useEffect(() => {
    const flatTasks = allusers.flatMap((user) => user.tasks);
    setAllTasks(flatTasks);
    setTasks(flatTasks);
  }, [allusers]);

  const handleFilterInput = (e) => {
    startTransition(() => {
      const query = e.target.value.toLowerCase();
      if (query === "") {
        setTasks(allTasks);
      } else {
        const filtered = allTasks.filter((task) =>
          task.title.toLowerCase().includes(query)
        );
        setTasks(filtered);
      }
    });
  };

  const FilterStatusChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setTasks(allTasks);
    } else {
      const filtered = allTasks.filter((task) => task.status === value);
      setTasks(filtered);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-5">Tasks List</h1>
      <div className="flex justify-around mb-10">
        <input
          type="search"
          placeholder="Search for a task..."
          onChange={handleFilterInput}
          className="bg-white px-2 border rounded w-[27%]"
        />
        <select
          name="sortType"
          id="sortType"
          className="border px-2 py-1 rounded"
          onChange={FilterStatusChange}
        >
          <option value="">Sort By</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In-progress</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {isPending ? (
        <h2 className="text-center text-2xl font-bold">Loading...</h2>
      ) : tasks.length === 0 ? (
        <h2 className="text-center text-xl font-semibold text-gray-500">
          No tasks found.
        </h2>
      ) : (
        <TaskTableDesign tasks={tasks} />
      )}
    </div>
  );
};

export default Tasks;
