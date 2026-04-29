export type ParamType = "temperature" | "top_p" | "top_k";

export type ModelParameter = {
  key: ParamType; // the parameter type (temperature, top_p, top_k)
  label: string; // a human-readable label for the parameter
  min: number; // minimum value of the parameter
  max: number; // maximum value of the parameter
  step: number; // step size for the parameter adjustment
  defaultValue: number; // default value for the parameter
  description: string; // a brief description of the parameter's purpose
};
