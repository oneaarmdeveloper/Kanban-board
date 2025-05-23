// Ensure SortableJS library is loaded before this script runs
// (It's included in the HTML via CDN)

const projectColumnSuffixes = [
  '--backlog', '--planning', '--inprogress', '--done'
];

projectColumnSuffixes.forEach((suffix) => {
  const columnId = `projects${suffix}`; // Correctly forms e.g., "projects--backlog"
  const columnElement = document.getElementById(columnId);

  if (columnElement) {
    new Sortable(columnElement, {
      group: 'shared',
      animation: 150,
      fallbackOnBody: true,
      chosenClass: 'project--chosen', // Class for the item being dragged
      dragClass: 'project-drag',     // Class for the ghost/clone item
      // onEnd: function (evt) {
      //   console.log(`Moved project from ${evt.from.id} to ${evt.to.id}`);
      //   // TODO: Add logic here to save the new state (e.g., to localStorage or backend)
      // }
    });
  } else {
    console.warn(`Element with ID "${columnId}" not found.`);
  }
});

// Optional: Add event listeners for "New Task" buttons
document.querySelectorAll('.new-project').forEach(button => {
  button.addEventListener('click', () => {
    const column = button.closest('.column');
    const projectsContainerId = column.querySelector('.projects').id;
    // Example: Log which column the new task should be added to
    console.log(`Add new task to: ${projectsContainerId}`);
    // TODO: Implement logic to show a modal or form to create a new task
    // and then append it to the 'projectsContainerId' element.
  });
});