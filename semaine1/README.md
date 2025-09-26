# 🚀 Web3 2025 - Collaborative Expense Sharing App

A modern full-stack expense-sharing application built with React, TypeScript, Express, and Node.js. Inspired by apps like Splitwise and Tricount, this project demonstrates contemporary web development practices with a focus on modularity, type safety, and clean architecture.

## 📋 Course Overview

This project serves as a comprehensive learning exercise covering:
- Modern React development with TypeScript and Vite
- Express.js backend with modular architecture
- File-based data persistence
- API integration and CORS handling
- Component-driven development with props
- State management with React hooks

## 🏗️ Project Structure

```
web3/
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   └── types/         # TypeScript interfaces
│   └── package.json
├── backend/           # Express.js API server
│   ├── routes/            # API route handlers
│   ├── services/          # Business logic layer
│   ├── data/              # JSON data files
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DanielMarica/web3.git
   cd web3
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server** (Port 3000)
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend Development Server** (Port 5173)
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000/api

## 📚 Features

### ✅ Implemented Features
- **Expense Management**: Add, view, and manage shared expenses
- **Real-time Updates**: Dynamic state management with React hooks
- **Data Persistence**: File-based storage with JSON
- **Reset Functionality**: Development utility to reset data
- **Type Safety**: Full TypeScript implementation on frontend
- **CORS Support**: Cross-origin requests between frontend and backend

### 🔄 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | Retrieve all expenses |
| POST | `/api/expenses` | Add a new expense |
| POST | `/api/expenses/reset` | Reset data to initial state |

### 📊 Data Model

```typescript
interface Expense {
  id: string;
  date: string;
  description: string;
  payer: string;
  amount: number;
}
```

## 🧩 Architecture Patterns

### Frontend (React + TypeScript)
- **Component Props**: All components receive data via props for reusability
- **State Management**: Uses React hooks (useState, useEffect)
- **Type Safety**: TypeScript interfaces for all data structures
- **Modern Build Tools**: Vite for fast development and building

### Backend (Express.js)
- **Separation of Concerns**: Routes handle HTTP, services handle business logic
- **Modular Architecture**: Clear separation between routing and data operations
- **File-based Persistence**: Simple JSON storage for development
- **CORS Enabled**: Supports cross-origin requests from frontend

## 🔧 Development Guidelines

### Code Organization
- Keep components small and focused
- Use TypeScript interfaces for type safety
- Separate HTTP handling from business logic
- Maintain clear data flow through props

### Best Practices
- All React components receive data via props
- Use proper error handling for file operations
- Implement loading states for better UX
- Follow REST API conventions

## 🚧 Future Enhancements

- **Multi-user Support**: User authentication and authorization
- **Money Transfers**: Implement settlement calculations
- **Database Integration**: Replace file storage with proper database
- **Advanced State Management**: Context API or Redux integration
- **Deployment**: Production-ready deployment configuration

## 📖 Learning Resources

- [React Main Concepts](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the Web3 2025 course curriculum and is intended for educational purposes.

---

**Course**: Web3 2025 - Lesson 1: JS2 Recap & Project Kickoff  
**Duration**: ~7 min read  
**Focus**: React, Express, TypeScript, Modern Web Development
