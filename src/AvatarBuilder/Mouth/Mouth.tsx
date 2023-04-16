import { FC } from "react";

interface Props {
	mouthShape: string;
	lipColor: string;
}

export const Mouth: FC<Props> = ({ lipColor, mouthShape }) => {
	switch (mouthShape) {
		case "smile":
			return <Smile1 lipColor={lipColor}></Smile1>;
		case "smile3":
			return <Smile3 lipColor={lipColor}></Smile3>;
		default:
			return <Smile2 lipColor={lipColor}></Smile2>;
	}
};

interface LipProps {
	lipColor: string;
}

const Smile1: FC<LipProps> = ({ lipColor }) => {
	return (
		<g id="smile1_group" transform="translate(186 480)">
			<defs>
				<linearGradient id="lipGradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="paleVioletRed" />
					<stop offset="95%" stopColor={lipColor} />
				</linearGradient>
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.65"
						numOctaves="2"
						stitchTiles="stitch"
					/>
				</filter>
				<path
					id="smilePath"
					d="M84.87,96.21C156.29,96.21,164.87,.5,164.87,.5H.58S14.87,96.21,84.87,96.21Z"
				/>
				<clipPath id="smile1ClipPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#smilePath" />
				</clipPath>
			</defs>

			<use href="#smilePath" fill="url(#lipGradient)" />
			<use
				clipPath="url(#smile1ClipPath)"
				href="#smilePath"
				filter="url(#noiseFilter)"
			/>
		</g>
	);
};

const Smile2: FC<LipProps> = ({ lipColor }) => {
	return (
		<g id="smile_group" transform="translate(186 480)">
			<defs>
				<linearGradient id="smile2gradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="paleVioletRed" />
					<stop offset="95%" stopColor={lipColor} />
				</linearGradient>
				<path
					id="smile2Top"
					d="m206.58,1.76c-38.5,48.31-75.6,53.74-85.05,54.28C38.04,60.83,29.13,33.91.89,31.74c0,0,40.83,73.03,121.71,59.09C195.34,78.3,206.58,1.76,206.58,1.76Z"
				/>
				<path
					id="smile2Bottom"
					d="m201.54,8.98l-67.13-3.62c-2.26.48-4.39,1.44-6.25,2.81l-1.72.91c-4.62,2.44-9.91,3.32-15.07,2.48l-5.21-.84c-2.52-.41-5.08-.52-7.63-.33L10.47,32.59s52.96,5.92,102.08.75c65.19-6.87,64.6-17.42,88.99-24.35Z"
				/>
				<clipPath id="smile2TopPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#smile2Top" />
				</clipPath>
				<clipPath id="smile2BottomPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#smile2Bottom" />
				</clipPath>
			</defs>
			<g>
				<use href="#smile2Top" fill="url(#smile2gradient)" />
				<use
					clipPath="url(#smile2TopPath)"
					href="#smile2Top"
					filter="url(#noiseFilter)"
				/>
				<path
					id="smile2Teeth"
					fill="white"
					d="m200.86,7.75s-32.23,24.23-78.99,30.25c-62.2,8-99.24-3.97-111.4-4.92L200.86,7.75Z"
				/>
			</g>
			<g>
				<use href="#smile2Bottom" fill="url(#smile2gradient)" />
				<use
					clipPath="url(#smile2BottomPath)"
					href="#smile2Bottom"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};

const Smile3: FC<LipProps> = ({ lipColor }) => {
	return (
		<g id="smile3_group" transform="translate(186 480)">
			<defs>
				<linearGradient id="smile3gradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="paleVioletRed" />
					<stop offset="95%" stopColor={lipColor} />
				</linearGradient>
				<path
					id="smile3Teeth"
					fill="white"
					d="m.25,20.2l10.1-2.85c6.15,1,26.04,2.84,32.21,3.74,6.65.97,13.39,1.15,20.11,1.31,30.39.72,41.98,2.77,72.38,2.55,6.4-.05,33.57-1.55,39.14,1.6l10.66,1.78c-9.29-7.16-22.27-9.49-32.59-15.08-5.17-2.81-33.7-12.95-41.06-12.32-7.7.66-15.91,3.08-39.01,1.54S34.23.43.25,20.2"
				/>
				<path
					id="smile3Top"
					d="m.8,19.79c15.51-8.14,36-6.03,53.52-5.89s24.57,3.76,42.09,3.67c8.07-.04,26.59-1.95,34.59-.89,18.53,2.44,40.11,8.03,54.41,11.25-9.29-7.16-22.27-9.49-32.59-15.08C147.65,10.04,119.12-.1,111.77.53c-7.7.66-15.91,3.08-39.01,1.54S34.78.01.8,19.79"
				/>
				<path
					id="smile3Bottom"
					d="m3.96,19.47c2.5,3.39,35.2,20.73,49.16,22.74,20.04,2.88,39.38,7.83,63.27,3.39,19.93-3.71,57.59-4.39,69.02-17.67-16.06,20.98-63.17,44.02-101.68,41.62C35.16,66.52,4.67,24.31,1.52,18.32"
				/>
				<clipPath id="smile3TopPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#smile3Top" />
				</clipPath>
				<clipPath id="smile3BottomPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#smile3Bottom" />
				</clipPath>
			</defs>
			<g>
				<use href="#smile3Top" fill="url(#smile3gradient)" />
				<use
					clipPath="url(#smile3TopPath)"
					href="#smile3Top"
					filter="url(#noiseFilter)"
				/>
			</g>
			<g>
				<use href="#smile3Bottom" fill="url(#smile3gradient)" />
				<use
					clipPath="url(#smile3BottomPath)"
					href="#smile3Bottom"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
