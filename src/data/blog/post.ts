
import { ArrowLeft, Share2, Printer, Bookmark } from 'lucide-react';

export const blogPostContent = {
  header: {
    backLink: "Back to Blog",
    idPrefix: "ID:",
    authorRole: "Growth Strategist",
    shareLabel: "Share",
    printLabel: "Print"
  },
  sidebar: {
    tocTitle: "Table of Contents",
    progressTitle: "Reading Progress",
    tagsTitle: "Tags",
    toc: [
      { id: "intro", label: "01. Introduction" },
      { id: "architecture", label: "02. Architecture" },
      { id: "metrics", label: "03. Performance Metrics" },
      { id: "conclusion", label: "04. Conclusion" }
    ]
  },
  content: {
    figPrefix: "Fig",
    codeLabel: "Implementation Logic",
    introId: "intro",
    introTitle: "Introduction",
    architectureId: "architecture",
    architectureTitle: "Core Architecture",
    metricsId: "metrics",
    metricsTitle: "Performance Metrics",
    conclusionId: "conclusion",
    conclusionTitle: "Conclusion"
  }
};
