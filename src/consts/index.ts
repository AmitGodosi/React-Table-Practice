import TextFilter from '../components/CustomTable/TextFilter';

export const INFO_COLUMN_DATA = [
  {
    Header: "Id",
    accessor: "id",
    Filter: TextFilter,
    canFilter: true
  },
  {
    Header: "Name",
    accessor: "name",
    Filter: TextFilter,
    canFilter: true
  },
  {
    Header: "Score",
    accessor: "score",
    Filter: TextFilter,
    canFilter: true
  },
  {
    Header: "Duration In Days",
    accessor: "durationInDays",
    Filter: TextFilter,
    canFilter: true
  },
  {
    Header: "Bugs Count",
    accessor: "bugsCount",
    Filter: TextFilter,
    canFilter: true
  },
  {
    Header: "Made Dadeline",
    accessor: "madeDadeline",
    Filter: TextFilter,
    canFilter: true
  },
];

export const DETAILS_COLUMN_DATA = [
  {
    Header: "Team",
    accessor: "Team",
    canFilter: false,
    Filter: () => {}
  },
  {
    Header: "Avatar",
    accessor: "avatar",
    canFilter: false,
    Filter: () => {}
  },
  {
    Header: "Joined At",
    accessor: "joinedAt",
    canFilter: false,
    Filter: () => {}
  },
  {
    Header: "Name",
    accessor: "name",
    canFilter: false,
    Filter: () => {}
  },
];
