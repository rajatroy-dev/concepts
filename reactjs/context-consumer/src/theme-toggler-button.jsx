import { ThemeContext } from "./theme-context";

export default function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {({ theme, toggleTheme }) => (
                <button
                    onClick={toggleTheme}
                    style={{ backgroundColor: theme.background, color: theme.foreground }}>
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    );
}