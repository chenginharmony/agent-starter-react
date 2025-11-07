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
  companyName: 'NaijaPrompt',
  pageTitle: 'OgaTalk by NaijaPrompt',
  pageDescription: 'A voice agent built with LiveKit',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  // Use a hosted logo image by default (provided by the user)
  logo: 'https://i.ibb.co/Hf23TWDP/Group-29.png',
  // Accent colors changed to match the provided logo color (#97ffbd)
  accent: '#97ffbd',
  logoDark: 'https://i.ibb.co/Hf23TWDP/Group-29.png',
  // darker variant for hover/dark theme (computed from #97ffbd)
  accentDark: '#6ab284',
  startButtonText: 'Start talking',

  // for LiveKit Cloud Sandbox
  sandboxId: undefined,
  agentName: undefined,
};
