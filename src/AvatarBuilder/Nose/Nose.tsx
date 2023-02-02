import { FC } from "react";
import { FILL_COLORS } from "../Face/constants";

interface Props {
	noseShape: string;
	skinTone: string;
}

export const Nose: FC<Props> = ({ skinTone, noseShape }) => {
	switch (noseShape) {
		case "honk":
			return <Nose1 skinTone={skinTone}></Nose1>;
			break;
		default:
			return <Nose2 skinTone={skinTone}></Nose2>;
	}
};

interface NoseProps {
	skinTone: string;
}

const Nose1: FC<NoseProps> = ({ skinTone }) => {
	return (
		<g id="nose1_nose_group" transform="translate(220 310)">
			<defs>
				<linearGradient id="nose1Gradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="tan" />
					<stop offset="95%" stopColor={skinTone} />
				</linearGradient>
				<path
					id="nose1Path"
					d="M54.84,.5C38.26-.32-11.56,108.39,3.2,116.69c14.75,8.3,83.91,8.3,92.21,0S73.28,1.43,54.84,.5Z"
				/>
				<clipPath id="nose1ClipPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#nose1Path" />
				</clipPath>
			</defs>

			<use href="#nose1Path" fill="url(#nose1Gradient)" />
			<use
				clipPath="url(#nose1ClipPath)"
				href="#nose1Path"
				filter="url(#noiseFilter)"
			/>
		</g>
	);
};

const Nose2: FC<NoseProps> = ({ skinTone }) => {
	return (
		<g id="nose2_nose_group" transform="translate(210 290)">
			<defs>
				<linearGradient id="nose2Gradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="tan" />
					<stop offset="95%" stopColor={skinTone} />
				</linearGradient>
				<path
					id="nose2Path"
					d="m62.51.08c38.39-3.34,30.73,96.09,42.96,108.71,4.42,4.56,16.14,14.84,16.01,27.79-.02,2.3-5.58,12.5-18.27,15.72-14.78,3.75-20.01,16.72-28.29,17.33-29.68,2.18-34.42-15.16-51.98-14.74-35.25.84-24.53-34.35-3.62-48.72C42.53,90.22,21.87,3.62,62.51.08Z"
				/>

				<clipPath id="nose2ClipPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#nose2Path" />
				</clipPath>
			</defs>
			<g>
				<use href="#nose2Path" fill="url(#nose2Gradient)" />
				<use
					clipPath="url(#nose2ClipPath)"
					href="#nose2Path"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
