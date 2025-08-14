console.warn(
  "Warning: '@noahlocal/copilotkit-sdk-js/langchain' is deprecated and will be removed in a future release. Please use '@noahlocal/copilotkit-sdk-js/langgraph' instead.",
);

export {
  CopilotKitPropertiesAnnotation,
  CopilotKitStateAnnotation,
  type CopilotKitState,
  type CopilotKitProperties,
  copilotkitCustomizeConfig as copilotKitCustomizeConfig,
  copilotkitExit as copilotKitExit,
  copilotkitEmitState as copilotKitEmitState,
  copilotkitEmitMessage as copilotKitEmitMessage,
  copilotkitEmitToolCall as copilotKitEmitToolCall,
  convertActionToDynamicStructuredTool,
  convertActionsToDynamicStructuredTools,
} from "./langgraph";
