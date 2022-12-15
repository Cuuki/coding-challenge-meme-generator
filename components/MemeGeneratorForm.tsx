'use client';

import dynamic from 'next/dynamic';
import { useDeferredValue, useRef, useState } from 'react';
import { InputGroup } from './InputGroup';
import { TextInput } from './TextInput';
import { Button } from './Button';

const MemeCanvasCaption = dynamic(() => import('../components/dynamic/MemeCanvasCaption'), {
  ssr: false,
});
const MemeCanvasImage = dynamic(() => import('../components/dynamic/MemeCanvasImage'), {
  ssr: false,
});
const MemeCanvas = dynamic(() => import('../components/dynamic/MemeCanvas'), { ssr: false });

const downloadURI = (uri: string, name: string) => {
  const link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const MemeGeneratorForm = () => {
  const [captionTop, setCaptionTop] = useState('One does not simply...');
  const [captionBottom, setCaptionBottom] = useState('create a meme generator');
  const deferredCaptionTop = useDeferredValue(captionTop);
  const deferredCaptionBottom = useDeferredValue(captionBottom);
  const stageRef = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <div className="max-w-full overflow-auto min-h-[335px] mb-10">
        <MemeCanvas
          width={568}
          height={335}
          stageRef={stageRef}
          image={
            <MemeCanvasImage
              x={0}
              y={0}
              width={568}
              height={335}
              imageUrl="/One-Does-Not-Simply.jpg"
            />
          }
          captions={[
            <MemeCanvasCaption x={50} y={25} fontSize={30} key="top">
              {deferredCaptionTop}
            </MemeCanvasCaption>,
            <MemeCanvasCaption x={50} y={280} fontSize={24} key="bottom">
              {deferredCaptionBottom}
            </MemeCanvasCaption>,
          ]}
        />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          if (!stageRef.current) {
            return;
          }

          downloadURI(stageRef.current.toDataURL(), 'meme.png');
        }}
        onReset={() => {
          setCaptionTop('');
          setCaptionBottom('');
        }}
      >
        <InputGroup label="Caption top">
          <TextInput
            value={captionTop}
            onChange={(event) => setCaptionTop(event.currentTarget.value)}
          />
        </InputGroup>
        <InputGroup label="Caption bottom">
          <TextInput
            value={captionBottom}
            onChange={(event) => setCaptionBottom(event.currentTarget.value)}
          />
        </InputGroup>

        <Button variant="success" type="submit">
          Save meme
        </Button>
        <Button variant="danger" type="reset">
          Clear meme
        </Button>
      </form>
    </>
  );
};
