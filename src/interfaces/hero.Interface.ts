export type HeroColor = 'teal' | 'green' | 'red';

export interface HeroProps {
	tagline?: string;
	title: string;
	description: string;
	reversed?: boolean;
	color?: HeroColor;
	highlight?: string;
	buttonLabel: string;
	imageUrl: string;
	phoneNumber?: string;
}
