import React from "react";

interface PromptTemplateSelectionProps {
  selectedAction: string;
  templates: string[];
  onSelectTemplate: (template: string) => void;
}

export const PromptTemplateSelection: React.FC<
  PromptTemplateSelectionProps
> = ({ selectedAction, templates, onSelectTemplate }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-white">
        Select a template for {selectedAction}
      </h2>
      <div className="flex flex-wrap gap-4">
        {templates.map((template, index) => (
          <button
            key={index}
            onClick={() => onSelectTemplate(template)}
            className="px-4 py-2 rounded-lg border bg-gray-700 text-gray-300"
          >
            {template}
          </button>
        ))}
      </div>
    </div>
  );
};
