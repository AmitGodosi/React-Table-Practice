type Props = {
    column: {
        filterValue: string;
        setFilter: Function;
    }
}

const TextFilter = ({ column: { filterValue, setFilter } }: Props) => {
    return (
        <input
            value={filterValue || ''}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter..."
            style={{ width: '100%', outline: 'none', padding: '5px', borderRadius: '5px', border: 'none' }}
        />
    );
}

export default TextFilter;