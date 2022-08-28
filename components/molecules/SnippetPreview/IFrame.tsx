import { useRef, useState } from 'react';

export default function IFrame({ src }: React.HTMLProps<HTMLIFrameElement>) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const handleFrameLoad = () => {
    setTimeout(() => {
      if (frameRef.current?.contentWindow?.document.body.offsetHeight) {
        setHeight(frameRef.current.contentWindow.document.body.offsetHeight);
      }
    }, 500);
  };

  return (
    <iframe
      className="w-full"
      frameBorder="0"
      height={height}
      onLoad={handleFrameLoad}
      ref={frameRef}
      src={src}
    ></iframe>
  );
}
