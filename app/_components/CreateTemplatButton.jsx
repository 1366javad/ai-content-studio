"use client";

import { useState } from "react";
import CreateTemplateModal from "./CreateTemplateModal";

function CreateTemplatButton() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal && <CreateTemplateModal setOpenModal={setOpenModal} />}
      <button
        className="rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30 px-6 py-2.5 text-base"
        onClick={() => setOpenModal((modal) => !modal)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-plus w-5 h-5 mr-2 inline-block"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
        New Template
      </button>
    </div>
  );
}

export default CreateTemplatButton;
