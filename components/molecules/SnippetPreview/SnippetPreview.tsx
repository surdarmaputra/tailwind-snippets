import classNames from 'classnames';
import Button from 'components/atoms/Button';
import { identity } from 'lodash-es';
import { useEffect, useState } from 'react';

import ArrowUpRightIcon from '~icons/tabler/arrow-up-right';
import ArrowsMaximizeIcon from '~icons/tabler/arrows-maximize';
import ArrowsMinimizeIcon from '~icons/tabler/arrows-minimize';

import CodeSnippet from './CodeSnippet';
import IFrame from './IFrame';

enum Tab {
  code,
  preview,
}

export interface SnippetPreviewProps
  extends React.HTMLProps<HTMLIFrameElement> {
  code?: string;
  onMaximized?: (maximized: boolean) => void;
  secondaryTitle?: string;
  title: string;
}

export default function SnippetPreview({
  className = '',
  code,
  onMaximized = identity,
  secondaryTitle,
  src,
  title,
}: SnippetPreviewProps) {
  const [activeTab, setActiveTab] = useState(Tab.preview);
  const [maximized, setMaximized] = useState(false);

  const renderedTitle = title || 'Snippet Preview';
  const wrapperClassName = `${classNames({
    'w-full rounded shadow bg-white flex flex-col': true,
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
      <div className="flex w-full flex-col items-center justify-between border-b border-b-dark-100 p-4 sm:flex-row">
        <div className="mb-4 w-full sm:mb-0 sm:w-fit">
          <h6 className="mb-0 mr-4">{renderedTitle}</h6>
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
          <IFrame src={src} />
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
