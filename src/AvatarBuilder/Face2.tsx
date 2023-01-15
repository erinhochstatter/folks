import { FC, ReactNode } from "react";
export const Face2: FC = () => {
	return (
		<div>
			<svg
				id="oval-face"
				data-name="oval-face"
				xmlns="http://www.w3.org/2000/svg"
				width="551"
				height="706.69"
				viewBox="0 0 551 706.69"
			></svg>
		</div>
	);
};

type FaceShapeProps = {
	eyes: ReactNode;
};

const OvalFace: FC<FaceShapeProps> = ({ eyes }) => {
	return (
		<g id="face-group" data-name="oval-face-group">
			{eyes}
			<ellipse cx="275.5" cy="353.34" rx="275" ry="352.84" />
		</g>
	);
};

const HeartFace: FC<FaceShapeProps> = ({ eyes }) => {
	return (
		<g id="face-group" data-name="heart-face-group">
			{eyes}
			<path d="M550.5,307.59c0,194.87-178.06,407.51-275,407.51S.5,502.46,.5,307.59,123.62,.5,275.5,.5s275,112.22,275,307.09Z" />
		</g>
	);
};

const CircularEyes: FC = () => {
	return (
		<g id="circle_eyes_group" data-name="eyes_01_group">
			<circle fill="none" stroke="black" cx="37" cy="37.28" r="36.5" />
			<circle fill="none" stroke="black" cx="177.33" cy="37" r="36.5" />
		</g>
	);
};
