import { EventType } from './types';

export function trackEvent(event: EventType) {
  if (typeof window.gtag !== 'undefined') {
    const { name, ...properties } = event;
    window.gtag('event', name, properties);
  }
}
