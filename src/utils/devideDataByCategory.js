// Function to divide tasks by category
const divideDataByCategory = (tasks) => {
  return tasks.reduce((acc, task) => {
    const { category } = task;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(task);
    return acc;
  }, {});
};

export { divideDataByCategory };
