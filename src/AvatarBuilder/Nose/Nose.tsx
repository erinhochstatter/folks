import { FC } from "react";

interface Props {
	noseShape: string;
	skinTone: string;
}

export const Nose: FC<Props> = ({ skinTone, noseShape }) => {
	switch (noseShape) {
		case "honk":
			return <BertNose skinTone={skinTone}></BertNose>;
			break;
		default:
			return <BertNose skinTone={skinTone}></BertNose>;
	}
};

interface NoseProps {
	skinTone: string;
}

const BertNose: FC<NoseProps> = ({ skinTone }) => {
	return (
		<g id="bert_nose_group" transform="translate(220 310)">
			<defs>
				<linearGradient id="snootGradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="tan" />
					<stop offset="95%" stopColor={skinTone} />
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
					id="snootPath"
					d="M54.84,.5C38.26-.32-11.56,108.39,3.2,116.69c14.75,8.3,83.91,8.3,92.21,0S73.28,1.43,54.84,.5Z"
				/>
				<clipPath id="noisyPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#snootPath" />
				</clipPath>
			</defs>

			<use href="#snootPath" fill="url(#snootGradient)" />
			<use
				clipPath="url(#noisyPath)"
				href="#snootPath"
				filter="url(#noiseFilter)"
			/>
		</g>
	);
};
