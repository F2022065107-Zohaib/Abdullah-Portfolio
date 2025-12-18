
import React from 'react';
import { Video, Layout, BarChart3, Scissors, Layers, Smartphone } from 'lucide-react';
import { Project, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Retention-First Video Editing',
    description: 'Dynamic pacing and visual storytelling designed to keep viewers glued to the screen.',
    icon: 'Video'
  },
  {
    id: '2',
    title: 'High-CTR Thumbnails',
    description: 'Psychology-driven designs that stop the scroll and skyrocket your click-through rates.',
    icon: 'Layout'
  },
  {
    id: '3',
    title: 'Social Optimization',
    description: 'Short-form edits (Reels/TikTok/Shorts) engineered for virality and high engagement.',
    icon: 'Smartphone'
  },
  {
    id: '4',
    title: 'Advanced Color Grading',
    description: 'Cinematic visual styles tailored to match your brand’s specific aesthetic and mood.',
    icon: 'Layers'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'MrBeast Style Retention Edit',
    category: 'Video',
    imageUrl: 'https://picsum.photos/seed/v1/1200/800',
    description: 'High-paced storytelling with multi-cam transitions.',
    stats: '1.2M+ Views'
  },
  {
    id: 'p2',
    title: 'Cyberpunk Aesthetic Thumbnail',
    category: 'Thumbnail',
    imageUrl: 'https://picsum.photos/seed/t1/1200/800',
    description: 'Neon-infused composition for tech reviewers.',
    stats: '12.4% CTR'
  },
  {
    id: 'p3',
    title: 'Documentary Mini-Series',
    category: 'Video',
    imageUrl: 'https://picsum.photos/seed/v2/1200/800',
    description: 'Cinematic color grading and narrative-focused editing.',
    stats: 'Award Nominee'
  },
  {
    id: 'p4',
    title: 'Vlog Lifestyle Thumbnail Set',
    category: 'Thumbnail',
    imageUrl: 'https://picsum.photos/seed/t2/1200/800',
    description: 'Clean, emotional imagery for lifestyle creators.',
    stats: '800k Reach'
  },
  {
    id: 'p5',
    title: 'Finance Niche Thumbnail',
    category: 'Thumbnail',
    imageUrl: 'https://picsum.photos/seed/t3/1200/800',
    description: 'High-contrast data visualization for crypto channels.',
    stats: '9.8% CTR'
  },
  {
    id: 'p6',
    title: 'Shorts Virality Sequence',
    category: 'Video',
    imageUrl: 'https://picsum.photos/seed/v3/1200/800',
    description: 'Captions, emojis, and sound design for TikTok.',
    stats: '5M+ TikTok Views'
  }
];
