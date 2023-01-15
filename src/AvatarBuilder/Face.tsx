import { BaseSyntheticEvent, FC, useState } from "react";
import { SvgComponent } from "./SvgComponent";
import { Form, SelectOption } from "../Shared";

interface Props {
	svgProps?: React.SVGProps<SVGSVGElement>;
}

export const Face: FC<Props> = (props: Props) => {
	const FILL_COLORS: SelectOption[] = [
		{ label: "Champagne", value: "#FAE7D0" },
		{ label: "Zombie", value: "#dfc183" },
		{ label: "demerara", value: "#aa724b" },
		{ label: "peachy", value: "#ffcb99" },
		{ label: "putty", value: "#ceab69" },
		{ label: "coco", value: "#945d37" },
		{ label: "pinky", value: "#feb187" },
		{ label: "korma", value: "#7c4b2a" },
		{ label: "walnut", value: "#483628" },
	];

	const FACE_SHAPES: SelectOption[] = [
		{ label: "Heart-Shaped", value: "heart" },
		{ label: "Oval-Shaped", value: "oval" },
	];

	const [fillColor, setFillColor] = useState(FILL_COLORS[0].value);
	const [fileName, setFileName] = useState(FACE_SHAPES[0].value);

	const onFaceShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setFileName(value);
	};

	const onFillColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setFillColor(value);
	};
	const shapeTrait = {
		name: "shape",
		options: FACE_SHAPES,
		selectCallback: onFaceShapeChange,
	};

	const colorTrait = {
		name: "color",
		options: FILL_COLORS,
		selectCallback: onFillColorChange,
	};

	return (
		<div>
			<SvgComponent
				imageType="face"
				imageName={fileName}
				svgProps={{ fill: fillColor }}
			/>
			<Form title="face" svgTraits={[shapeTrait, colorTrait]} />
		</div>
	);
};
