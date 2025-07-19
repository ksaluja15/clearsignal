// code code block design
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({
  children,
  language,
}: {
  children: string;
  language?: string;
}) => {
  if (language !== 'python') {
    return (
      <pre className="custom-scrollbar overflow-x-auto rounded-lg bg-gray-900 p-4 font-mono text-sm text-white">
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <SyntaxHighlighter
      language="python"
      style={tomorrow}
      customStyle={{
        margin: 0,
        padding: '1rem', 
        borderRadius: '0.5rem', 
        backgroundColor: '#1F2937', 
      }}
      codeTagProps={{
        className: 'font-mono text-sm',
      }}
      className="custom-scrollbar"
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;