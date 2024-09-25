'use client';

import { useState } from 'react';

export default function IdeaList() {
  const [items, setItems] = useState([
    { id: 1, content: 'Idea 1'},
    { id: 2, content: 'Idea 2'},
    { id: 3, content: 'Idea 3'},
  ]);

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id 
    ));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className="flex items-center mb-3">
          <div
            className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center focus:outline-none"
          />
          <div className="flex-grow p-2 border rounded">
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
}
