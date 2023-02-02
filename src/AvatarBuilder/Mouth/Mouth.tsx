import { FC } from "react";

interface Props {
	mouthShape: string;
	lipColor: string;
}

export const Mouth: FC<Props> = ({ lipColor, mouthShape }) => {
	switch (mouthShape) {
		case "smile":
			return <Smile1 lipColor={lipColor}></Smile1>;
		case "smile2":
			return <Smile2 lipColor={lipColor}></Smile2>;
		default:
			return <Smile2 lipColor={lipColor}></Smile2>;
	}
};

interface LipProps {
	lipColor: string;
}

const Smile1: FC<LipProps> = ({ lipColor }) => {
	return (
		<g id="unibrow_brows_group" transform="translate(186 480)">
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
		<g id="unibrow_brows_group" transform="translate(186 480)">
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
