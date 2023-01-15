import { BaseSyntheticEvent, FC, useState } from "react";
import { EYE_COLORS, EYE_SHAPES } from "./constants";
import { Form } from "../../Shared";

export const EyesForm: FC = () => {
	const [fileName, setFileName] = useState(EYE_SHAPES[0].value);
	const [fillColor, setFillColor] = useState(EYE_COLORS[0].value);

	const onEyeShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setFileName(value);
	};

	const onFillColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setFillColor(value);
	};

	const shapeTrait = {
		name: "shape",
		options: EYE_SHAPES,
		selectCallback: onEyeShapeChange,
	};

	const colorTrait = {
		name: "color",
		options: EYE_COLORS,
		selectCallback: onFillColorChange,
	};

	return (
		<div>
			<Form title="eyes" svgTraits={[shapeTrait, colorTrait]} />
		</div>
	);
};
