import { FC } from "react";
import { lightenDarkenColor } from "../../Shared";

interface Props {
	browShape: string;
	browColor: string;
}

export const Brows: FC<Props> = ({ browColor, browShape }) => {
	switch (browShape) {
		case "unibrow":
			return <Unibrow browColor={browColor} />;
		case "brows1":
			return <Brows1 browColor={browColor} />;
		case "brows2":
			return <Brows2 browColor={browColor} />;
		default:
			return <Brows1 browColor={browColor} />;
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

const Brows1: FC<BrowProps> = ({ browColor }) => {
	return (
		<g id="brows1_group" transform="translate(100 180), rotate(4)">
			<defs>
				<linearGradient id="brows1Gradient" gradientTransform="rotate(90)">
					<stop offset="2%" stopColor={lightenDarkenColor(browColor, -20)} />
					<stop offset="60%" stopColor={browColor} />
					<stop offset="95%" stopColor={lightenDarkenColor(browColor, -80)} />
				</linearGradient>
				<path
					id="brows1_left"
					d="m137.04,38.17c-6.6,3.07-59.18-10.07-106.72,12.19C17.33,56.45,11.45,63.46.07,75.21c-1.14-2.12,12.53-26.76,29.92-36.93,16.94-9.9,31.57-14.68,59.92-19.63,9.45-1.65,37.95-1.32,45.16,2.96,0,0,9.23,13.18,1.97,16.56Z"
				/>
				<path
					id="brows1_right"
					d="m244.02,33.1c6.09,1.18,47.22-25.56,91.16-16.93,12.01,2.36,18.29,7.52,30.07,15.75.53-2.34-15.71-22.36-32.18-27.46s-29.16-5.64-53.71-2.78c-8.18.95-31.83,8.92-36.97,14.97,0,0-5.07,15.14,1.63,16.44Z"
				/>
				<clipPath id="brows1Filter_left" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#brows1_left" />
				</clipPath>
				<clipPath id="brows1Filter_right" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#brows1_right" />
				</clipPath>
			</defs>

			<use href="#brows1_right" fill="url(#brows1Gradient)" />
			<g>
				<use
					clipPath="url(#brows1Filter_right)"
					href="#brows1_right"
					filter="url(#noiseFilter)"
				/>
			</g>
			<g>
				<use href="#brows1_left" fill="url(#brows1Gradient)" />
				<use
					clipPath="url(#brows1Filter_left)"
					href="#brows1_left"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};

const Brows2: FC<BrowProps> = ({ browColor }) => {
	return (
		<g id="brows2_group" transform="translate(100 180), scale(1.1), rotate(-1)">
			<defs>
				<linearGradient id="brows2Gradient" gradientTransform="rotate(90)">
					<stop offset="2%" stopColor={lightenDarkenColor(browColor, -20)} />
					<stop offset="60%" stopColor={browColor} />
					<stop offset="95%" stopColor={lightenDarkenColor(browColor, -80)} />
				</linearGradient>
				<path
					id="brows2_left"
					d="m114.64,22.95c-2.29.72-14.66,1.91-23.15-.3-10.08-2.62-21.96-10.23-42.44-8.88C30.03,15.02,9.67,41.75.51,49.51-.14,47.7,27.03,13.63,40.4,7.88,53.41,2.28,65.28-.67,86.93.93c8.67.64,16.71,2.97,21.54,7.24,0,0,11.67,13.05,6.17,14.77Z"
				/>
				<path
					id="brows2_right"
					d="m183.65,25.43c2.21.93,14.41,3.29,23.07,1.88,10.28-1.66,22.82-8.11,43.09-4.84,18.83,3.04,36.57,31.57,44.96,40.16.82-1.74-23.02-38.22-35.78-45.2-12.43-6.8-23.97-10.86-45.67-11.3-8.69-.18-16.91,1.38-22.13,5.18,0,0-12.85,11.89-7.53,14.13Z"
				/>
				<clipPath id="brows2Filter_left" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#brows2_left" />
				</clipPath>
				<clipPath id="brows2Filter_right" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#brows2_right" />
				</clipPath>
			</defs>

			<use href="#brows2_right" fill="url(#brows2Gradient)" />
			<g>
				<use
					clipPath="url(#brows2Filter_right)"
					href="#brows2_right"
					filter="url(#noiseFilter)"
				/>
			</g>
			<g>
				<use href="#brows2_left" fill="url(#brows2Gradient)" />
				<use
					clipPath="url(#brows2Filter_left)"
					href="#brows2_left"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
