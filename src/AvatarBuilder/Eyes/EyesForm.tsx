import { BaseSyntheticEvent, useState } from "react";
import { Form } from "../../Shared";

export const EyesForm: FC<Props> = (props: Props) => {
	const EYE_SHAPES: SelectOption[] = [
		{ label: "Monolid", value: "monolid" },
		{ label: "Just Round", value: "circle" },
	];

	const FILL_COLORS: SelectOption[] = [
		{ label: "Black", value: "black" },
		{ label: "Blue", value: "blue" },
		{ label: "Brown", value: "brown" },
		{ label: "Green", value: "green" },
		{ label: "Grey", value: "grey" },
		{ label: "Violet", value: "violet" },
	];

	const [fileName, setFileName] = useState(EYE_SHAPES[0].value);
	const [fillColor, setFillColor] = useState(FILL_COLORS[0].value);

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
		options: FILL_COLORS,
		selectCallback: onFillColorChange,
	};

	return (
		<div>
			<Form title="eyes" svgTraits={[shapeTrait, colorTrait]} />
		</div>
	);
};
