"use client";

export default function OutputTabs({ outputs }) {
  const finalText =
    outputs?.repurpose ||
    outputs?.editor ||
    outputs?.writer ||
    outputs?.planner ||
    "";

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-semibold">Outputs</h3>

      {!finalText && <p className="text-sm text-gray-500">No output yet.</p>}

      {finalText && (
        <textarea
          className="h-[70vh] w-full rounded-lg border p-4 text-sm"
          value={finalText}
          readOnly
        />
      )}
    </div>
  );
}
