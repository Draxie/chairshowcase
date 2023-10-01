import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function Overlay() {
	const pillows = useRef();
	const frame = useRef();
	const bucket = useRef();
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
				bucket.current.position,
				{
					duration: 4,
					y: 30,
				},
				2.2
			)
			.to(
				frame.current.position,
				{
					duration: 4,
					y: 30,
				},
				3.2
			)
			.to(
				pillows.current.position,
				{
					duration: 2,
					y: 30,
				},
				6
			);
	}, []);
	return (
		<>
			<Text
				ref={bucket}
				scale={[0.5, 0.5, 0.5]}
				position={[1.6, -30, 0]}
				color="white" // default
				anchorX="center" // default
				anchorY="middle" // default
			>
				Bucket seat design
			</Text>
			<group ref={frame} position={[1.6, -30, 0]}>
				<Text
					scale={[0.5, 0.5, 0.5]}
					color="white" // default
					anchorX="center" // default
					anchorY="middle" // default
				>
					Premium
				</Text>
				<Text
					ref={frame}
					scale={[0.5, 0.5, 0.5]}
					position={[0, -0.5, 0]}
					color="white" // default
					anchorX="center" // default
					anchorY="middle" // default
				>
					aluminium frame
				</Text>
			</group>
			<group ref={pillows} position={[1.6, -30, 0]}>
				<Text
					scale={[0.5, 0.5, 0.5]}
					position={[0, 0.5, 0]}
					color="white" // default
					anchorX="center" // default
					anchorY="middle" // default
				>
					Lumbar and
				</Text>
				<Text
					ref={pillows}
					scale={[0.5, 0.5, 0.5]}
					color="white" // default
					anchorX="center" // default
					anchorY="middle" // default
				>
					neck support
				</Text>
			</group>
		</>
	);
}
