import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import AddCell from './add-cell';
import CellListItem from './cell-list-item';

const CellList: React.FC = () => {
    const cells = useTypedSelector(({ cells: { order, data } }) =>
        order.map((id) => data[id])
    );

    const renderedCells = cells.map((cell) => (
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id} />
            <CellListItem key={cell.id} cell={cell} />
        </Fragment>
    ));

    return (
        <div>
            {renderedCells}
            <AddCell nextCellId={null} />
        </div>
    );
};

export default CellList;
