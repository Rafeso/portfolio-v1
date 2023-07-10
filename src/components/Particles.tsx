import { useCallback } from 'react';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';
import { Particles as ParticlesComponent } from 'react-particles';
import { loadFull } from 'tsparticles';

export function Particles() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
		 	console.log(container);
		},
		[]
	);

	const options: ISourceOptions = {
		background: {
			color: {
				value: '#000'
			}
		},
		fpsLimit: 120,
		smooth: true,
		fullScreen: {
			enable: true,
			zIndex: -1
		},
		//delay: 2,
		interactivity: {
			events: {
				onHover: {
					enable: true,
					mode: 'grab'
				},
				resize: true
			}
		},
		particles: {
			color: {
				value: '#52525b'
			},
			move: {
				direction: 'bottom-left',
				enable: true,
				speed: 0.2
			},
			number: {
				density: {
					enable: true,
					area: 100
				},
				value: 15
			},
			opacity: {
				value: 1
			},
			size: {
				value: 0.6
			}
		},
		detectRetina: true
	};

	return (
		<ParticlesComponent
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={options}
		/>
	);
}






