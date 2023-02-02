import { FC } from "react";

interface Props {
	eyeShape: string;
	eyeColor: string;
}

export const Eyes: FC<Props> = ({ eyeColor, eyeShape }) => {
	switch (eyeShape) {
		case "circle":
			return <CircularEyes eyeColor={eyeColor} />;

		case "monolid":
			return <Monolid eyeColor={eyeColor} />;

		default:
			return <CircularEyes eyeColor={eyeColor} />;
	}
};

interface EyeProps {
	eyeColor: string;
}

const CircularEyes: FC<EyeProps> = ({ eyeColor }) => {
	return (
		<g id="circle_eyes_group">
			<defs>
				<linearGradient id="eyeGradient" gradientTransform="rotate(60)">
					<stop offset="5%" stopColor="transparent" />
					<stop offset="95%" stopColor={eyeColor}></stop>
				</linearGradient>
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.65"
						numOctaves="2"
						stitchTiles="stitch"
					/>
				</filter>

				<clipPath id="leftEyeFilter" clipPathUnits="userSpaceOnUse">
					<circle cx="160" cy="300" r="36.5" />
				</clipPath>
				<clipPath id="rightEyeFilter" clipPathUnits="userSpaceOnUse">
					<circle cx="380" cy="300" r="36.5" />
				</clipPath>
			</defs>
			<circle
				fill="url(#eyeGradient)"
				stroke="black"
				cx="160"
				cy="300"
				r="36.5"
			/>
			<circle
				clipPath="url(#leftEyeFilter)"
				filter="url(#noiseFilter)"
				stroke="black"
				cx="160"
				cy="300"
				r="36.5"
			/>
			<circle
				fill="url(#eyeGradient)"
				stroke="black"
				cx="380"
				cy="300"
				r="36.5"
			/>
			<circle
				clipPath="url(#rightEyeFilter)"
				filter="url(#noiseFilter)"
				stroke="black"
				cx="380"
				cy="300"
				r="36.5"
			/>
		</g>
	);
};

const Monolid: FC<EyeProps> = ({ eyeColor }) => {
	return (
		<g id="monolid_eyes_group" transform="translate(85 300)">
			<defs>
				<linearGradient id="eyeGradient" gradientTransform="rotate(60)">
					<stop offset="5%" stopColor="transparent"></stop>
					<stop offset="95%" stopColor={eyeColor}></stop>
				</linearGradient>
				<path
					id="leftEye"
					d="M110.13,7.69C89.38-1.22,70.72-1.25,48.66,4.33c-3.95,14.05,6.14,43.53,28.86,43.48,21.22-.05,37.11-17.73,32.61-40.12Z"
				/>
				<path
					id="rightEye"
					d="M259.3,7.69c20.76-8.91,39.42-8.94,61.47-3.36,3.95,14.05-6.14,43.53-28.86,43.48-21.22-.05-37.11-17.73-32.61-40.12Z"
				/>
				<clipPath id="leftEyeFilter" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#leftEye" />
				</clipPath>
				<clipPath id="rightEyeFilter" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#rightEye" />
				</clipPath>
			</defs>
			<g id="rightEyeGroup">
				<path
					stroke="black"
					fill="white"
					d="M214.55,51.97C223.85,34.32,246.8,2.93,287.74,.83c35.25-1.81,49.38,12.25,64.24,19.8,0,0-12.33,34.84-62.27,34.67-29.68-.1-45.44-9.03-57.62-9.03-10.99,0-17.55,5.7-17.55,5.7"
				/>
				<path
					stroke="black"
					fill="none"
					d="M210.04,62.07c3.29-9.88,26.34-58.61,77.7-61.24,51.36-2.63,56.63,25.68,81.65,23.71"
				/>
				<use href="#rightEye" fill="url(#eyeGradient)" />
				<use
					clipPath="url(#rightEyeFilter)"
					href="#rightEye"
					filter="url(#noiseFilter)"
				/>
			</g>
			<g>
				<path
					stroke="black"
					fill="white"
					d="M154.88,51.97C145.59,34.32,122.64,2.93,81.69,.83,46.45-.98,32.32,13.08,17.45,20.63c0,0,12.33,34.84,62.27,34.67,29.68-.1,45.44-9.03,57.62-9.03,10.99,0,17.55,5.7,17.55,5.7"
				/>
				<path
					stroke="black"
					fill="none"
					d="M159.4,62.07c-3.29-9.88-26.34-58.61-77.7-61.24C30.33-1.8,25.06,26.51,.04,24.54"
				/>
				<use href="#leftEye" fill="url(#eyeGradient)" />
				<use
					clipPath="url(#leftEyeFilter)"
					href="#leftEye"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
