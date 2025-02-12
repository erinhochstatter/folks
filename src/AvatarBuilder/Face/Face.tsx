import { BaseSyntheticEvent, FC, useState } from "react";
import { Form } from "../../Shared";
import { Eyes, EYE_COLORS, EYE_SHAPES } from "../Eyes";
import { Brows, BROW_COLORS, BROW_SHAPES } from "../Brows";
import {
	FACE_SHAPES,
	FILL_COLORS,
	FaceShapeProps,
	FaceInstanceProps,
} from "./constants";
import { Mouth, LIP_COLORS, LIP_SHAPES } from "../Mouth";
import { Nose, NOSE_SHAPES } from "../Nose";
import {
	ForegroundHair,
	BackgroundHair,
	HAIR_COLORS,
	HAIR_STYLES,
} from "../Hair";

export const Face: FC = () => {
	// State
	// -- Face
	const [skinTone, setSkinTone] = useState(FILL_COLORS[0].value);
	const [faceShape, setFaceShape] = useState(FACE_SHAPES[0].value);
	// -- Brow
	const [browShape, setBrowShape] = useState(BROW_SHAPES[0].value);
	const [browColor, setBrowColor] = useState(BROW_COLORS[0].value);
	// -- Eyes
	const [eyeShape, setEyeShape] = useState(EYE_SHAPES[0].value);
	const [eyeColor, setEyeColor] = useState(EYE_COLORS[0].value);
	// -- Nose
	const [noseShape, setNoseShape] = useState(NOSE_SHAPES[0].value);
	const [noseColor, setNoseColor] = useState(FILL_COLORS[0].value);
	// -- Lips
	const [lipShape, setLipShape] = useState(LIP_SHAPES[0].value);
	const [lipColor, setLipColor] = useState(LIP_COLORS[0].value);
	// -- Hair
	const [hairStyle, setHairStyle] = useState(HAIR_STYLES[0].value);
	const [hairColor, setHairColor] = useState(HAIR_COLORS[0].value);

	//Events
	// -- Face
	const onFaceShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setFaceShape(value);
	};

	const onFillColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setSkinTone(value);
	};

	// -- Brow
	const onBrowShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setBrowShape(value);
	};

	const onBrowColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setBrowColor(value);
	};

	//-- Eye
	const onEyeShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setEyeShape(value);
	};

	const onEyeColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setEyeColor(value);
	};

	//-- Nose
	const onNoseShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setNoseShape(value);
	};

	const onNoseColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setNoseColor(value);
	};

	//-- Lip
	const onLipShapeChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setLipShape(value);
	};

	const onLipColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setLipColor(value);
	};

	//-- Lip
	const onHairStyleChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setHairStyle(value);
	};

	const onHairColorChange = (event: BaseSyntheticEvent) => {
		const { value } = event.target;
		setHairColor(value);
	};

	const faceShapeTrait = {
		name: "shape",
		options: FACE_SHAPES,
		selectCallback: onFaceShapeChange,
	};

	const skinToneTrait = {
		name: "color",
		options: FILL_COLORS,
		selectCallback: onFillColorChange,
	};

	const browShapeTrait = {
		name: "shape",
		options: BROW_SHAPES,
		selectCallback: onBrowShapeChange,
	};

	const browColorTrait = {
		name: "color",
		options: BROW_COLORS,
		selectCallback: onBrowColorChange,
	};

	const eyeShapeTrait = {
		name: "shape",
		options: EYE_SHAPES,
		selectCallback: onEyeShapeChange,
	};

	const eyeColorTrait = {
		name: "color",
		options: EYE_COLORS,
		selectCallback: onEyeColorChange,
	};

	const noseShapeTrait = {
		name: "shape",
		options: NOSE_SHAPES,
		selectCallback: onNoseShapeChange,
	};

	const noseColorTrait = {
		name: "color",
		options: FILL_COLORS,
		selectCallback: onNoseColorChange,
	};

	const lipShapeTrait = {
		name: "shape",
		options: LIP_SHAPES,
		selectCallback: onLipShapeChange,
	};

	const lipColorTrait = {
		name: "color",
		options: LIP_COLORS,
		selectCallback: onLipColorChange,
	};

	const hairStyleTrait = {
		name: "shape",
		options: HAIR_STYLES,
		selectCallback: onHairStyleChange,
	};

	const hairColorTrait = {
		name: "color",
		options: HAIR_COLORS,
		selectCallback: onHairColorChange,
	};

	return (
		<div style={{ height: 720 }}>
			<svg
				id="face"
				xmlns="http://www.w3.org/2000/svg"
				width="551"
				height="720"
				viewBox="0 0 500 500"
			>
				{/* <BackgroundHair hairStyle={hairStyle} hairColor={hairColor} /> */}
				<FaceShape shape={faceShape} skinTone={skinTone}>
					<Brows browShape={browShape} browColor={browColor} />
					<Eyes eyeShape={eyeShape} eyeColor={eyeColor} />
					<Nose noseShape={noseShape} skinTone={noseColor} />
					<Mouth mouthShape={lipShape} lipColor={lipColor} />
				</FaceShape>
				{/* <ForegroundHair hairStyle={hairStyle} hairColor={hairColor} /> */}
			</svg>
			<Form title="face" svgTraits={[faceShapeTrait, skinToneTrait]} />
			{/* <Form title="hair" svgTraits={[hairStyleTrait, hairColorTrait]} /> */}
			<Form title="brow" svgTraits={[browShapeTrait, browColorTrait]} />
			<Form title="eyes" svgTraits={[eyeShapeTrait, eyeColorTrait]} />
			<Form title="nose" svgTraits={[noseShapeTrait, noseColorTrait]} />
			<Form title="mouth" svgTraits={[lipShapeTrait, lipColorTrait]} />
		</div>
	);
};

const FaceShape: FC<FaceShapeProps> = ({ skinTone, shape, children }) => {
	switch (shape) {
		case "oval":
			return <OvalFace skinTone={skinTone}>{children}</OvalFace>;
		case "heart":
			return <HeartFace skinTone={skinTone}>{children}</HeartFace>;
		case "square":
			return <SquareFace skinTone={skinTone}>{children}</SquareFace>;

		default:
			return <OvalFace skinTone={skinTone}>{children}</OvalFace>;
	}
};

const OvalFace: FC<FaceInstanceProps> = ({ skinTone: fillColor, children }) => {
	return (
		<g id="face-group" transform="scale(0.75, .75)">
			<ellipse fill={fillColor} cx="275.5" cy="353.34" rx="275" ry="352.84" />
			{children}
		</g>
	);
};

const HeartFace: FC<FaceInstanceProps> = ({
	skinTone: fillColor,
	children,
}) => {
	return (
		<g id="face-group" transform="scale(0.75, .75)">
			<path
				fill={fillColor}
				d="M550.5,307.59c0,194.87-178.06,407.51-275,407.51S.5,502.46,.5,307.59,123.62,.5,275.5,.5s275,112.22,275,307.09Z"
			/>
			{children}
		</g>
	);
};

const SquareFace: FC<FaceInstanceProps> = ({
	skinTone: fillColor,
	children,
}) => {
	return (
		<g id="face-group" transform="scale(0.75, .75)">
			<path
				fill={fillColor}
				d="m550.5,307.59c0,124.69-72.9,294.58-150.8,373.46-43.85,44.4-89.29,34.05-124.2,34.05s-76.26,6.86-118.24-34.05C77.16,602.97.5,435.45.5,307.59.5,112.72,123.62.5,275.5.5s275,112.22,275,307.09Z"
			/>
			{children}
		</g>
	);
};
