import { BaseSyntheticEvent, FC, useState } from "react";
import { SvgComponent } from "../SvgComponent";
import { Form } from "../../Shared";
import { FILL_COLORS, FACE_SHAPES } from "./constants";

interface Props {
	svgProps?: React.SVGProps<SVGSVGElement>;
}

export const Face2: FC<Props> = (props: Props) => {
	return (
		<div>
			<SvgComponent
				imageType="face"
				imageName={"oval"}
				svgProps={{ fill: "pinky" }}
			/>
		</div>
	);
};
