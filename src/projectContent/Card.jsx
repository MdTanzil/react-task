/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../context";
const Card = ({ data }) => {
  const {
    setShowAddTask,
    setEditingTask,
    setData,
    data: mainData,
  } = useContext(DataContext);
  const handleEditTask = () => {
    setEditingTask(data);
    setShowAddTask(true);
  };
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      const updatedData = mainData.filter((item) => item.id !== id);
      setData(updatedData);
    }
  };
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <div className="flex justify-between">
        <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
          {data?.taskName}
        </h4>

        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 cursor-pointer text-zinc-300"
            onClick={() => handleDelete(data.id)}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>

          <svg
            className="h-4 w-4 cursor-pointer text-zinc-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleEditTask()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </div>
      </div>
      <p className="mb-2 text-sm text-zinc-200">{data?.description}</p>

      <p className="mt-6 text-xs text-zinc-400"> {data?.dueDate}</p>
    </div>
  );
};

export default Card;
