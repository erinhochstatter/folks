import { FC } from "react";

interface Props {
	mouthShape: string;
	lipColor: string;
}

export const Mouth: FC<Props> = ({ lipColor, mouthShape }) => {
	switch (mouthShape) {
		case "smile":
			return <MuppetSmile lipColor={lipColor}></MuppetSmile>;

		default:
			return <MuppetSmile lipColor={lipColor}></MuppetSmile>;
	}
};

interface LipProps {
	lipColor: string;
}

const MuppetSmile: FC<LipProps> = ({ lipColor }) => {
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
				<clipPath id="noisyPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#smilePath" />
				</clipPath>
			</defs>

			<use href="#smilePath" fill="url(#lipGradient)" />
			<use
				clipPath="url(#noisyPath)"
				href="#smilePath"
				filter="url(#noiseFilter)"
			/>
		</g>
	);
};
