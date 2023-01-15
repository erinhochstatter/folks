import React, { useEffect, useRef, useState } from "react";

export function useSvgImport(iconName: string, iconType: string) {
	const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		setLoading(true);
		const importSvgImage = async (): Promise<void> => {
			try {
				importedIconRef.current = (
					await import(`../assets/SVG/${iconType}/${iconName}.svg`)
				).ReactComponent;
			} catch (err) {
				setError(err);
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		importSvgImage();
	}, [iconType, iconName]);

	return { error, loading, SvgImage: importedIconRef.current };
}
