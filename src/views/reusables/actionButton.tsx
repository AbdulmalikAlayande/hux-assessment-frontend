import React from "react";

interface ActionButtonProps {
	label: string;
	onClick: () => void;
	className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	label,
	onClick,
	className,
}) => {
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
};

export default ActionButton;
