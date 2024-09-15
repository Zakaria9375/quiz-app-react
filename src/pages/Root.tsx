import { Outlet } from "react-router-dom";
import useOnResize from "../hooks/useOnResize";
import useDarkTheme from "../hooks/useDarkTheme";
import { motion } from "framer-motion";

const Root = () => {
	const {isDarkTheme,toggleDarkTheme} = useDarkTheme();
	const { width } = useOnResize();

  const imagePath = isDarkTheme ? "light" : "dark";
	const screen = width > 768 ? (width > 992 ? "desktop" : "tablet") : "mobile";
	const imgDecorative = `images/pattern-background-${screen}-${
		isDarkTheme ? "dark" : "light"
	}.svg`;
	return (
		<>
			<img
				src={imgDecorative}
				alt=""
				className="absolute justTablet:translate-y-[-35%] w-full h-full"
			/>
			<div className="px-6 py-4 tablet:px-16 tablet:pt-10 desktop:pt-[84px]">
				<div className="max-w-[1160px] mx-auto w-full relative">
					<section
						className="flex items-center gap-2 tablet:gap-4 absolute right-0 top-[10px] tablet:top-[14px]"
						aria-label="toggle light dark theme"
					>
						<img
							src={`images/icon-sun-${imagePath}.svg`}
							alt=""
							className="size-4 tablet:size-6"
						/>
						<div id="toggle-btn">
							<input
								type="checkbox"
								id="switcher"
								aria-label="Toggle dark light mode"
								aria-live="polite"
								className="hidden"
								aria-checked={isDarkTheme}
								checked={isDarkTheme}
								onChange={() => toggleDarkTheme()}
							/>
							<motion.label
								htmlFor="switcher"
								className="switch-btn"
								aria-hidden="true"
								layout
							></motion.label>
						</div>
						<img
							src={`images/icon-moon-${imagePath}.svg`}
							alt=""
							className="size-4 tablet:size-6"
						/>
					</section>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Root;
