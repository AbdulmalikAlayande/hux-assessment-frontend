import React, { createContext, useState } from "react";

interface AuthContextProps {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
	auth?: string | null | undefined;
	setAuth: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: false,
	login: () => {},
	logout: () => {},
	auth: "",
	setAuth: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [auth, setAuth] = useState<null | string>(null);

	console.log("at provider auth is ==> ", auth);

	const login = () => {
		setIsAuthenticated(true);
	};

	const logout = () => {
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, login, logout, auth, setAuth }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
