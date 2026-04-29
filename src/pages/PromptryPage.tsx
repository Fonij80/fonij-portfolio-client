import React, { useState } from "react";
import {
  RoleSelection,
  ActionSelection,
  PromptTemplateSelection,
  PlaygroundPanel,
} from "@/components";

export const PromptryPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedAction, setSelectedAction] = useState<string>("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [modelParams, setModelParams] = useState<any>([]);

  // Logic to fetch templates based on selected action
  const getTemplatesForAction = (action: string) => {
    const templates = {
      "Content Creation": ["Generate blog post", "Create social media copy"],
      Frontend: ["Build UI component", "Design landing page"],
    };
    return templates[action] || [];
  };

  const onChangeModelParam = (key: string, value: number) => {
    setModelParams((prev: any) => {
      const newParams = { ...prev };
      newParams[key] = value;
      return newParams;
    });
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <h1 className="text-3xl mb-8">Welcome to Promptry</h1>

      <RoleSelection
        selectedRole={selectedRole}
        onSelectRole={setSelectedRole}
      />
      {selectedRole && (
        <ActionSelection
          selectedRole={selectedRole}
          selectedAction={selectedAction}
          onSelectAction={setSelectedAction}
        />
      )}
      {selectedAction && (
        <PromptTemplateSelection
          selectedAction={selectedAction}
          templates={getTemplatesForAction(selectedAction)}
          onSelectTemplate={setSelectedTemplate}
        />
      )}
      {selectedTemplate && (
        <PlaygroundPanel
          prompt={prompt}
          onChangePrompt={setPrompt}
          modelParams={modelParams}
          onChangeModelParam={onChangeModelParam}
        />
      )}
    </div>
  );
};
