import { PropsWithChildren } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { theme } from './theme';

interface Props extends PropsWithChildren {
  language: string;
}

export const CodeBlock: React.FC<Props> = ({ language, children }) => {
  return (
    <SyntaxHighlighter className="code-block" language={language} useInlineStyles={false}>
      {children as string}
    </SyntaxHighlighter>
  );
};
