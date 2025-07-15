import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-blue-700">🧠 FieldEdge AI Assistant</h1>
          <div className="text-sm text-gray-500">Rep: John Doe | Territory: North-East</div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something like: 'What is my Q2 attainment?'"
          />
          <button
            onClick={handleAsk}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Ask
          </button>
        </div>

        {answer && (
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200 shadow-sm">
            <h2 className="text-lg font-medium text-gray-700 mb-2">📊 Answer:</h2>
            <p className="text-gray-800 whitespace-pre-line">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
