import "./App.css";
import { Face } from "./AvatarBuilder";
import { Face2 } from "./AvatarBuilder/Face2";

function App() {
	return (
		<div className="App">
			<h1>things to think about</h1>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
				}}
			>
				<li> being able to generate an image from the component svgs</li>
				<li> making a list of possible facial features</li>
				<li> making a list of each feature we've got drawn</li>
				<li>
					{" "}
					be able to change the tint & / or gradient for a feature (e.g. eye
					color, hair color)
				</li>
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
