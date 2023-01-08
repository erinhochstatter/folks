import { FC, ReactNode } from "react";
import { useSvgImport } from "./useSvgImport";

interface Props {
	imageName: string;
	imageType: "face" | "brow";
	containerStyles?: string;
	svgProps?: React.SVGProps<SVGSVGElement>;
	children?: ReactNode;
}

export const SvgComponent: FC<Props> = ({
	imageName,
	imageType,
	svgProps,
	containerStyles,
	children,
}: Props) => {
	const { loading, SvgImage } = useSvgImport(imageName, imageType);

	return (
		<div>
			<>
				{loading && (
					<div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
				)}
				{SvgImage && (
					<div className={containerStyles}>
						<SvgImage {...svgProps} />
						{children}
					</div>
				)}
			</>
		</div>
	);
};
