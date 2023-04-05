export enum ElementContainer {
  LandingHeroSection = 'LandingHeroSection',
  LandingStyleCampaignSection = 'LandingStyleCampaignSection',
  LandingCollectionSection = 'LandingCollectionSection',
}

interface CustomEvent {
  element_container?: ElementContainer;
  name: string;
}

/** Generic events */
export enum ElementId {
  CTAExploreTemplates = 'CTAExploreTemplates',
  BtnHeaderLogo = 'BtnHeaderLogo',
}

interface ColorModeClickEvent extends CustomEvent {
  name: 'color_mode_click';
  selected_value: 'dark' | 'light';
}

interface ElementClickEvent extends CustomEvent {
  name: 'element_click';
  element_id: ElementId;
}

/** Snippet preview events */
export enum SnippetPreviewElementId {
  SelectScreenSize = 'SelectScreenSize',
  SelectCodeLanguage = 'SelectCodeLanguage',
  BtnMaximize = 'BtnMaximize',
  BtnOpenFullPage = 'BtnOpenFullPage',
}

interface SnippetThumbnailClickEvent extends CustomEvent {
  name: 'snippet_thumbnail_click';
  title: string;
}

interface SnippetPreviewClickEvent extends CustomEvent {
  name: 'snippet_preview_click';
  element_id: SnippetPreviewElementId;
  title: string;
  secondaryTitle?: string;
  selected_value?: string;
}

export type EventType =
  | ColorModeClickEvent
  | ElementClickEvent
  | SnippetPreviewClickEvent
  | SnippetThumbnailClickEvent;
