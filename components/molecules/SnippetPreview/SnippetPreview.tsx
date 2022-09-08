import classNames from 'classnames';
import Button from 'components/atoms/Button';
import { identity } from 'lodash-es';
import { useEffect, useState } from 'react';

import ArrowUpRightIcon from '~icons/tabler/arrow-up-right.tsx';
import ArrowsMaximizeIcon from '~icons/tabler/arrows-maximize.tsx';
import ArrowsMinimizeIcon from '~icons/tabler/arrows-minimize.tsx';

import CodeSnippet from './CodeSnippet';
import IFrame from './IFrame';

enum Tab {
  code,
  preview,
}

export interface SnippetPreviewProps
  extends React.HTMLProps<HTMLIFrameElement> {
  code?: string;
  isDevelopment?: boolean;
  onMaximized?: (maximized: boolean) => void;
  secondaryTitle?: string;
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

  const renderedTitle = title || 'Snippet Preview';
  const wrapperClassName = `${classNames({
    'w-full rounded shadow bg-white flex flex-col border border-dark-100 dark:bg-dark-900 dark:border-dark-800':
      true,
    'fixed top-0 left-0 h-full z-20': maximized,
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
      <div className="flex w-full flex-col items-center justify-between border-b border-b-dark-200 p-4 dark:border-b-dark-800 sm:flex-row">
        <div className="mb-4 w-full sm:mb-0 sm:w-fit">
          <div className="mb-0 mr-4 font-bold leading-loose text-dark-900 dark:text-dark-50">
            {renderedTitle}
          </div>
          {secondaryTitle && (
            <div className="text-xs text-dark-400">{secondaryTitle}</div>
          )}
        </div>
        <div className="flex w-full items-center justify-start space-x-2 sm:w-fit sm:justify-end">
          <Button
            onClick={() => setActiveTab(Tab.preview)}
            size="small"
            variation={activeTab === Tab.preview ? 'dark' : 'light'}
          >
            Preview
          </Button>
          <Button
            onClick={() => setActiveTab(Tab.code)}
            size="small"
            variation={activeTab === Tab.code ? 'dark' : 'light'}
          >
            Code
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
            activeTab === Tab.preview ? 'block h-full' : 'h-0 overflow-hidden'
          }
        >
          {!isDevelopment || iframeShownInDev ? (
            <IFrame src={src} />
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
