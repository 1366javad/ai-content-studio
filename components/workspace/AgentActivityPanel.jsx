"use client";

export default function AgentActivityPanel({ events }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-3 font-semibold">Agent Activity</h3>

      <div className="space-y-2 text-sm">
        {events.length === 0 && (
          <p className="text-gray-500">No AI activity yet.</p>
        )}

        {events.map((event, index) => (
          <div key={index} className="rounded-lg bg-gray-50 p-2">
            <div className="font-medium">{event.type}</div>
            <div className="text-gray-600">
              {event.message || event.label || event.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
