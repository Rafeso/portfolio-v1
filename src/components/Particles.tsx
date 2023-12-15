import { useCallback } from "react";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import { Particles as ParticlesComponent } from "react-particles";
import { loadFull } from "tsparticles";

export function Particles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    [],
  );

  const options: ISourceOptions = {
    background: {
      color: {
        value: "#000",
      },
    },
    fpsLimit: 120,
    smooth: true,
    fullScreen: {
      enable: true,
      zIndex: -99999999,
    },
    //delay: 2,
    interactivity: {
      events: {
        resize: true,
        onHover: {
          enable: true,
          mode: "connect",
        },
      },
    },
    particles: {
      color: {
        value: "#162952",
      },
      move: {
        direction: "none",
        enable: true,
        speed: 0.3,
      },
      number: {
        density: {
          enable: true,
          area: 100,
        },
        value: 30,
      },
      opacity: {
        value: 1,
      },
      size: {
        value: 0.8,
      },
    },
    detectRetina: true,
  };

  return (
    <ParticlesComponent
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="fixed -z-50"
    />
  );
}
