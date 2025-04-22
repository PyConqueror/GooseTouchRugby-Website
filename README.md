# Goose Touch Rugby Website

This is the official website for Goose Touch Rugby.

## Technology Stack

*   **Frontend:** Next.js (React Framework)
*   **Backend/CMS:** Payload CMS
*   **Styling:** Tailwind CSS
*   **Language:** TypeScript

## Project Structure

*   `app/`: Contains the Next.js application pages and layouts.
*   `components/`: Shared React components used throughout the site.
*   `collections/`: Defines the data structures (collections) for Payload CMS.
*   `public/`: Static assets like images and fonts.
*   `lib/`: Utility functions and helpers.
*   `payload.config.ts`: Configuration file for Payload CMS.
*   `next.config.mjs`: Configuration file for Next.js.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS.

## Running the Project

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd GooseTouchRugby-Website
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Set up environment variables:**
    *   Create a `.env` file in the root directory.
    *   Add necessary environment variables (e.g., Payload CMS secret, database connection string). Refer to `.env.example` if available, or document the required variables here.
    ```env
    # Example .env content
    DATABASE_URI=
    PAYLOAD_SECRET=
    NEXT_PUBLIC_API_BASE_URL=
    CRON_SECRET=
    PREVIEW_SECRET=
    BLOB_READ_WRITE_TOKEN=
    NEXT_PUBLIC_SERVER_URL=
    # Add other variables as needed
    ```
4.  **Run the development server:**
    This command starts both the Next.js frontend and the Payload CMS backend concurrently.
    ```bash
    pnpm run dev
    ```
5.  Open your browser and navigate to `http://localhost:3000` for the website and `http://localhost:8000/admin` (or your configured Payload admin port) for the CMS admin panel.

## Ownership

This project is fully owned by Goose Touch Rugby. 