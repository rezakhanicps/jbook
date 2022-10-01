import MoancoEditor from "@monaco-editor/react";

interface CodeEditorProps {
    initialValue: string;
    onChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
    const onEditorDidMount = (getValue: () => string, moancoEditor: any) => {
        moancoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });
    };

    return (
        <MoancoEditor
            editorDidMount={onEditorDidMount}
            value={initialValue}
            language="javascript"
            theme="dark"
            height="500px"
            options={{
                wordWrap: "on",
                minimap: { enabled: false },
                showUnused: false,
                folding: false,
                lineNumbersMinChars: 3,
                fontSize: 16,
                scrollBeyondLastLine: false,
                automaticLayout: true,
            }}
        />
    );
};

export default CodeEditor;
