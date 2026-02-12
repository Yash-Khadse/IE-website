import { Terminal, Code, Layers, Activity } from 'lucide-react';

export const processContent = {
  header: {
    badge: "OUR APPROACH",
    title: {
      line1: "GROWTH",
      highlight: "ENGINE"
    }
  },
  steps: [
    {
      id: 1,
      number: '01',
      title: 'MARKET RESEARCH',
      badge: 'OPPORTUNITY SCANNER',
      description: 'We initiate a comprehensive analysis of your digital presence. Identifying conversion gaps, market opportunities, and competitive advantages. This audit builds the blueprint for market leadership.',
      icon: Terminal,
      // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },

    {
      id: 2,
      number: '02',
      title: 'STRATEGIC PLAN',
      badge: 'CAMPAIGN SETUP',
      description: 'Mapping the growth strategy. We design multichannel funnels, integrated workflows, and brand consistency layers. Every channel is optimized for maximum ROI.',
      icon: Layers
    },
    {
      id: 3,
      number: '03',
      title: 'LAUNCH',
      badge: 'GO-TO-MARKET',
      description: 'Executing the strategy with precision. We launch targeted campaigns using data-backed content. Execution ensures seamless scaling across your entire digital portfolio.',
      icon: Code
    },
    {
      id: 4,
      number: '04',
      title: 'SCALING',
      badge: 'OPTIMIZATION',
      description: 'The campaign enters continuous optimization. We utilize real-time analytics to fine-tune ROI, ensuring your revenue grows predictably with zero friction.',
      icon: Activity
    },
  ]
};
