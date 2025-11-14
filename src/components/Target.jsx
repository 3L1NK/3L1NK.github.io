import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const REMOTE_MODEL =
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf';

const Target = (props) => {
  const targetRef = useRef();
  const [scene, setScene] = useState(null);

  useEffect(() => {
    let mounted = true;
    const loader = new GLTFLoader();

    loader.load(
      REMOTE_MODEL,
      (gltf) => {
        if (!mounted) return;
        setScene(gltf.scene);
      },
      // onProgress
      undefined,
      // onError
      (err) => {
        console.error('Failed to load target model:', err);
        if (!mounted) return;
        setScene(null);
      },
    );

    return () => {
      mounted = false;
    };
  }, []);

  useGSAP(() => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      {scene ? (
        <primitive object={scene} />
      ) : (
        // Fallback: simple target-like geometry when GLTF can't be fetched
        <group>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6, 32]} />
            <meshStandardMaterial color="#9CA3AF" />
          </mesh>

          <mesh position={[0, 0.25, 0]}>
            <torusGeometry args={[0.35, 0.06, 16, 100]} />
            <meshStandardMaterial color="#EF4444" />
          </mesh>

          <mesh position={[0, 0.25, 0]}>
            <torusGeometry args={[0.22, 0.04, 12, 60]} />
            <meshStandardMaterial color="#FCA5A5" />
          </mesh>
        </group>
      )}
    </group>
  );
};

export default Target;
