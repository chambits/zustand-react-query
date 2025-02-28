# Zustand + React Query

A simple React app using Zustand for client state management and React Query for server state management, built with Vite and JSON Server as a mock API.

## 🚀 Features

- **Zustand for Client State**
  - Minimal boilerplate
  - Optimized re-renders with selectors
- **React Query for Server State**
  - Smart caching and background updates
  - Automatic revalidation
- **JSON Server as a Mock API**
  - Simulates real API interactions
  - Serves dummy posts

## 🛠 Tech Stack

- React (Vite)
- TypeScript
- Zustand
- React Query
- JSON Server

## 📦 Installation

Clone the repository:

```sh
git clone https://github.com/chambits/zustand-react-query.git
cd zustand-react-query
```

Install dependencies:

```sh
yarn install
```

## 🏃‍♂️ Running the App

Start the mock API (JSON Server):

```sh
yarn json-server
```

Start the React app:

```sh
yarn dev
```

## 🔧 Project Structure

```
.
├── src
│   ├── components
│   │   ├── PostList.tsx  # Fetches posts using React Query
│   │   ├── PostModal.tsx # Uses Zustand for client state
│   ├── store
│   │   ├── usePostStore.ts # Zustand state management
│   ├── api
│   │   ├── posts.ts # API functions using React Query
│   ├── App.tsx
│   ├── main.tsx
├── db.json # Mock JSON server database
├── vite.config.ts
```
