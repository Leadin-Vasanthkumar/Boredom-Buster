import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient';
import { Button } from '@/src/components/ui/button';
import { Routes, Route, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <ShaderGradient
            animate="on"
            axesHelper="off"
            bgColor1="#000000"
            bgColor2="#000000"
            brightness={1.2}
            cAzimuthAngle={180}
            cDistance={2.9}
            cPolarAngle={120}
            cameraZoom={1}
            color1="#ebedff"
            color2="#f3f2f8"
            color3="#dbf8ff"
            destination="onCanvas"
            embedMode="off"
            envPreset="city"
            format="gif"
            fov={45}
            frameRate={10}
            gizmoHelper="hide"
            grain="off"
            lightType="3d"
            pixelDensity={1}
            positionX={0}
            positionY={1.8}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={-90}
            shader="defaults"
            type="waterPlane"
            uAmplitude={0}
            uDensity={1}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={3}
            uTime={0.2}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>

      {/* UI Layer */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-12">
          <Button 
            variant="default"
            className="px-[76px] py-[38px] text-[67px] font-atma font-bold h-auto !rounded-full select-none"
            onClick={() => navigate('/clean')}
          >
            I am bored
          </Button>
        </div>
      </div>
    </div>
  );
}

function CleanWhitePage() {
  return (
    <div className="min-h-screen bg-white"></div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clean" element={<CleanWhitePage />} />
    </Routes>
  );
}
