export const servicesListingContent = {
  header: {
    badge: "Active",
    title: {
      static: "System ",
      highlight: "Capabilities"
    },
    description: "Deployable modules for orchestration, automation, and intelligent growth. Select a protocol to initialize."
  },
  searchPlaceholder: "Search services...",
  categories: [
    { id: "all", label: "All Services" },
    { id: "strategy", label: "Strategy" },
    { id: "growth", label: "Growth" },
    { id: "infrastructure", label: "Infrastructure" }
  ],
  emptyState: {
    title: "No Service Found",
    description: "We couldn't locate any services matching your search.",
    buttonLabel: "Reset Filters"
  }
};
