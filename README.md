# Dockerized Todo App

This is a full-stack Todo application built with React (frontend) and Node.js (backend) using TypeScript. The app is fully containerized using Docker and can be run with a single command.

## Features

- Dynamic creation of Todo items
- Edit existing Todo items
- Mark Todo items as completed
- Responsive UI built with React and styled using Tailwind CSS
- RESTful API backend built with Node.js and Express
- MongoDB database for data persistence
- Dockerized application for easy setup and deployment

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Docker
- Docker Compose

No other dependencies are required as everything is containerized.

## Getting Started

1. Clone the repository:

git clone https://github.com/andrejast/dockerized-fullstack-todo-app.git 

cd dockerized-fullstack-todo-app

2. Start the application:

docker compose up --build
- or (depending on your Docker version):
docker-compose up --build

3. Access the application:

Open your web browser and navigate to `http://127.0.0.1:8080` `http://localhost:8080`

## Project Structure

├── api/                # Backend Node.js application
├── www/                # Frontend React application
├── Caddyfile           # Caddy server configuration
└── docker-compose.yml  # Docker Compose configuration

## Technologies Used

- Frontend:
  - React
  - TypeScript
  - Tailwind CSS
  - Vite (for build tooling)

- Backend:
  - Node.js
  - Express
  - TypeScript
  - MongoDB

- Infrastructure:
  - Docker
  - Docker Compose
  - Caddy (as reverse proxy)

## Development

To make changes to the application:

1. Stop the running containers with `Ctrl+C` followed by `docker compose down --remove-orphans`
2. Make your changes in the `api/` or `www/` directories
3. Rebuild and restart the containers: `docker compose up --build`