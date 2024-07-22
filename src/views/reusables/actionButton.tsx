import React from "react";

interface ActionButtonProps {
	label: string;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
	className?: string;
	icon?: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	label,
	onClick,
	className,
	type,
	icon,
}) => {
	return (
		<button className={className} onClick={onClick} type={type}>
			{icon}
			{label}
		</button>
	);
};

export default ActionButton;
