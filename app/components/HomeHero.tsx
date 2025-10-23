/* eslint-disable react/no-unescaped-entities */
import Particles from '../lib/particles/particles';
import FluidGlass from '../lib/Fluid Glass/fluid-glass';

export default function HomeHero() {
    return (
    <section className="home-hero">
        <Particles
            className="particles-bg"
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
        />
            <FluidGlass 
                mode="cube" // or "bar", "cube"
                cubeProps={{
                    scale: 0.25,
                    ior: 1.15,
                    thickness: 5,
                    chromaticAberration: 0.1,
                    anisotropy: 0.01  
                }}
            />
        <h1 className="hero-text">Heya! I'm Sorren!</h1>
    </section>
    );
}