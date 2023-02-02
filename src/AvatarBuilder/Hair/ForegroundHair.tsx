import { FC } from "react";
import { FeatureProps, FeatureInstanceProps } from "./constants";

export const ForegroundHair: FC<FeatureProps> = ({ hairColor, hairStyle }) => {
	switch (hairStyle) {
		case "bald":
			return <></>;

		case "hair1":
			return <Hair1 hairColor={hairColor}></Hair1>;

		default:
			return <Hair1 hairColor={hairColor}></Hair1>;
	}
};

const Hair1: FC<FeatureInstanceProps> = ({ hairColor }) => {
	return (
		<g id="Hair1_group" transform="translate(-180 -8) scale(1.1, 1.1)">
			<defs>
				<linearGradient id="hairGradient" gradientTransform="rotate(60)">
					<stop offset="5%" stopColor="transparent"></stop>
					<stop offset="95%" stopColor={hairColor}></stop>
				</linearGradient>
				<path
					id="bangs"
					d="m509.74,143.69c23.18,10.16,53.68,1.15,65.93-21,4.36-7.89,11.88-21.08,14.83-35.24,5.34-25.62-30.21-79.88-100.51-86.28-117.38-10.67-250.08,108.59-263.7,130.09-8.57,13.53-20.59,24.65-28.75,38.43-8.42,14.2-12.35,30.53-16.69,46.46-33.68,123.55-59.11,230.56-122.57,341.78,10.48-8.61,20.95-17.21,31.43-25.82-22.88,46.64-37.8,97.17-43.94,148.76,12.22-27.42,28.73-52.93,48.73-75.33-2.56,28.42-19.05,53.33-33.17,78.12-28.67,50.32-49.3,105.21-60.86,161.96,6.23-37.47,30.75-69.4,58.25-95.6,27.5-26.2,58.75-48.46,84.33-76.54,46.98-51.57,71.7-119.06,95.33-184.7,13.69-38.03,35.85-12.93,44.83-52.34,9.91-43.47,5.72-152.01,23.86-192.74,17.6-39.52,48.68-73.47,87.93-91.67,39.25-18.2,114.73-8.34,114.73-8.34Z"
				/>
				<clipPath id="bangsFilter" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#bangs" />
				</clipPath>
			</defs>
			<g>
				<use href="#bangs" fill="url(#hairGradient)" />
				<use
					clipPath="url(#bangsFilter)"
					href="#bangs"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
