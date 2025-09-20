import React from 'react';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800">My App</div>
            <div>
              <a href="#" className="px-4 text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="px-4 text-gray-600 hover:text-gray-800">About</a>
              <a href="#" className="px-4 text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg">
          This is a simple and clean UI created with React and Tailwind CSS.
          Feel free to modify and extend it to your needs.
        </p>
      </main>

      <footer className="bg-white shadow-md mt-8">
        <div className="container mx-auto px-6 py-4">
          <p className="text-center text-gray-600">
            &copy; 2025 My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
