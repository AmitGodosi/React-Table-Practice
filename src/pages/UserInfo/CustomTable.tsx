import { Grid } from '@material-ui/core'
import { useTable } from 'react-table'
import { IUserInfoList, MyTableOptions } from '../../types'
import './CustomTable.scss'

const CustomTable = ({ columns, data }: MyTableOptions<IUserInfoList>) => {
    const tableInstance = useTable({ columns, data })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <Grid className='table-container'>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column: any) => (
                                        <th {...column.getHeaderProps()}>
                                            {
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map((row: any) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell: any) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {
                                                        cell.render('Cell')}
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