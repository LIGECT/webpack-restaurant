# Lumino Restaurant Page

![Project Screenshot](./src/assets/screenshots.jpg)

A simple, elegant, and responsive website for a fictional Italian restaurant named "Lumino". This project was built from scratch to practice webpack, asset management, and dynamic page generation with JavaScript.

**Live Demo:** [https://ligect.github.io/webpack-restaurant/](https://ligect.github.io/webpack-restaurant/)

**Project Repository:** [https://github.com/LIGECT/webpack-restaurant](https://github.com/LIGECT/webpack-restaurant)

---

## Features

- **Three Dynamic Pages:** Seamless navigation between Home, Menu, and About Us pages without full page reloads, creating a smooth single-page application experience.
- **Fully Responsive Design:** A mobile-first approach ensures a great user experience on all devices, from small mobile screens to large desktops, including a functional burger menu.
- **Modern Tech Stack:** Built with HTML5, CSS3, and modern JavaScript (ES6+).
- **Webpack-Powered:** Utilizes Webpack 5 for efficient module bundling, asset management, and development workflow.
- **Performance Optimized:**
  - Images are lazy-loaded to improve initial page load time.
  - Menu images are automatically resized and converted to `.webp` format using `responsive-loader` and `sharp` for optimal performance.
- **Modular Codebase:** The project is structured with a clear separation of concerns, using ES6 modules for different pages and UI components, making it easy to maintain and scale.

---

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack 5
- responsive-loader
- html-webpack-plugin
- sharp

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/LIGECT/webpack-restaurant.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd webpack-restaurant
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Usage

- **Run the development server:**

  ```sh
  npm run dev
  ```

  This command starts the webpack development server and automatically opens the project in your browser. It also enables hot-reloading for a better development experience.

- **Create a production build:**
  ```sh
  npm run build
  ```
  This command bundles and optimizes the project files for production. The output is saved in the `dist/` directory.

---

## License

Distributed under the ISC License.
