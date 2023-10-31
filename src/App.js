import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Blog from "./pages/blog";
import Resume from "./pages/resume";
import { ThemeProvider } from "styled-components";
import {
	// Nature,
	// Traditional,
	Dark,
} from "./constants/colors";

const theme = {
	main: Dark,
};

function App() {
	return (
        // <div className="app">
			<ThemeProvider theme={theme}>
                <Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/resume" element={<Resume/>}></Route>
					<Route path="/blog" element={<Blog/>}></Route>
				</Routes>
            </ThemeProvider>
        // </div>
	);
}

export default App;
