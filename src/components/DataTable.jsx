import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { "id": 1, "lastName": "Snow", "firstName": "Jon", "age": 35 },
  { "id": 2, "lastName": "Lannister", "firstName": "Cersei", "age": 42 },
  { "id": 3, "lastName": "Lannister", "firstName": "Jaime", "age": 45 },
  { "id": 4, "lastName": "Stark", "firstName": "Arya", "age": 16 },
  { "id": 7, "lastName": "Clifford", "firstName": "Ferrara", "age": 44 },
  { "id": 8, "lastName": "Frances", "firstName": "Rossini", "age": 36 },
  { "id": 9, "lastName": "Roxie", "firstName": "Harvey", "age": 65 },
  { "id": 10, "lastName": "Tyrell", "firstName": "Margaery", "age": 28 },
  { "id": 11, "lastName": "Martell", "firstName": "Oberyn", "age": 40 },
  { "id": 12, "lastName": "Bolton", "firstName": "Ramsay", "age": 30 },
  { "id": 13, "lastName": "Baratheon", "firstName": "Robert", "age": 50 },
  { "id": 14, "lastName": "Mormont", "firstName": "Jorah", "age": 45 },
  { "id": 15, "lastName": "Baelish", "firstName": "Petyr", "age": 35 },
  { "id": 16, "lastName": "Tarly", "firstName": "Samwell", "age": 23 },
  { "id": 17, "lastName": "Greyjoy", "firstName": "Theon", "age": 29 },
  { "id": 18, "lastName": "Hound", "firstName": "Sandor", "age": 40 },
  { "id": 19, "lastName": "Seaworth", "firstName": "Davos", "age": 49 },
  { "id": 20, "lastName": "Clegane", "firstName": "Gregor", "age": 39 },
  { "id": 21, "lastName": "Dayne", "firstName": "Arthur", "age": 32 },
  { "id": 22, "lastName": "Reed", "firstName": "Meera", "age": 21 },
  { "id": 23, "lastName": "Tully", "firstName": "Brynden", "age": 63 },
  { "id": 24, "lastName": "Frey", "firstName": "Walder", "age": 91 },
  { "id": 25, "lastName": "Karstark", "firstName": "Harald", "age": 46 },
  { "id": 26, "lastName": "Dondarrion", "firstName": "Beric", "age": 35 },
  { "id": 27, "lastName": "Storm", "firstName": "Edric", "age": 18 },
  { "id": 28, "lastName": "Manderly", "firstName": "Wyman", "age": 64 },
  { "id": 29, "lastName": "Whent", "firstName": "Gerold", "age": 52 },
  { "id": 30, "lastName": "Payne", "firstName": "Podrick", "age": 24 },
  { "id": 31, "lastName": "Strong", "firstName": "Harwin", "age": 37 },
  { "id": 32, "lastName": "Royce", "firstName": "Yohn", "age": 58 },
  { "id": 33, "lastName": "Cole", "firstName": "Criston", "age": 29 },
  { "id": 34, "lastName": "Hightower", "firstName": "Alicent", "age": 34 },
  { "id": 35, "lastName": "Morrigen", "firstName": "Richard", "age": 48 },
  { "id": 36, "lastName": "Hunter", "firstName": "Eon", "age": 42 },
  { "id": 37, "lastName": "Moore", "firstName": "Jonothor", "age": 40 },
  { "id": 38, "lastName": "Hollard", "firstName": "Jon", "age": 36 },
  { "id": 39, "lastName": "Stone", "firstName": "Lyn", "age": 30 },
  { "id": 40, "lastName": "Flowers", "firstName": "Robert", "age": 27 },
  { "id": 41, "lastName": "Sand", "firstName": "Obara", "age": 32 },
  { "id": 42, "lastName": "Waters", "firstName": "Aurane", "age": 33 },
  { "id": 43, "lastName": "Blackwood", "firstName": "Lucas", "age": 51 },
  { "id": 44, "lastName": "Plumm", "firstName": "Addam", "age": 29 },
  { "id": 45, "lastName": "Qorgyle", "firstName": "Qoren", "age": 47 },
  { "id": 46, "lastName": "Rogers", "firstName": "Hugh", "age": 50 },
  { "id": 47, "lastName": "Umber", "firstName": "Greatjon", "age": 54 },
  { "id": 48, "lastName": "Blacktyde", "firstName": "Baelor", "age": 41 },
  { "id": 49, "lastName": "Brune", "firstName": "Andar", "age": 39 },
  { "id": 50, "lastName": "Goodbrother", "firstName": "Gormond", "age": 55 },
  { "id": 51, "lastName": "Noye", "firstName": "Donal", "age": 43 },
  { "id": 52, "lastName": "Tallhart", "firstName": "Helman", "age": 37 },
  { "id": 53, "lastName": "Mallister", "firstName": "Jason", "age": 50 },
  { "id": 54, "lastName": "Wull", "firstName": "Hugo", "age": 34 },
  { "id": 55, "lastName": "Norrey", "firstName": "Burton", "age": 49 },
  { "id": 56, "lastName": "Bole", "firstName": "Todder", "age": 28 },
  { "id": 57, "lastName": "Piper", "firstName": "Clement", "age": 45 },
  { "id": 58, "lastName": "Harlaw", "firstName": "Hotho", "age": 60 },
  { "id": 59, "lastName": "Volmark", "firstName": "Triston", "age": 31 },
  { "id": 60, "lastName": "Harlaw", "firstName": "Rodrik", "age": 52 },
  { "id": 61, "lastName": "Liddle", "firstName": "Theomore", "age": 57 },
  { "id": 62, "lastName": "Wode", "firstName": "Ronald", "age": 35 },
  { "id": 63, "lastName": "Sarsfield", "firstName": "Alesander", "age": 40 },
  { "id": 64, "lastName": "Hasty", "firstName": "Harry", "age": 26 },
  { "id": 65, "lastName": "Lefford", "firstName": "Jasper", "age": 53 },
  { "id": 66, "lastName": "Kenning", "firstName": "Franklyn", "age": 48 },
  { "id": 67, "lastName": "Jast", "firstName": "Vardis", "age": 41 }
];

export default function DataTable() {
  return (
    <DataGrid
      className="data-table"
      rows={rows}
      columns={columns}
      density="compact"
      initialState={{
        pagination: {
            paginationModel: {
                pageSize: 20,
            },
        },
    }}
    pageSizeOptions={[20, 30, 50]}
    checkboxSelection
    />
  );
}
