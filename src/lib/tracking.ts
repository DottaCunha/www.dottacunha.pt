// Analytics and advertising tags.
//
// Nothing here loads until the visitor accepts cookies in the consent banner
// (src/components/CookieConsent.astro). While TRACKING_ENABLED is false the
// banner is not rendered and no tag is ever loaded.
//
// Switch TRACKING_ENABLED on in the same deploy as the Privacy Policy update
// that describes these tools, never before.
export const TRACKING_ENABLED = true;

// Google Tag Manager container. With a container set, GA4 and any other tags
// are configured inside GTM. Events reach it through the dataLayer.
export const GTM_ID = "";

// GA4 measurement ID ("G-XXXXXXXXXX"), for loading GA4 directly without GTM.
// Leave empty when GA4 is configured inside the GTM container above, otherwise
// every hit is counted twice.
export const GA4_ID = "G-DY62211QYB";

// Meta Pixel ID (digits only). Leave empty when the Pixel is set up inside GTM.
export const META_PIXEL_ID = "1877219840279695";

export const TRACKING_ACTIVE =
  TRACKING_ENABLED && Boolean(GTM_ID || GA4_ID || META_PIXEL_ID);
