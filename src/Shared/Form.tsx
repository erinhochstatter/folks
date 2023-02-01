import { FC, BaseSyntheticEvent, ReactElement } from "react";

export interface Props {
	title: string;
	svgTraits: SvgTrait[];
}

export interface SelectOption {
	label: string;
	value: string;
}

export interface SvgTrait {
	name: string;
	options: SelectOption[];
	selectCallback: (event: BaseSyntheticEvent) => void;
}

export const Form: FC<Props> = ({ title, svgTraits }: Props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "space-between",
				border: "1px solid",
				borderColor: "white",
				borderRadius: 12,
				marginBottom: 8,
				padding: 8,
			}}
		>
			<h1
				style={{
					flex: 1,
					fontSize: 20,
				}}
			>
				{title}
			</h1>
			<form
				id={`${title}-svg-options`}
				style={{
					flex: 1,
					fontSize: 16,
					flexDirection: "column",
					alignItems: "flex-start",
				}}
			>
				{svgTraits.map((trait: SvgTrait) => (
					<Select key={trait.name} trait={trait} formName={title} />
				))}
			</form>
		</div>
	);
};

interface SelectProps {
	trait: SvgTrait;
	formName: string;
}
export const Select: FC<SelectProps> = ({ trait, formName }: SelectProps) => {
	const { name, options, selectCallback } = trait;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				padding: "4 16",
				justifyContent: "space-between",
			}}
		>
			<span id={`${formName}-shape-label`}>{`Choose a ${name}`}</span>
			<select
				aria-labelledby="${title.uppercase} selector"
				onChange={selectCallback}
				style={{ width: 120 }}
			>
				{options.map((option) => (
					<option value={option.value} key={option.label}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
