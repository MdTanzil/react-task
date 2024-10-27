import { useContext } from "react";
import AddTask from "../addTask/AddTask";
import { DataContext } from "../context";
import { divideDataByCategory } from "../utils/devideDataByCategory";
import DoneGrid from "./DoneGrid";
import OnProgressGrid from "./OnProgressGrid";
import ReviseGrid from "./ReviseGrid";
import TodoGrid from "./TodoGrid";

const ProjectContent = () => {
  const { data, showAddTask, setShowAddTask, setEditingTask } =
    useContext(DataContext);

  const polishData = divideDataByCategory(data);

  //  click on add new
  const handleAddNew = () => {
    setEditingTask(null);
    setShowAddTask(true);
  };
  return (
    <div className="mx-auto max-w-7xl p-6">
      {showAddTask && <AddTask setShowAddTask={setShowAddTask} />}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => handleAddNew()}
            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
          >
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
              className="mr-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              <path d="M15 12h-6" />
              <path d="M12 9v6" />
            </svg>
            Add
          </button>
        </div>
      </div>

      <div className="-mx-2 mb-6 flex flex-wrap">
        {/* <!-- Todo --> */}
        <TodoGrid data={polishData.todo} />

        {/* <!-- On Progress --> */}
        <OnProgressGrid data={polishData.inprogress} />

        {/* <!-- Done --> */}
        <DoneGrid data={polishData.done} />

        {/* <!-- Revised --> */}
        <ReviseGrid data={polishData.revised} />
      </div>
    </div>
  );
};

export default ProjectContent;
