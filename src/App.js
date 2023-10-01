import React, { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function App() {
	return (
		<main className="w-[100vw] h-[100vh] flex flex-col justify-center">
			<div className="w-full aspect-square">
				<Canvas>
					<Suspense>
						<Experience />
					</Suspense>
				</Canvas>
			</div>
		</main>
	);
}
