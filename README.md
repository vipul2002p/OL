# Online Library Site

A full-stack web application that provides users with access to a digital library. Built with **React.js** on the frontend and **Node.js/Express.js** on the backend, the platform lets users browse, search, and read books, upload resources, and make payments through Razorpay integration.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Books** — Explore a curated collection of books available in the library.
- **Search** — Quickly find specific books by title or keyword.
- **Book Details** — View detailed information about each book.
- **PDF Viewer** — Read and stream PDF books directly in the browser.
- **Download Books** — Download books as PDF files for offline reading.
- **File Upload** — Upload new resources (images, documents) to the library.
- **Payment Integration** — Securely purchase premium content via Razorpay.
- **Responsive UI** — User-friendly interface that works across devices.

## Demo

After starting the server, open your browser and navigate to:

```
http://localhost:9090
```

## Project Structure

```
OL/
├── README.md
├── .gitattributes
└── server/
    ├── package.json          # Backend dependencies and scripts
    ├── package-lock.json
    ├── index.js              # Express server entry point
    ├── uploads/              # User-uploaded files
    └── public/               # Static frontend assets (built React app)
        ├── index.html        # React SPA entry point
        ├── asset-manifest.json
        ├── icons/            # Icon assets and sample documents
        ├── images/           # Image assets
        ├── uploads/          # Public upload directory
        └── static/
            ├── css/          # Compiled CSS
            └── js/           # Compiled JavaScript (React bundle)
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [Razorpay](https://razorpay.com/) account (for payment features — test keys are included by default)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vipul2002p/OL.git
    cd OL
    ```

2. **Navigate to the server directory:**

    ```bash
    cd server
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

The server uses the following configuration values in `server/index.js`:

| Variable       | Default Value                  | Description                        |
| -------------- | ------------------------------ | ---------------------------------- |
| `port`         | `9090`                         | Port the server listens on         |
| `key_id`       | `rzp_test_06I3Zl1gQohVlT`     | Razorpay test API key ID           |
| `key_secret`   | `2eOknd6qVk45Kv2hpvY2cwPO`    | Razorpay test API key secret       |

> **Note:** The default Razorpay keys are **test keys** suitable for development. For production, replace them with your own live Razorpay credentials and **never** commit real secrets to version control. Consider using environment variables instead.

## Usage

1. **Start the server:**

    ```bash
    # From the server/ directory
    npm start
    ```

    Or, equivalently:

    ```bash
    node index.js
    ```

2. **Open the application:**

    Navigate to [http://localhost:9090](http://localhost:9090) in your web browser to explore the online library.

## API Endpoints

The Express server exposes the following API endpoints:

### Books & PDFs

| Method | Endpoint     | Description                                           |
| ------ | ------------ | ----------------------------------------------------- |
| POST   | `/pdf`       | Set the active PDF file path (`body: { msg }`)        |
| GET    | `/pdf`       | Stream the currently active PDF file                  |
| POST   | `/download`  | Download a book as a PDF (`body: { message }`)        |

### File Uploads

| Method | Endpoint     | Description                                           |
| ------ | ------------ | ----------------------------------------------------- |
| POST   | `/src`       | List all uploaded file names                          |
| POST   | `/uploads`   | Upload a file (multipart form with `photo` field)     |

### Payments

| Method | Endpoint     | Description                                           |
| ------ | ------------ | ----------------------------------------------------- |
| POST   | `/pay`       | Create a Razorpay order (`body: { amount, currency }`) |

### Static Assets

All files under `server/public/` are served as static assets at the root URL (`/`).

## Technologies Used

### Frontend

- [React.js](https://react.dev/) — UI library (pre-built and served as static files)

### Backend

- [Node.js](https://nodejs.org/) — JavaScript runtime
- [Express.js](https://expressjs.com/) — Web framework
- [body-parser](https://www.npmjs.com/package/body-parser) — Request body parsing middleware
- [cors](https://www.npmjs.com/package/cors) — Cross-Origin Resource Sharing middleware
- [formidable](https://www.npmjs.com/package/formidable) — Multipart form data / file upload parsing
- [Razorpay](https://razorpay.com/docs/api/) — Payment gateway SDK

## Contributing

Contributions are welcome! To get started:

1. **Fork** the repository.
2. **Create a feature branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes** and commit them with clear, descriptive messages:

    ```bash
    git commit -m "Add: description of your change"
    ```

4. **Push** your branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Open a Pull Request** against the `main` branch with a description of what you changed and why.

### Guidelines

- Follow the existing code style and conventions.
- Test your changes locally before submitting.
- Keep pull requests focused — one feature or fix per PR.
- Open an issue first if you plan a large change so it can be discussed.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
