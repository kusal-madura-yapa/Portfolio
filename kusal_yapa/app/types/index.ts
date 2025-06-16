import { ReactNode } from 'react';
import { SxProps, Theme } from '@mui/system';

// Common props interface with sx prop
export interface BaseComponentProps {
  sx?: SxProps<Theme>;
}

// Props with children
export interface WithChildrenProps extends BaseComponentProps {
  children: ReactNode;
}

// Project card props
export interface ProjectCardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  date?: string;
}

// Skill tag props
export interface SkillTagProps extends BaseComponentProps {
  label: string;
}

// Section props
export interface SectionProps extends BaseComponentProps {
  id?: string;
  title: string;
}

// Theme mode type
export type ThemeMode = 'light' | 'dark';

// Footer props
export interface FooterProps extends BaseComponentProps {
  themeMode: ThemeMode;
}

// Processed description type for ProjectCard
export interface ProcessedDescription {
  isParagraph: boolean;
  content?: string;
  header?: string;
  items?: string[];
}

// Contact link type for Footer
export interface ContactLink {
  icon: ReactNode;
  label: string;
  href: string;
  text: string;
  external?: boolean;
}