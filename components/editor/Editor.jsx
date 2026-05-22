"use client";

import { useState, useEffect } from "react";

export default function Editor({ initialContent }) {
  const [value, setValue] = useState(initialContent || "");

  return (
    <div className="w-full h-full flex flex-col">
      <textarea
        className="w-full h-[80vh] p-4 border rounded-lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
