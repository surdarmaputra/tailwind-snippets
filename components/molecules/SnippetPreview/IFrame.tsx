import { useEffect, useRef, useState } from 'react';

export default function IFrame({ src }: React.HTMLProps<HTMLIFrameElement>) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const adjustHeight = () => {
    if (frameRef.current?.contentWindow?.document.body.offsetHeight) {
      setHeight(frameRef.current.contentWindow.document.body.offsetHeight);
    }
  };

  const handleFrameLoad = () => {
    setTimeout(adjustHeight, 500);
  };

  useEffect(() => {
    setTimeout(adjustHeight, 500);
  }, []);

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
