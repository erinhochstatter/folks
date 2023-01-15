import { FC, BaseSyntheticEvent } from "react";

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
		<div>
			<h1>{title}</h1>
			<form id={`${title}-svg-options`}>
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
		<div>
			<span id={`${formName}-shape-label`}>{`Choose a ${name}`}</span>
			<select
				aria-labelledby="${title.uppercase} selector"
				value={options[0].label}
				onChange={selectCallback}
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
