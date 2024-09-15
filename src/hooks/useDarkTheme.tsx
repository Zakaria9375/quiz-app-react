import { useEffect, useState } from "react";

const useDarkTheme = (): {
	isDarkTheme: boolean;
	toggleDarkTheme: () => void;
} => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
	const toggleDarkTheme = () => {
		setIsDarkTheme((prevIsDarkTheme) => {
			const newTheme = !prevIsDarkTheme ? "dark" : "light";
			localStorage.setItem("user-theme", newTheme);
			return !prevIsDarkTheme;
		});
	};
	function initTheme() {
		const storedTheme = localStorage.getItem("user-theme");
		if (storedTheme) {
			setIsDarkTheme(storedTheme === "dark");
		} else {
			localStorage.setItem("user-theme", isDarkTheme ? "dark" : "light");
		}
	}
	useEffect(() => {
		initTheme();
	}, []);

	return { isDarkTheme, toggleDarkTheme };
};

export default useDarkTheme;
