# Tic Tac Toe - React

Welcome to Tic Tac Toe - React! This is a React + Vite rebuild of the classic Tic Tac Toe game, with player name entry, sound effects, and routing.

## Live URL : https://tictactoe-react-vite-game.netlify.app

```bash
https://tictactoe-react-vite-game.netlify.app
```

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Author](#author)

## Project Overview

Tic Tac Toe - React is a component-based rebuild of the classic game. Players enter their names before starting, play a full game with win/draw detection, and enjoy sound effects throughout.

## Features

- **Player Names:** Choose player names before starting a game.
- **Two-Player Gameplay:** Classic X/O turn-based play on a 3x3 grid.
- **Win/Draw Detection:** Automatically detects winning combinations and draw conditions.
- **Sound Effects:** Cool sound effects on moves and game outcomes.
- **Routing:** Multiple views (start screen, game, winner screen) via React Router.
- **Reusable Patterns:** Custom Hooks, Higher Order Components, Context API, and state lifting.

## Tech Stack

- **Frontend:** React, Vite, JSX, Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** Context API

## Folder Structure

```bash
TicTacToe-React/
├── src/
│   ├── assets/           # Images and sound effect files
│   ├── Components/        # Box, SingleBox, Game, Home, Players, StartGame, Title, Winner, Draw
│   ├── utils/             # Store (shared game state)
│   ├── App.jsx            # Root application component
│   └── main.jsx           # App entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Installation Guide

### Prerequisites

- Node.js (v16 or later)
- npm

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rajesh-ranjan-git/TicTacToe-React.git
   cd TicTacToe-React
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. The app should now be running at the local URL printed by Vite (typically http://localhost:5173).

## Usage Instructions

1. Enter player names on the start screen.
2. Take turns clicking cells to place X or O.
3. The game announces the winner or a draw, with sound effects.

## Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite development server     |
| `npm run build`   | Build the app for production          |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint over the project           |

## Deployment

Deployed on Netlify at https://tictactoe-react-vite-game.netlify.app.

## Author

- **Rajesh Ranjan** — [GitHub @rajesh-ranjan-git](https://github.com/rajesh-ranjan-git)

---
