import { SelectOption } from "../../Shared";

export const HAIR_COLORS: SelectOption[] = [
	{ label: "Black", value: "black" },
	{ label: "Blue", value: "blue" },
	{ label: "Brown", value: "brown" },
	{ label: "Green", value: "green" },
	{ label: "Grey", value: "grey" },
	{ label: "Violet", value: "violet" },
];

export const HAIR_STYLES: SelectOption[] = [
	{ label: "Mid-length", value: "hair1" },
	{ label: "Smooth Bald", value: "bald" },
];

export interface FeatureProps {
	hairStyle: string;
	hairColor: string;
}

export interface FeatureInstanceProps {
	hairColor: string;
}
