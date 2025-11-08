export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  // for LiveKit Cloud Sandbox
  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Friday',
  pageTitle: 'Nexus Voice Agent',
  pageDescription: 'Your advanced AI voice assistant',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '',
  accent: '#002cf2',
  logoDark: '',
  accentDark: '#1fd5f9',
  startButtonText: 'Talk to Nexus',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
