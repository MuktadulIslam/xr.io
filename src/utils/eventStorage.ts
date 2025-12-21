/**
 * File: src/utils/eventStorage.ts
 * Local Storage Utility for Event Popup Management
 */

const STORAGE_KEYS = {
  LAST_POPUP_SHOWN: 'craftxr_last_popup_shown',
  READ_EVENTS: 'craftxr_read_events',
  DISMISSED_EVENTS: 'craftxr_dismissed_events', // Stores { eventId: timestamp }
};

interface DismissedEvents {
  [eventId: string]: number; // eventId -> timestamp when dismissed
}

/**
 * Get the timestamp of when popup was last shown
 */
export function getLastPopupShownTime(): number | null {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(STORAGE_KEYS.LAST_POPUP_SHOWN);
  return stored ? parseInt(stored, 10) : null;
}

/**
 * Set the timestamp of when popup was shown
 */
export function setLastPopupShownTime(timestamp: number = Date.now()): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(STORAGE_KEYS.LAST_POPUP_SHOWN, timestamp.toString());
}

/**
 * Check if enough time has passed to show popup again
 */
export function canShowPopup(intervalMs: number): boolean {
  const lastShown = getLastPopupShownTime();
  if (!lastShown) return true;
  
  const timeSinceLastShown = Date.now() - lastShown;
  return timeSinceLastShown >= intervalMs;
}

/**
 * Get array of read event IDs
 */
export function getReadEventIds(): string[] {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem(STORAGE_KEYS.READ_EVENTS);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Mark an event as read
 */
export function markEventAsRead(eventId: string): void {
  if (typeof window === 'undefined') return;
  
  const readEvents = getReadEventIds();
  if (!readEvents.includes(eventId)) {
    readEvents.push(eventId);
    localStorage.setItem(STORAGE_KEYS.READ_EVENTS, JSON.stringify(readEvents));
  }
}

/**
 * Check if an event has been read
 */
export function isEventRead(eventId: string): boolean {
  const readEvents = getReadEventIds();
  return readEvents.includes(eventId);
}

/**
 * Get all dismissed events with their timestamps
 */
export function getDismissedEvents(): DismissedEvents {
  if (typeof window === 'undefined') return {};

  const stored = localStorage.getItem(STORAGE_KEYS.DISMISSED_EVENTS);
  return stored ? JSON.parse(stored) : {};
}

/**
 * Mark an event as dismissed with current timestamp
 */
export function dismissEvent(eventId: string): void {
  if (typeof window === 'undefined') return;

  const dismissedEvents = getDismissedEvents();
  dismissedEvents[eventId] = Date.now();
  localStorage.setItem(STORAGE_KEYS.DISMISSED_EVENTS, JSON.stringify(dismissedEvents));
}

/**
 * Check if an event can be shown based on its dismissal time
 * Returns true if event was never dismissed OR enough time has passed since dismissal
 */
export function canShowEvent(eventId: string, intervalMs: number): boolean {
  const dismissedEvents = getDismissedEvents();
  const dismissedTime = dismissedEvents[eventId];

  // If never dismissed, can show
  if (!dismissedTime) return true;

  // Check if enough time has passed since dismissal
  const timeSinceDismissal = Date.now() - dismissedTime;
  return timeSinceDismissal >= intervalMs;
}

/**
 * Remove an event from dismissed list (when it becomes readable again)
 */
export function undismissEvent(eventId: string): void {
  if (typeof window === 'undefined') return;

  const dismissedEvents = getDismissedEvents();
  delete dismissedEvents[eventId];
  localStorage.setItem(STORAGE_KEYS.DISMISSED_EVENTS, JSON.stringify(dismissedEvents));
}

/**
 * Clear all event-related data (for testing/debugging)
 */
export function clearEventData(): void {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(STORAGE_KEYS.LAST_POPUP_SHOWN);
  localStorage.removeItem(STORAGE_KEYS.READ_EVENTS);
  localStorage.removeItem(STORAGE_KEYS.DISMISSED_EVENTS);
}