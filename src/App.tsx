import "./App.css";
import { Face } from "./AvatarBuilder";

function App() {
	return (
		<div className="App">
			<h1>folks!</h1>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
				}}
			>
				<li> making a list of possible facial features</li>
				<li> making a list of each feature we've got drawn</li>
				<li>
					<a href="https://github.com/sharonchoong/svg-exportJS">
						export the file
					</a>
				</li>
			</ul>
			<Face />
		</div>
	);
}

export default App;
