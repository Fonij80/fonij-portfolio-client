import React from "react";

interface RoleSelectionProps {
  selectedRole: string;
  onSelectRole: (role: string) => void;
}

const roles = [
  "Marketer",
  "Developer",
  "Designer",
  "Business Analyst",
  "Doctor",
  "Lawyer",
];

export const RoleSelection: React.FC<RoleSelectionProps> = ({
  selectedRole,
  onSelectRole,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white">Select your role</h2>
      <div className="flex flex-wrap gap-4">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onSelectRole(role)}
            className={`px-4 py-2 rounded-lg border ${
              selectedRole === role
                ? "bg-white text-black"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};
