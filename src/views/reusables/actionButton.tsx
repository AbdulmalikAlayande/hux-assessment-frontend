import React from "react";

interface ActionButtonProps {
	label: string;
	onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {
	return (
		<button className="action-button" onClick={onClick}>
			{label}
		</button>
	);
};

export default ActionButton;
