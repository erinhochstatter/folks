export interface FormProps {
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

export const Form: FC<FormProps> = ({ title, svgTraits }: FormProps) => {
	return (
		<div>
			<h1>{title}</h1>
			<form id={`${title}-svg-options`}>
				{svgTraits.map((trait) => (
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
