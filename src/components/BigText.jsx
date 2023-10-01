import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function BigText() {
	const upperText = useRef();
	const upperText2 = useRef();
	const lowerText = useRef();
	const lowerText2 = useRef();
	const tl = useRef();

	const scroll = useScroll();

	useFrame(() => {
		tl.current.seek(scroll.offset * tl.current.duration());
	});

	// Animation

	useLayoutEffect(() => {
		tl.current = gsap.timeline({ duration: 10 });

		tl.current
			.to(
				upperText.current.position,
				{
					duration: 2,
					x: -30,
				},
				0
			)
			.to(lowerText.current.position, { duration: 2, x: 30 }, 0)
			.to(upperText2.current.position, { duration: 2, x: 0 }, 0)
			.to(lowerText2.current.position, { duration: 2, x: 0 }, 0)
			.to(upperText2.current.position, { duration: 2, x: 30 }, 2.4)
			.to(lowerText2.current.position, { duration: 2, x: -30 }, 2.4);
	}, []);
	return (
		<>
			<Text
				ref={upperText}
				scale={[2.5, 2.5, 2.5]}
				position={[0, 1.3, 0]}
				color="white" // default
				anchorX="center" // default
				anchorY="middle" // default
			>
				ONE
			</Text>
			<Text
				ref={lowerText}
				scale={[2.5, 2.5, 2.5]}
				position={[0, -1.3, 0]}
				color="white" // default
				anchorX="center" // default
				anchorY="middle" // default
			>
				CHAIR
			</Text>
			<Text
				ref={upperText2}
				scale={[2, 2, 2]}
				position={[30, 1, -1]}
				color="white" // default
				anchorX="center" // default
				anchorY="middle" // default
			>
				TO RULE
			</Text>
			<Text
				ref={lowerText2}
				scale={[2, 2, 2]}
				position={[-30, -1, -1]}
				color="white" // default
				anchorX="center" // default
				anchorY="middle" // default
			>
				THEM ALL
			</Text>
		</>
	);
}
