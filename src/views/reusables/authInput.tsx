import React, { InputHTMLAttributes } from "react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	label: string;
	type: string;
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
	className,
	label,
	type,
	onchange,
	required,
	...rest
}) => {
	return (
		<div className="flex flex-col mb-4">
			<label className="mb-1 font-bold" htmlFor={rest.id}>
				{label}:
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
				// {required && <span className="text-red-500">Required</span>}}
				required={required}
			/>
		</div>
	);
};

export default AuthInput;
