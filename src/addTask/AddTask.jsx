/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";

const AddTask = ({ setShowAddTask }) => {
  const { data, setData, editingTask } = useContext(DataContext);
  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    category: "todo",
  });

  // Populate form data if editing an existing task
  useEffect(() => {
    if (editingTask) {
      setFormData({
        id: editingTask.id,
        taskName: editingTask.taskName,
        description: editingTask.description,
        dueDate: editingTask.dueDate,
        category: editingTask.category,
      });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSaveData = (task) => {
    if (task.id) {
      // Check if the task ID exists in the current data (editing scenario)
      const updatedData = data.map((item) =>
        item.id === task.id ? task : item
      );
      setData(updatedData);
    } else {
      // Add new task scenario
      task.id = Date.now();
      setData([...data, task]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data Submitted:", formData);
    if (!formData.taskName || !formData.description || !formData.dueDate) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Call the handleSaveData function with formData
    handleSaveData(formData);

    setFormData({
      id: null,
      taskName: "",
      description: "",
      dueDate: "",
      category: "todo",
    });

    // Close the modal
    setShowAddTask(false);
  };

  return (
    <div className="w-full mx-auto max-w-screen-md rounded-lg bg-gray-800 shadow-xl absolute">
      <div className="p-6">
        <h2 className="mb-6 text-2xl font-bold text-green-400">
          {editingTask ? "Edit Task" : "Create Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="taskName"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Task Name
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              required
              value={formData.taskName}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-medium text-gray-300"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="todo">To-Do</option>
              <option value="inprogress">On Progress</option>
              <option value="done">Done</option>
              <option value="revised">Revised</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={() => setShowAddTask(false)}
              type="button"
              className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              {editingTask ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
