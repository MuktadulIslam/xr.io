// Events Configuration File
// Manage all event popups and settings from here

export interface Event {
  id: string;
  title: string;
  description: string;
  bannerImage: string;
  link: string;
  createdAt: Date; // Used for ordering (newest first)
  expiresAt?: Date; // Optional: when this event should stop showing
}

// ============================================
// CONFIGURATION SETTINGS
// ============================================

export const EVENT_CONFIG = {
  // Delay before showing popup (in milliseconds)
  POPUP_DELAY: 7000, // 7 seconds
  
  // Time gap between showing popups to same user (in milliseconds)
  POPUP_INTERVAL: 12 * 60 * 60 * 1000, // 12 hours
  
  // Animation duration for MacOS-like shrink effect (in milliseconds)
  SHRINK_ANIMATION_DURATION: 600,
};

// ============================================
// EVENTS LIST
// ============================================

export const EVENTS: Event[] = [
  {
    id: 'event-001',
    title: 'AI Revolution Summit 2025',
    description: 'Join us for the biggest AI and VR technology conference of the year',
    bannerImage: '/images/events/event1.jpg',
    link: 'https://example.com/ai-summit-2025',
    createdAt: new Date('2025-01-15'),
    // expiresAt: new Date('2025-03-15'), // Optional expiry
  },
  {
    id: 'event-002',
    title: 'VR Healthcare Workshop',
    description: 'Learn how VR is transforming medical training',
    bannerImage: '/images/events/event2.png',
    link: 'https://example.com/vr-healthcare-workshop',
    createdAt: new Date('2025-01-10'),
  },
  {
    id: 'event-003',
    title: 'Free Webinar: Non-Technical Skills Assessment',
    description: 'Discover the future of skill evaluation with AI',
    bannerImage: '/images/events/event3.png',
    link: 'https://example.com/nts-webinar',
    createdAt: new Date('2025-01-05'),
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all active events (not expired)
 * Sorted by creation date (newest first)
 */
export function getActiveEvents(): Event[] {
  const now = new Date();
  return EVENTS
    .filter(event => !event.expiresAt || event.expiresAt > now)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

/**
 * Get the next event to display in popup
 * Returns the newest event that is:
 * 1. Not read (clicked on banner)
 * 2. Not dismissed OR dismissed but duration has passed
 */
export function getNextPopupEvent(
  readEventIds: string[],
  canShowEventFn: (eventId: string) => boolean
): Event | null {
  const activeEvents = getActiveEvents();

  // Filter events that are not read AND can be shown (not dismissed or duration passed)
  const availableEvents = activeEvents.filter(event =>
    !readEventIds.includes(event.id) && canShowEventFn(event.id)
  );

  return availableEvents[0] || null;
}

/**
 * Get count of unread events
 */
export function getUnreadEventCount(readEventIds: string[]): number {
  const activeEvents = getActiveEvents();
  return activeEvents.filter(event => !readEventIds.includes(event.id)).length;
}