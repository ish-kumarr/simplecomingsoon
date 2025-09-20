import React from 'react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center font-sans antialiased p-4">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Our new dashboard is
        </h1>
        
        <h2 className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter my-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Coming Soon
        </h2>

        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 mt-4">
          We're working hard to launch the Outreach Panda dashboard. Get ready to manage your campaigns with unparalleled ease and insight.
        </p>

      </div>
    </div>
  );
}

export default App;
