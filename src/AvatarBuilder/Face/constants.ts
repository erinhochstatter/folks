import { ReactNode } from "react";
import { SelectOption } from "../../Shared";

// -- options
export const FILL_COLORS: SelectOption[] = [
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

export const FACE_SHAPES: SelectOption[] = [
	{ label: "Heart-Shaped", value: "heart" },
	{ label: "Oval-Shaped", value: "oval" },
	{ label: "Square-Shaped", value: "square" },
];

// -- types
export type FaceShapeProps = {
	shape: string;
	skinTone?: string;
	children: ReactNode;
};

export type FaceInstanceProps = {
	skinTone?: string;
	children: ReactNode;
};
