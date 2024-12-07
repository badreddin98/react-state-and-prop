# React State and Props Assignment
By Badreddin Elyazgi

This project demonstrates my understanding of state and props in React through two main components:

1. UserProfile (Class Component)
   - Shows my profile information
   - Features name editing functionality
   - Shows my list of hobbies
   - Toggles between edit and view modes

2. MoviesList (Functional Component)
   - Uses React Hooks (useState)
   - Displays my favorite movies with details
   - Allows toggling movie details
   - Implements movie removal functionality
   - Filters movies by genre

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173)

## Features

### My Profile Component
- Edit name
- Toggle between edit and view modes
- Display list of my hobbies

### My Movies List Component
- View list of my favorite movies
- Toggle movie details
- Remove movies from the list
- Filter movies by genre (Action movies)

## Project Structure
```
src/
  ├── components/
  │   ├── UserProfile.jsx
  │   └── MoviesList.jsx
  ├── App.jsx
  └── App.css
