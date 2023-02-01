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
		<g id="unibrow_brows_group" transform="translate(120 200)">
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
				<rect
					id="unibrow"
					x="0"
					y="0"
					width="300"
					height="40"
					rx="12"
					ry="12"
				/>

				<clipPath id="turbulentUnibrow" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#unibrow" />
				</clipPath>
			</defs>

			<use href="#unibrow" fill="url(#browGradient)" />
			<use
				clipPath="url(#turbulentUnibrow)"
				href="#unibrow"
				filter="url(#noiseFilter)"
			/>
		</g>
	);
};
