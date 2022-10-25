import { CSSProperties, PropsWithChildren } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

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
