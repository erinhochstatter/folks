import { FC } from "react";
import { lightenDarkenColor } from "../../Shared";

interface Props {
	noseShape: string;
	skinTone: string;
}

export const Nose: FC<Props> = ({ skinTone, noseShape }) => {
	switch (noseShape) {
		case "honk":
			return <Nose1 skinTone={skinTone}></Nose1>;
		case "nose3":
			return <Nose3 skinTone={skinTone}></Nose3>;
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

const Nose3: FC<NoseProps> = ({ skinTone }) => {
	return (
		<g id="nose3_nose_group" transform="translate(210 290)">
			<defs>
				<linearGradient id="nose3Gradient" gradientTransform="rotate(30)">
					<stop offset="5%" stopColor="tan" />
					<stop offset="95%" stopColor={skinTone} />
				</linearGradient>
				<path
					id="nose3Path"
					d="m63.77.52c-28.33-1.36-15.89,65.74-39.68,80.99-10.98,7.04-35.52,21.44-16.72,39.21,3.28,3.1,16.07,5.38,21.38,5.66,11.74.63,10.94,11.48,21.06,12.08,20.05,1.21,22.6-10.05,52.59-9.91,18.48.08,16.9-20.69-6.04-40.92C81.13,74.2,94.63,2,63.77.52Z"
				/>

				<clipPath id="nose3ClipPath" clipPathUnits="userSpaceOnUse">
					<use xlinkHref="#nose2Path" />
				</clipPath>
			</defs>
			<g>
				<use href="#nose3Path" fill="url(#nose2Gradient)" />
				<path
					d="m35.94,124.54c-.47,3.13-8.6-.42-14.03-1.24s-9.45-4.02-8.98-7.15c.47-3.13,5.25-5.01,10.68-4.2s12.8,9.45,12.33,12.59Z"
					fill={lightenDarkenColor(skinTone, 20)}
				/>
				<path
					d="m71.16,128.71c.47,3.13,10.1-.65,16.48-1.6,6.39-.96,11.18-4.28,10.71-7.41-.47-3.13-6.03-4.9-12.41-3.94-6.39.96-15.25,9.82-14.78,12.95Z"
					fill={lightenDarkenColor(skinTone, 20)}
				/>
				<use
					clipPath="url(#nose3ClipPath)"
					href="#nose3Path"
					filter="url(#noiseFilter)"
				/>
			</g>
		</g>
	);
};
