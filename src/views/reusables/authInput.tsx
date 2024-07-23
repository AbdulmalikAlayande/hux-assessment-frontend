import React, { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label: string;
	type: string;
	min?: number;
	max?: number;
	size?: number;
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	invalidMessage?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
	className,
	label,
	min,
	max,
	size,
	type,
	onchange,
	required,
	invalidMessage,
	...rest
}) => {
	const [showInvalidMessage, setShowInvalidMessage] =
		React.useState<boolean>(false);

	function handleInputInvalidity(
		event: React.FormEvent<HTMLInputElement>
	): void {
		event.preventDefault();
		setShowInvalidMessage(true);
	}

	return (
		<div className="flex flex-col mb-4">
			<label className="mb-1 font-bold" htmlFor={rest.id}>
				{label}:{" "}
				<span className="text-errorText text-xs">
					{showInvalidMessage && invalidMessage}
				</span>
			</label>
			<input
				className={
					className
						? className
						: "w-[300px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-lightText"
				}
				{...rest}
				type={type}
				onChange={onchange}
				onInvalid={handleInputInvalidity}
				min={min}
				max={max}
				size={size}
				required={required}
			/>
		</div>
	);
};

export default AuthInput;
