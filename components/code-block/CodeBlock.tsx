import { CSSProperties, PropsWithChildren } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('typescript', tsx);

interface Props extends PropsWithChildren {
  language: string;
  style?: {
    [key: string]: CSSProperties;
  };
}

export const CodeBlock: React.FC<Props> = ({ language, style, children }) => {
  const useInlineStyles = style ? true : false;
  return (
    <SyntaxHighlighter
      className="code-block"
      language={language}
      useInlineStyles={useInlineStyles}
      style={style}
    >
      {children as string}
    </SyntaxHighlighter>
  );
};
