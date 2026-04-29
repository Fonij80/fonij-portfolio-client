import React from "react";
import type { ModelParameter } from "@/types/promprty";

interface PlaygroundPanelProps {
  prompt: string;
  onChangePrompt: (newPrompt: string) => void;
  modelParams: ModelParameter[];
  onChangeModelParam: (key: string, value: number) => void;
}

export const PlaygroundPanel: React.FC<PlaygroundPanelProps> = ({
  prompt,
  onChangePrompt,
  modelParams,
  onChangeModelParam,
}) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-white text-lg">Customize your Prompt</h3>
      <textarea
        value={prompt}
        onChange={(e) => onChangePrompt(e.target.value)}
        className="w-full h-40 p-2 bg-gray-700 text-white rounded-lg"
      />
      {modelParams.map((param) => (
        <div key={param.key} className="my-2">
          <label className="text-gray-300">{param.label}</label>
          <input
            type="range"
            min={param.min}
            max={param.max}
            step={param.step}
            value={param.defaultValue}
            onChange={(e) =>
              onChangeModelParam(param.key, parseFloat(e.target.value))
            }
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};
