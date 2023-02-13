import { FC } from "react";

interface Props {
	browShape: string;
	browColor: string;
}

export const Brows: FC<Props> = ({ browColor, browShape }) => {
	switch (browShape) {
		case "tapered":
			return <Tapered browColor={browColor} />;
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

const Tapered: FC<BrowProps> = ({ browColor }) => {
	return (
		<g id="tapered_brows_group" transform="translate(120 200)">
			<defs>
				<linearGradient id="taperedBrowGradient" gradientTransform="rotate(60)">
					<stop offset="5%" stopColor="gold" />
					<stop offset="95%" stopColor={browColor} />
				</linearGradient>
				<path
					id="taperedLeft"
					d="m137.04,38.17c-6.6,3.07-59.18-10.07-106.72,12.19C17.33,56.45,11.45,63.46.07,75.21c-1.14-2.12,12.53-26.76,29.92-36.93,16.94-9.9,31.57-14.68,59.92-19.63,9.45-1.65,37.95-1.32,45.16,2.96,0,0,9.23,13.18,1.97,16.56Z"
				/>
				<path
					id="taperedRt"
					d="m244.02,33.1c6.09,1.18,47.22-25.56,91.16-16.93,12.01,2.36,18.29,7.52,30.07,15.75.53-2.34-15.71-22.36-32.18-27.46s-29.16-5.64-53.71-2.78c-8.18.95-31.83,8.92-36.97,14.97,0,0-5.07,15.14,1.63,16.44Z"
				/>
				<clipPath id="turbulenttaperedLeft" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#taperedLeft" />
				</clipPath>
				<clipPath id="turbulenttaperedRt" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#taperedRt" />
				</clipPath>
			</defs>
			<use href="#taperedRt" fill="url(#browGradient)" />
			{/* <g>
				<use
					clipPath="url(#taperedRtFilter)"
					href="#taperedRt"
					filter="url(#noiseFilter)"
				/>
			</g> */}
			<g>
				<use href="#taperedLeft" fill="url(#browGradient)" />
				<use
					clipPath="url(#turbulenttaperedLeft)"
					href="#taperedLeft"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
