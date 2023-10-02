import React from "react";
import Chair from "./components/Chair";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Overlay from "./components/Overlay";
import BigText from "./components/BigText";

export default function Experience() {
	return (
		<>
			<ambientLight intensity={1} />
			<directionalLight intensity={7} position={[100, 400, 110]} />
			<directionalLight intensity={7} position={[100, 400, -110]} />
			<ScrollControls pages={11} damping={0.25}>
				<Overlay />
				<BigText />
				<Chair scale={4} position={[0, -2, -1000]} />
			</ScrollControls>
		</>
	);
}
