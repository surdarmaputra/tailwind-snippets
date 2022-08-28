import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export interface CodeSnippetProps {
  code?: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (copied) {
      timeout = setTimeout(() => {
        setCopied(!copied);
      }, 3000);
    } else {
      clearTimeout(timeout);
    }
  }, [copied]);

  if (!code) {
    return <div className="p-4">No code attached.</div>;
  }

  return (
    <div className="relative">
      <CopyToClipboard onCopy={() => setCopied(true)} text={code}>
        <button className="absolute right-0 top-0 rounded-bl bg-dark-100 px-3 py-1 text-xs">
          {copied ? 'Copied' : 'Copy'}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        customStyle={{ margin: 0 }}
        language="tsx"
        style={coldarkDark}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
