import { ReactNode, useEffect, useState } from 'react';

import classNames from 'classnames';
import { trackEvent } from 'libs/analytics';
import { SnippetPreviewElementId } from 'libs/analytics/types';
import { identity } from 'lodash-es';

import Button from 'components/atoms/Button';
import { CodeLanguage, Variant } from 'core/type';

import ArrowUpRightIcon from '~icons/tabler/arrow-up-right.tsx';
import ArrowsMaximizeIcon from '~icons/tabler/arrows-maximize.tsx';
import ArrowsMinimizeIcon from '~icons/tabler/arrows-minimize.tsx';
import BrandHTML5Icon from '~icons/tabler/brand-html5.tsx';
import BrandTypeScriptIcon from '~icons/tabler/brand-typescript.tsx';
import DeviceDesktopIcon from '~icons/tabler/device-desktop.tsx';
import DeviceMobileIcon from '~icons/tabler/device-mobile.tsx';
import DeviceTabletIcon from '~icons/tabler/device-tablet.tsx';

import CodeSnippet from './CodeSnippet';
import IFrame from './IFrame';

enum Tab {
  code,
  codeTsx,
  codeHtml,
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

const activeCodeIcon: Record<CodeLanguage, ReactNode> = {
  [CodeLanguage.tsx]: <BrandTypeScriptIcon />,
  [CodeLanguage.html]: <BrandHTML5Icon />,
};

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
  codeByType?: Variant['codeByType'];
  isDevelopment?: boolean;
  onMaximized?: (maximized: boolean) => void;
  secondaryTitle?: string | null;
  title: string;
}

export default function SnippetPreview({
  className = '',
  codeByType,
  isDevelopment,
  onMaximized = identity,
  secondaryTitle,
  src,
  title,
}: SnippetPreviewProps) {
  const [activeTab, setActiveTab] = useState(Tab.preview);
  const [maximized, setMaximized] = useState(false);
  const [iframeShownInDev, setIframeShownInDev] = useState(false);
  const [activeScreenWidth, setActiveScreenWidth] = useState(ScreenWidth.fit);
  const [activeCodeLanguage, setActiveCodeLanguage] = useState(
    CodeLanguage.tsx,
  );

  const renderedTitle = title || 'Snippet Preview';
  const wrapperClassName = `${classNames({
    'w-full rounded-xl shadow-xl shadow-dark-200 dark:shadow-slate-800 bg-white flex flex-col border border-dark-50 dark:bg-dark-900 dark:border-dark-800':
      true,
    'fixed top-0 left-0 h-full z-50': maximized,
  })} ${className}`;

  const toggleMaximize = () => {
    const newValue = !maximized;
    setMaximized(newValue);
    onMaximized(newValue);
    trackEvent({
      name: 'snippet_preview_click',
      element_id: newValue
        ? SnippetPreviewElementId.BtnMaximize
        : SnippetPreviewElementId.BtnMinimize,
      title: renderedTitle,
      secondaryTitle: secondaryTitle || undefined,
    });
  };

  const togglePreviewTab = (screenWidth: ScreenWidth) => {
    setActiveTab(Tab.preview);
    setActiveScreenWidth(screenWidth);
    trackEvent({
      name: 'snippet_preview_click',
      element_id: SnippetPreviewElementId.SelectScreenSize,
      title: renderedTitle,
      secondaryTitle: secondaryTitle || undefined,
      selected_value: screenWidth,
    });
  };

  const toggleCodeTab = (language: CodeLanguage) => {
    setActiveTab(Tab.code);
    setActiveCodeLanguage(language);
    trackEvent({
      name: 'snippet_preview_click',
      element_id: SnippetPreviewElementId.SelectCodeLanguage,
      title: renderedTitle,
      secondaryTitle: secondaryTitle || undefined,
      selected_value: language,
    });
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
          <div className="group relative transition delay-100 ease-in-out">
            <Button
              size="small"
              variation={activeTab === Tab.preview ? 'dark' : 'light'}
            >
              <ScreenIcon width={activeScreenWidth} />
            </Button>
            <ul className="invisible absolute top-full z-30 mt-0 rounded-lg border border-dark-50 bg-white opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100 dark:bg-dark-100 dark:text-dark-900">
              {Object.entries(ScreenWidth).map(([key, width]) => (
                <button
                  className={`flex w-full items-end p-2 text-dark-500 hover:text-dark-900 ${
                    width === activeScreenWidth ? 'bg-dark-300' : ''
                  }`}
                  key={key}
                  onClick={() => togglePreviewTab(width)}
                >
                  <ScreenIcon className="w-8 text-left" width={width} />
                  <span>{`${width}${
                    width !== ScreenWidth.fit ? 'px' : ''
                  }`}</span>
                </button>
              ))}
            </ul>
          </div>
          <div className="group relative transition delay-100 ease-in-out">
            <Button
              size="small"
              variation={activeTab === Tab.code ? 'dark' : 'light'}
            >
              {activeCodeIcon[activeCodeLanguage]}
            </Button>
            <ul className="invisible absolute top-full z-30 mt-0 rounded-lg border border-dark-50 bg-white opacity-0 shadow-xl transition-opacity group-hover:visible group-hover:opacity-100 dark:bg-dark-100 dark:text-dark-900">
              {Object.values(CodeLanguage).map((language) => (
                <button
                  className="flex w-full items-center p-2 text-dark-500 hover:text-dark-900"
                  key={language}
                  onClick={() => toggleCodeTab(language as CodeLanguage)}
                >
                  {activeCodeIcon[language as CodeLanguage]}
                  <span className="ml-1">{language}</span>
                </button>
              ))}
            </ul>
          </div>
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
            onClick={() =>
              trackEvent({
                name: 'snippet_preview_click',
                element_id: SnippetPreviewElementId.BtnOpenFullPage,
                title: renderedTitle,
                secondaryTitle: secondaryTitle || undefined,
              })
            }
            size="small"
            target="_blank"
            title="Open full page"
            variation="light"
          >
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>

      <div className="overflow-auto rounded-b-xl">
        <div
          className={
            activeTab === Tab.preview
              ? 'block h-full bg-dark-800 dark:bg-black'
              : 'h-0 overflow-hidden'
          }
        >
          {!isDevelopment || iframeShownInDev ? (
            <IFrame
              className={classNames({
                'mx-auto': true,
                'w-full': activeScreenWidth === ScreenWidth.fit,
                'w-[360px]': activeScreenWidth === ScreenWidth.xs,
                'w-[480px]': activeScreenWidth === ScreenWidth.phone1,
                'w-[540px]': activeScreenWidth === ScreenWidth.phone2,
                'w-[600px]': activeScreenWidth === ScreenWidth.phone3,
                'w-[640px]': activeScreenWidth === ScreenWidth.sm,
                'w-[720px]': activeScreenWidth === ScreenWidth.tablet1,
                'w-[768px]': activeScreenWidth === ScreenWidth.md,
                'w-[800px]': activeScreenWidth === ScreenWidth.tablet2,
                'w-[1024px]': activeScreenWidth === ScreenWidth.lg,
                'w-[1080px]': activeScreenWidth === ScreenWidth.desktop1,
                'w-[1280px]': activeScreenWidth === ScreenWidth.xl,
                'w-[1440px]': activeScreenWidth === ScreenWidth.desktop2,
                'w-[1536px]': activeScreenWidth === ScreenWidth.desktop3,
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
          <CodeSnippet code={codeByType?.[activeCodeLanguage]} />
        </div>
      </div>
    </div>
  );
}
