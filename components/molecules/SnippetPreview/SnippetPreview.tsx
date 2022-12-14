import { useEffect, useState } from 'react';

import classNames from 'classnames';
import { identity } from 'lodash-es';

import Button from 'components/atoms/Button';

import ArrowUpRightIcon from '~icons/tabler/arrow-up-right.tsx';
import ArrowsMaximizeIcon from '~icons/tabler/arrows-maximize.tsx';
import ArrowsMinimizeIcon from '~icons/tabler/arrows-minimize.tsx';
import CodeIcon from '~icons/tabler/code.tsx';
import DeviceDesktopIcon from '~icons/tabler/device-desktop.tsx';
import DeviceMobileIcon from '~icons/tabler/device-mobile.tsx';
import DeviceTabletIcon from '~icons/tabler/device-tablet.tsx';

import CodeSnippet from './CodeSnippet';
import IFrame from './IFrame';

enum Tab {
  code,
  preview,
}

enum ScreenWidth {
  fit = 'fit',
  xs = '360',
  phone1 = '480',
  phone2 = '540',
  phone3 = '600',
  sm = '640',
  tablet1 = '720',
  md = '768',
  tablet2 = '800',
  lg = '1024',
  desktop1 = '1080',
  xl = '1280',
  desktop2 = '1440',
  desktop3 = '1536',
}

const desktopScreens = [
  ScreenWidth.xl,
  ScreenWidth.lg,
  ScreenWidth.desktop1,
  ScreenWidth.desktop2,
  ScreenWidth.desktop3,
];

const tableScreens = [
  ScreenWidth.md,
  ScreenWidth.sm,
  ScreenWidth.tablet1,
  ScreenWidth.tablet2,
];

interface ScreenIconProps {
  width: ScreenWidth;
  className?: string;
}

function ScreenIcon({ width, className }: ScreenIconProps) {
  if (width === ScreenWidth.fit) {
    return (
      <>
        <DeviceDesktopIcon className={`hidden sm:block ${className}`} />
        <DeviceMobileIcon className={`block sm:hidden ${className}`} />
      </>
    );
  }

  if (desktopScreens.includes(width)) {
    return <DeviceDesktopIcon className={className} />;
  }

  if (tableScreens.includes(width)) {
    return <DeviceTabletIcon className={className} />;
  }

  return <DeviceMobileIcon className={className} />;
}

export interface SnippetPreviewProps
  extends React.HTMLProps<HTMLIFrameElement> {
  code?: string;
  isDevelopment?: boolean;
  onMaximized?: (maximized: boolean) => void;
  secondaryTitle?: string | null;
  title: string;
}

