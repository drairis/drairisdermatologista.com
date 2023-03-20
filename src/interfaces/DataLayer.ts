export interface PushDataLayerProps {
  [key: string]: string | undefined;
}

export enum DATA_LAYER_EVENTS {
  NEWSLETTER = "NEWSLETTER_SUBSCRIBE",
  SECTION_BUTTON_CLICK = "SECTION_BUTTON_CLICK",
  LIKE = "ARTICLE_LIKE",
  SUBSCRIBE_LEAD = "SUBSCRIBE_LEAD",
}

export enum FB_EVENTS {
  CONTENT = "Content",
  SUBSCRIBE_LEAD = "Subscribe Lead",
  LIKE = "Article Like",
}
