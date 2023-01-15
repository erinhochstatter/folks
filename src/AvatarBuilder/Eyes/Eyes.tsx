import { BaseSyntheticEvent, FC, useState } from "react";
import { SvgComponent } from "../SvgComponent";
import { EYE_COLORS, EYE_SHAPES } from "./constants";

interface Props {
	svgProps?: React.SVGProps<SVGSVGElement>;
}

export const Eyes: FC<Props> = (props: Props) => {
	const [fillColor, setFillColor] = useState(EYE_COLORS[0].value);
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
		<SvgComponent
			imageType="eyes"
			imageName={fileName}
			svgProps={{ fill: fillColor }}
		/>
	);
};
