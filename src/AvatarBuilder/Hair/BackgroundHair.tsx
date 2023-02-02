import { FC } from "react";
import { FeatureProps, FeatureInstanceProps } from "./constants";

export const BackgroundHair: FC<FeatureProps> = ({ hairColor, hairStyle }) => {
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
		<g id="hair1_background_group" transform="translate(85 300)">
			<defs>
				<linearGradient id="hairGradient" gradientTransform="rotate(60)">
					<stop offset="5%" stopColor="transparent"></stop>
					<stop offset="95%" stopColor={hairColor}></stop>
				</linearGradient>
				<path
					id="leftSideHair"
					d="m177.85,357.79c-78.51,28.46-134.67,101.98-159.24,181.8-24.57,79.82-21.37,165.58-10.11,248.33.56-28.17,7.01-56.2,18.82-81.78-.29,40.66,4.95,81.35,15.54,120.61-2.63-30.86-1.05-62.08,4.68-92.51,12.36,43.63,31.34,85.38,56.08,123.38,81.63-36.66,147.26-112.35,161.64-200.67,8.62-52.93-.77-107.09-13.22-159.25-12.77-53.5-32.1-110.82-78.55-140.26"
				/>
				<path
					id="rightSideHair"
					d="m608.03,572.64c-17.52,29.32-35.37,59.54-40.93,93.24-5.57,33.7,3.9,72.16,31.89,91.74,20.78,14.53,47.8,16.41,73.11,14.85,1.7-76.33,30.6-149.4,40.08-225.16,2.9-23.15,3.97-46.5,4.31-69.83.7-48.48-1.78-97.01-7.42-145.16-7.54-64.47-21-129.02-49.33-187.43-28.33-58.4-72.64-110.58-130.68-139.65-8.08-4.05-17.9-7.6-25.81-3.22-10.95,6.08-9.92,22.14-5.85,33.99,7.97,23.19,21.58,43.94,34.06,65.05,63.58,107.57,100.13,230.98,105.39,355.82.45,10.79.66,21.76-2.09,32.2-3.28,12.46-10.56,23.4-16.81,34.67-12.92,23.33-21.72,48.93-25.87,75.27"
				/>
				<clipPath id="leftSideFilter" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#leftSideHair" />
				</clipPath>
				<clipPath id="rightSideFilter" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#rightSideHair" />
				</clipPath>
			</defs>
			<g>
				<use href="#leftSideHair" fill="url(#hairGradient)" />
				<use
					clipPath="url(#leftSideHairFilter)"
					href="#leftSideHair"
					filter="url(#noiseFilter)"
				/>
			</g>
			<g>
				<use href="#rightSideHair" fill="url(#hairGradient)" />
				<use
					clipPath="url(#rightSideHairFilter)"
					href="#rightSideHair"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
