# Simple Kanban Board

A lightweight, client-side Kanban board built with HTML, CSS, and vanilla JavaScript, featuring drag-and-drop functionality for task management. This project demonstrates fundamental web development techniques for creating interactive user interfaces.

## Features

*   **Multiple Columns:** Organize tasks into customizable columns (e.g., Backlog, Planning, In Progress, Done).
*   **Draggable Cards:** Easily move task cards between columns or reorder them within a column using drag-and-drop.
*   **Task Representation:** Each card can display a title, description, progress bar, and due dates.
*   **Visual Feedback:** Clear visual cues for selected items and drag operations.
*   **Responsive (Basic):** The layout is designed to be reasonably responsive, though further enhancements can be made.
*   **No Backend Required (for this version):** All data is managed in the browser. Task states are not persisted across sessions by default in this pure client-side version. (See "Future Enhancements" for persistence).

## Demo




## Project Structure

## Getting Started

### Prerequisites

*   A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
*   No other dependencies are required for this basic version.

### Usage

1.  **Clone the repository (optional):**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```
    Or simply download the `index.html`, `style.css`, and `script.js` files.

2.  **Open `index.html`:**
    Open the `index.html` file directly in your web browser.

    *   You should see the Kanban board with pre-defined columns and sample tasks.
    *   You can drag task cards between columns or reorder them within the same column.

## How It Works

### HTML (`index.html`)

*   Defines the main structure using semantic HTML elements.
*   A `div.columns` container holds individual `div.column` elements.
*   Each `div.column` contains a header (`div.column_header`) and a `div.projects` container for task cards.
*   Task cards are represented by `<article class="project">` elements, containing details like title, description, and progress.
*   Unique IDs (e.g., `projects--backlog`) are assigned to `.projects` containers to allow JavaScript to target them for drag-and-drop.
*   Includes the [SortableJS](https://github.com/SortableJS/Sortable) library via CDN for drag-and-drop functionality.

### CSS (`style.css`)

*   Uses CSS Custom Properties (variables) for theming (colors, spacing).
*   Employs Flexbox for layout:
    *   `.columns` uses `display: flex` to arrange columns horizontally.
    *   `.column` uses `display: flex; flex-direction: column;` to stack its header, projects, and "New Task" button vertically.
*   Styles project cards, column headers, progress bars, and buttons.
*   Includes styles for SortableJS helper classes (`.project--chosen`, `.project--drag`) to provide visual feedback during drag operations.

### JavaScript (`script.js`)

*   **SortableJS Initialization:**
    *   Identifies the project container elements within each column (e.g., `#projects--backlog`, `#projects--planning`).
    *   Initializes `SortableJS` on each of these containers.
    *   The `group: 'shared'` option in SortableJS is key to allowing cards to be dragged between different column lists.
    *   `animation`, `chosenClass`, and `dragClass` options enhance the user experience.
*   **(Placeholder) "New Task" Functionality:** Basic event listeners are attached to "New Task" buttons, logging to the console. This can be extended to create new task elements dynamically.

## Customization

*   **Columns:**
    *   To add/remove/rename columns:
        1.  Modify the HTML structure in `index.html` to add/remove `div.column` sections.
        2.  Update the `id` of the new/modified `.projects` container.
        3.  Update the `projectColumnSuffixes` array in `script.js` to include the suffixes of your column IDs (e.g., if your new projects container is `id="projects--review"`, add `'--review'` to the array).
        4.  Add corresponding CSS for the new column header style (e.g., `.column_header_headline--review`).
*   **Styling:**
    *   Modify `style.css` to change colors (using CSS variables in `:root`), fonts, spacing, card appearance, etc.
*   **Task Card Content:**
    *   Adjust the HTML structure within `<article class="project">` in `index.html` to change the information displayed on cards.

## Future Enhancements / To-Do

*   [ ] **Local Storage Persistence:** Save the state of the board (task positions and content) to the browser's `localStorage` so changes persist across sessions.
*   [ ] **Dynamic Task Creation:** Implement full functionality for the "New Task" buttons to add new cards via a form or modal.
*   [ ] **Task Editing:** Allow users to edit the content of existing tasks.
*   [ ] **Task Deletion:** Allow users to delete tasks.
*   [ ] **Backend Integration:** Connect to a backend (e.g., Node.js/Express, Python/Flask, PHP) and a database to store tasks permanently and enable collaboration.
*   [ ] **Advanced Filtering/Search:** Add options to filter tasks or search for specific cards.
*   [ ] **Improved Accessibility:** Further review and enhance accessibility features.
*   [ ] **Unit/Integration Tests.**

## Contributing

Contributions are welcome! If you have ideas for improvements or find any bugs, please feel free to:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE.md). *(Optional: Create a LICENSE.md file with the MIT license text if you want to include one)*
