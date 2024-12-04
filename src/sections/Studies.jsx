import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import CanvasLoader from '../components/Loading.jsx';
import { studyExperiences } from '../constants/index.js';

const MyStudies = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="c-space my-20" id="studies">
      <div className="w-full text-white-600">
        <p className="head-text">My Studies</p>

        <div className="studies-container">
          <div className="studies-canvas">
            <Canvas>
              <ambientLight intensity={5} />
              <spotLight position={[10, 15, 10]} angle={0.2} penumbra={1} />
              <directionalLight position={[0, 10, 5]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <mesh
                  onPointerOver={() => setHovered(true)}
                  onPointerOut={() => setHovered(false)}
                  scale={1.5}>
                  <sphereGeometry args={[1, 32, 32]} />
                  <meshStandardMaterial
                    emissive={hovered ? 'cyan' : 'white'}
                    emissiveIntensity={hovered ? 2 : 0.5}
                    color={hovered ? 'cyan' : 'gray'}
                  />
                </mesh>
              </Suspense>
            </Canvas>
          </div>

          <div className="studies-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {studyExperiences.map((item, index) => (
                <div
                  key={index}
                  onPointerOver={() => setHovered(true)}
                  onPointerOut={() => setHovered(false)}
                  className="studies-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="studies-content_logo">
                      <img className="w-12 h-12" src={item.icon} alt={item.institution} />
                    </div>
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.institution}</p>
                    <p className="text-sm mb-5">
                      {item.degree} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStudies;
