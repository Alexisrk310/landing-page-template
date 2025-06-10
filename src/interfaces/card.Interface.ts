export interface CardInfoAnimateProps {
	icon: React.ReactNode;
	title: string;
	className?: string;
	onClick?: () => void;
	description: string;
	disabled?: boolean;
}