export default function SnippetPreview({
  className = '',
  code,
  isDevelopment,
  onMaximized = identity,
  secondaryTitle,
  src,
  title,
}: SnippetPreviewProps) {
  const [activeTab, setActiveTab] = useState(Tab.preview);
  const [maximized, setMaximized] = useState(false);
  const [iframeShownInDev, setIframeShownInDev] = useState(false);
  const [previewScreenWidth, setPreviewScreenWidth] = useState(ScreenWidth.fit);

  const renderedTitle = title || 'Snippet Preview';
  const wrapperClassName = `${classNames({
    'w-full rounded shadow bg-white flex flex-col border border-dark-100 dark:bg-dark-900 dark:border-dark-800':
      true,
    'fixed top-0 left-0 h-full z-50': maximized,
  })} ${className}`;

  const toggleMaximize = () => {
    const newValue = !maximized;
    setMaximized(newValue);
    onMaximized(newValue);
  };

  useEffect(() => {
    document.body.className = maximized
      ? `${document.body.className} overflow-hidden`
      : document.body.className.replace('overflow-hidden', '');
  }, [maximized]);

  return (
    <div className={wrapperClassName}>
      <div className="flex w-full flex-col items-start justify-between border-b border-b-dark-200 p-4 dark:border-b-dark-800 sm:flex-row">
        <div className="mb-4 w-full sm:mb-0 sm:w-fit">
          <div className="mb-0 mr-4 font-bold leading-loose text-dark-900 dark:text-dark-50">
            {renderedTitle}
          </div>
          {secondaryTitle && (
            <div className="text-xs text-dark-400">{secondaryTitle}</div>
          )}
        </div>
        <div className="flex w-full items-center justify-start space-x-1 sm:w-fit sm:justify-end">
          <div className="flex items-center justify-start">
            <div
              className={`group relative transition delay-100 ease-in-out ${
                activeTab === Tab.preview ? 'mr-1 w-fit' : 'w-0 overflow-hidden'
              }`}
            >
              <Button size="small" variation="dark">
                <ScreenIcon width={previewScreenWidth} />
              </Button>
              <ul className="invisible absolute top-full z-30 mt-0 rounded-lg border border-dark-50 bg-white opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100 dark:bg-dark-100 dark:text-dark-900">
                {Object.entries(ScreenWidth).map(([key, width]) => (
                  <button
                    className={`flex w-full items-end p-2 text-dark-500 hover:text-dark-900 ${
                      width === previewScreenWidth ? 'bg-dark-300' : ''
                    }`}
                    key={key}
                    onClick={() => setPreviewScreenWidth(width)}
                  >
                    <ScreenIcon className="w-8 text-left" width={width} />
                    <span>{`${width}${
                      width !== ScreenWidth.fit ? 'px' : ''
                    }`}</span>
                  </button>
                ))}
              </ul>
            </div>
            <Button
              onClick={() => setActiveTab(Tab.preview)}
              size="small"
              variation={activeTab === Tab.preview ? 'dark' : 'light'}
            >
              View
            </Button>
          </div>
          <Button
            onClick={() => setActiveTab(Tab.code)}
            size="small"
            variation={activeTab === Tab.code ? 'dark' : 'light'}
          >
            <CodeIcon />
          </Button>
          <Button
            onClick={toggleMaximize}
            size="small"
            title={maximized ? 'Minimize' : 'Maximize'}
            variation="light"
          >
            {maximized ? <ArrowsMinimizeIcon /> : <ArrowsMaximizeIcon />}
          </Button>
          <Button
            external
            href={src}
            link
            size="small"
            target="_blank"
            title="Open full page"
            variation="light"
          >
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>

      <div className="overflow-auto">
        <div
          className={
            activeTab === Tab.preview
              ? 'block h-full bg-dark-800'
              : 'h-0 overflow-hidden'
          }
        >
          {!isDevelopment || iframeShownInDev ? (
            <IFrame
              className={classNames({
                'mx-auto': true,
                'w-full': previewScreenWidth === ScreenWidth.fit,
                'w-[360px]': previewScreenWidth === ScreenWidth.xs,
                'w-[480px]': previewScreenWidth === ScreenWidth.phone1,
                'w-[540px]': previewScreenWidth === ScreenWidth.phone2,
                'w-[600px]': previewScreenWidth === ScreenWidth.phone3,
                'w-[640px]': previewScreenWidth === ScreenWidth.sm,
                'w-[720px]': previewScreenWidth === ScreenWidth.tablet1,
                'w-[768px]': previewScreenWidth === ScreenWidth.md,
                'w-[800px]': previewScreenWidth === ScreenWidth.tablet2,
                'w-[1024px]': previewScreenWidth === ScreenWidth.lg,
                'w-[1080px]': previewScreenWidth === ScreenWidth.desktop1,
                'w-[1280px]': previewScreenWidth === ScreenWidth.xl,
                'w-[1440px]': previewScreenWidth === ScreenWidth.desktop2,
                'w-[1536px]': previewScreenWidth === ScreenWidth.desktop3,
              })}
              src={src}
            />
          ) : (
            <div className="py-16 px-4 text-center">
              <div className="mb-2 text-2xl font-bold text-dark-300">
                Development mode
              </div>
              <p className="text-dark-400">
                To prevent webpack HMR issue, preview is disabled
              </p>
              <Button
                className="mx-auto mt-8"
                onClick={() => setIframeShownInDev(true)}
                size="small"
                variation="dark"
              >
                Load iframe anyway
              </Button>
            </div>
          )}
        </div>
        <div
          className={
            activeTab === Tab.code ? 'block h-fit' : 'h-0 overflow-hidden'
          }
        >
          <CodeSnippet code={code} />
        </div>
      </div>
    </div>
  );
}
