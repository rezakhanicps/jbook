import { useAction } from '../hooks/use-actions';
import './add-cell.css';

interface AddCellProps {
    nextCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
    const { insertCellBefore } = useAction();
    return (
        <div>
            <button onClick={() => insertCellBefore(nextCellId, 'code')}>
                Code
            </button>
            <button onClick={() => insertCellBefore(nextCellId, 'text')}>
                Text
            </button>
        </div>
    );
};

export default AddCell;
