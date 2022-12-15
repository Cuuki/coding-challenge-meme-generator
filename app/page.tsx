import dynamic from 'next/dynamic';

const MemeCanvasCaption = dynamic(() => import('../components/dynamic/MemeCanvasCaption'), {
  ssr: false,
});
const MemeCanvasImage = dynamic(() => import('../components/dynamic/MemeCanvasImage'), {
  ssr: false,
});
const MemeCanvas = dynamic(() => import('../components/dynamic/MemeCanvas'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <MemeCanvas
        width={500}
        height={500}
        image={
          <MemeCanvasImage
            x={0}
            y={0}
            width={500}
            height={500}
            imageUrl="https://patrick-soellner.de/_next/image?url=%2Fimages%2Fportrait.jpg&w=384&q=75"
          />
        }
        captions={{
          top: (
            <MemeCanvasCaption x={50} y={50} fontSize={26} color="blue">
              Top
            </MemeCanvasCaption>
          ),
          bottom: (
            <MemeCanvasCaption x={50} y={400} fontSize={26} color="red">
              Bottom
            </MemeCanvasCaption>
          ),
        }}
      />
    </main>
  );
}
