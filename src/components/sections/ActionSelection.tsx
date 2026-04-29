import React from "react";

interface ActionSelectionProps {
  selectedRole: string;
  selectedAction: string;
  onSelectAction: (action: string) => void;
}

const actions: Record<string, string[]> = {
  Marketer: ["Content Creation", "Copywriting", "Marketing Plan"],
  Developer: ["Frontend", "Backend", "Mobile", "DevOps"],
  Designer: ["UI/UX Design", "Prototyping", "Branding"],
  BusinessAnalyst: ["Market Research", "Business Planning"],
  Doctor: ["Diagnosis", "Treatment Plan"],
  Lawyer: ["Legal Advice", "Contract Drafting"],
};

export const ActionSelection: React.FC<ActionSelectionProps> = ({
  selectedRole,
  selectedAction,
  onSelectAction,
}) => {
  const roleActions = actions[selectedRole] || [];

  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white">
        Select an action for {selectedRole}
      </h2>
      <div className="flex flex-wrap gap-4">
        {roleActions.map((action) => (
          <button
            key={action}
            onClick={() => onSelectAction(action)}
            className={`px-4 py-2 rounded-lg border ${
              selectedAction === action
                ? "bg-white text-black"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};
