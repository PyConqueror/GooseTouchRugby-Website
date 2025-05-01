// Helper function to format date (e.g., July 7, 2024)
export const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC', // Assume dates are stored in UTC, adjust if needed
    });
  } catch (e) {
    console.error("Error formatting date:", e);
    return dateString; // Return original on error
  }
};

// Helper function to format time (e.g., 14:00)
export const formatTime = (timeString: string): string => {
  if (!timeString) return "";
   try {
    // Extract time part for display, assuming the time stored is the intended local time
    return new Date(timeString).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC', // Extract time based on UTC stored value
    });
   } catch (e) {
      console.error("Error formatting time:", e);
      return ""; // Return empty or original on error
   }
}; 