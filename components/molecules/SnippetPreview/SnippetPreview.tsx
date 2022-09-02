import Button from 'components/atoms/Button';
import { useState } from 'react';

import ArrowUpRightIcon from '~icons/tabler/arrow-up-right';

import CodeSnippet from './CodeSnippet';
import IFrame from './IFrame';

enum Tab {
  code,
  preview,
}

export interface SnippetPreviewProps
  extends React.HTMLProps<HTMLIFrameElement> {
  code?: string;
  title: string;
  secondaryTitle?: string;
}

export default function SnippetPreview({
  className = '',
  code,
  secondaryTitle,
  src,
  title,
}: SnippetPreviewProps) {
  const [activeTab, setActiveTab] = useState(Tab.preview);

  const renderedTitle = title || 'Snippet Preview';
  const wrapperClassName = `w-full rounded shadow bg-white ${className}`;

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

      <div
        className={activeTab === Tab.preview ? 'block' : 'h-0 overflow-hidden'}
      >
        <IFrame src={src} />
      </div>
      <div className={activeTab === Tab.code ? 'block' : 'h-0 overflow-hidden'}>
        <CodeSnippet code={code} />
      </div>
    </div>
  );
}
