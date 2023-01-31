import { FC, ReactElement, SVGProps } from "react";
import { useSvgImport } from "./useSvgImport";

interface Props {
	imageName: string;
	imageType: "face" | "brow" | "eyes";
	containerStyles?: string;
	svgProps?: SVGProps<SVGSVGElement>;
	children?: ReactElement;
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
						<SvgImage {...svgProps}>
							<circle
								id="pinkster"
								x="50"
								y="150"
								width="50"
								height="50"
								fill="pink"
							/>
							{children}
						</SvgImage>
					</div>
				)}
			</>
		</div>
	);
};
