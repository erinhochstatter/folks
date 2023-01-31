import { FC } from "react";

interface Props {
	browShape: string;
	browColor: string;
}

export const Brows: FC<Props> = ({ browColor, browShape }) => {
	switch (browShape) {
		default:
			return <Unibrow browColor={browColor} />;
	}
};

interface BrowProps {
	browColor: string;
}

const Unibrow: FC<BrowProps> = ({ browColor }) => {
	return (
		<g
			id="unibrow_brows_group"
			data-name="brows_01_group"
			transform="translate(120 200)"
		>
			<defs>
				<linearGradient id="browGradient" gradientTransform="rotate(60)">
					<stop offset="5%" stopColor="gold" />
					<stop offset="95%" stopColor={browColor} />
				</linearGradient>
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.65"
						numOctaves="2"
						stitchTiles="stitch"
					/>
				</filter>
			</defs>

			<rect
				width="100%"
				height="100%"
				rx="12"
				ry="12"
				filter="url(#noiseFilter)"
			/>
			<rect
				x="0"
				y="0"
				width="300"
				height="40"
				rx="12"
				ry="12"
				fill="url(#browGradient)"
			/>
		</g>
	);
};
