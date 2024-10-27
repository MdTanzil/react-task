/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";

const DoneGrid = ({ data }) => {
  const [isAscending, setIsAscending] = useState(true);
  const toggleSortOrder = () => {
    setIsAscending(!isAscending);
  };
  let sortedData = null;
  // Sort data based on dueDate
  try {
    sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
  } catch (error) {
    sortedData = [];
  }
  return (
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-teal-500 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Done ({sortedData?.length || 0})
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ cursor: "pointer" }}
            onClick={toggleSortOrder}
            className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l9 0" />
            <path d="M4 12l7 0" />
            <path d="M4 18l7 0" />
            <path d="M15 15l3 3l3 -3" />
            <path d="M18 6l0 12" />
          </svg>
        </div>

        <div>
          {sortedData?.length > 0 ? (
            sortedData.map((data) => <Card key={data.id} data={data} />)
          ) : (
            <p> Task List is empty!</p>
          )}
        </div>

        {/* <!-- Add more task cards here --> */}
      </div>
    </div>
  );
};

export default DoneGrid;
