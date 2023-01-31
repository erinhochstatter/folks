import { FC } from "react";

export const Face3: FC = () => {
	return (
		<svg
			id="face"
			data-name="face-shape"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 551 720"
		>
			<g id="face-group" data-name="heart-face-group">
				<path
					fill="#FAE7D0"
					d="M550.5,307.59c0,194.87-178.06,407.51-275,407.51S.5,502.46,.5,307.59,123.62,.5,275.5,.5s275,112.22,275,307.09Z"
				></path>
				<g id="unibrow_brows_group" transform="translate(120 200)">
					<defs>
						<linearGradient id="browGradient" gradientTransform="rotate(60)">
							<stop offset="5%" stop-color="gold"></stop>
							<stop offset="95%" stop-color="black"></stop>
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
					{/* <rect
						clipPath="url(#turbulentUnibrow)"
						x="0"
						y="0"
						width="300"
						height="40"
						rx="12"
						ry="12"
						fill="blue"
						// fill="url(#browGradient)"
					/> */}

					{/* <use clipPath="url(#turbulentUnibrow)" href="#unibrow" fill="green" /> */}
					<use
						// clipPath="url(#turbulentUnibrow)"
						href="#unibrow"
						fill="url(#browGradient)"
					/>
					<use
						clipPath="url(#turbulentUnibrow)"
						href="#unibrow"
						filter="url(#noiseFilter)"
					/>
				</g>
				<g id="circle_eyes_group" data-name="circular_eyes_group">
					<circle
						fill="black"
						stroke="black"
						cx="160"
						cy="300"
						r="36.5"
					></circle>
					<circle
						fill="black"
						stroke="black"
						cx="380"
						cy="300"
						r="36.5"
					></circle>
				</g>
			</g>
		</svg>
	);
};
