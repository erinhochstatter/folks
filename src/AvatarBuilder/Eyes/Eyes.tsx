import { BaseSyntheticEvent, useState } from "react";
import { SvgComponent } from "../SvgComponent";

interface Props {
	svgProps?: React.SVGProps<SVGSVGElement>;
}

type SelectOption = {
	label: string;
	value: string;
};

export const Eyes: FC<Props> = (props: Props) => {
	const FILL_COLORS: SelectOption[] = [
		{ label: "Black", value: "black" },
		{ label: "Blue", value: "blue" },
		{ label: "Brown", value: "brown" },
		{ label: "Green", value: "green" },
		{ label: "Grey", value: "grey" },
		{ label: "Violet", value: "violet" },
	];

	const EYE_SHAPES: SelectOption[] = [
		{ label: "Monolid", value: "monolid" },
		{ label: "Just Round", value: "circle" },
	];

	const [fillColor, setFillColor] = useState(FILL_COLORS[0].value);
	const [fileName, setFileName] = useState(EYE_SHAPES[0].value);

	function onFaceShapeChange(event: BaseSyntheticEvent) {
		const { value } = event.target;
		setFileName(value);
	}

	function onFillColorChange(event: BaseSyntheticEvent) {
		const { value } = event.target;
		setFillColor(value);
	}

	return (
		<div>
			<SvgComponent
				imageType="eyes"
				imageName={fileName}
				svgProps={{ fill: fillColor }}
			/>
			{/* <form id="face-svg-options">
				<div>
					<span id="face-shape-label">Choose a face shape</span>
					<select
						aria-labelledby="Faceshape selector"
						value={fileName}
						onChange={onFaceShapeChange}
					>
						{EYE_SHAPES.map((option) => (
							<option value={option.value} key={option.label}>
								{option.label}
							</option>
						))}
					</select>
				</div>
				<div>
					<span aria-labelledby="Skintone selector" id="face-skintone-label">
						Choose a skin tone
					</span>
					<select onChange={onFillColorChange}>
						{FILL_COLORS.map((option) => (
							<option value={option.value} key={option.label}>
								{option.label}
							</option>
						))}
					</select>
				</div>
			</form> */}
		</div>
	);
};
