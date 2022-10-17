import React, { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundler from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';
import { useAction } from '../hooks/use-actions';

interface CodeCellProps {
    cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const [code, setCode] = useState('');
    const [err, setErr] = useState('');
    const { updateCell } = useAction();

    useEffect(() => {
        const timer = setTimeout(async () => {
            const output = await bundler(cell.content);
            setCode(output.code);
            setErr(output.err);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [cell.content]);

    return (
        <Resizable direction="vertical">
            <div
                style={{
                    height: 'calc(100% - 10px)',
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                <Resizable direction="horizontal">
                    <CodeEditor
                        initialValue={cell.content}
                        onChange={(value) => updateCell(cell.id, value)}
                    />
                </Resizable>
                <Preview code={code} err={err} />
            </div>
        </Resizable>
    );
};

export default CodeCell;
