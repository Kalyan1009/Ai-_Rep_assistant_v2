import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-700 text-white font-sans">
      {/* Top Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-indigo-800 shadow-md">
        <h1 className="text-2xl font-semibold">FieldEdge AI</h1>
        <div className="flex gap-4">
          <span className="bg-purple-600 text-sm px-3 py-1 rounded-full">AI Assistant</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-10">
        <h2 className="text-lg mb-4">Ask your question</h2>

        <div className="flex gap-2 items-center w-full max-w-2xl">
          <input
            className="flex-grow rounded-full px-6 py-3 bg-white text-black focus:outline-none shadow-md"
            type="text"
            value={question}
            placeholder="e.g. Which doctors had high call activity last month?"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            onClick={handleAsk}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-all shadow-lg"
          >
            ➤
          </button>
        </div>

        {/* Toggles */}
        <div className="flex gap-6 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <label htmlFor="webSearch">Live Web Search</label>
            <input id="webSearch" type="checkbox" className="accent-purple-500" />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="internalData">Internal Data</label>
            <input id="internalData" type="checkbox" defaultChecked className="accent-green-500" />
          </div>
        </div>

        {/* Answer Section */}
        {answer && (
          <div className="mt-8 bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-2xl">
            <h3 className="text-md font-bold mb-2">💡 Insight</h3>
            <p>{answer}</p>
          </div>
        )}
      </main>
    </div>
  );
}
