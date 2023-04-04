import { Grid } from '@material-ui/core'
import { useFilters, useTable } from 'react-table'
import { IUserInfoList, MyTableOptions } from '../../types'
import './CustomTable.scss'

const CustomTable = ({ columns, data }: MyTableOptions<IUserInfoList>) => {
    console.log(data)
    const {
        getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
    } = useTable({ columns, data }, useFilters)

    return (
        <Grid className='table-container'>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup: any) => {
                            return (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {
                                        headerGroup.headers.map((column: any) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                                {column.canFilter && (
                                                    <div>{column.render('Filter')}</div>
                                                )}
                                            </th>
                                        ))}
                                </tr>
                            )
                        })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row: any) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell: any) => {
                                            const isMadeDadelineCell = cell?.column?.id === 'madeDadeline'
                                            let selectedClassName = ''
                                            const score = cell?.row?.values?.score
                                            if (score < 70) {
                                                selectedClassName = 'row-low-score'
                                            } else if (score > 90) {
                                                selectedClassName = 'row-high-score'
                                            }
                                            return (
                                                <td className={selectedClassName} {...cell.getCellProps()}>
                                                    {isMadeDadelineCell ? (cell.value ? <span>True</span> : <span>False</span>) : cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </Grid>
    )
}

export default CustomTable;