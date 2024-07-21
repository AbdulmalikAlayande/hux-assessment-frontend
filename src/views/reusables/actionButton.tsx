import React from "react";

interface ActionButtonProps {
	label: string;
	type?: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
	className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	label,
	onClick,
	className,
	type,
}) => {
	return (
		<button className={className} onClick={onClick} type={type}>
			{label}
		</button>
	);
};

export default ActionButton;
