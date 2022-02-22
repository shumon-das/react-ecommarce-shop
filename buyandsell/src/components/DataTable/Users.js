import { Table } from 'react-bootstrap'
import { MDBDataTable } from 'mdbreact'

function Users(){
    
    <Table striped bordered hover>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Designation</th>
            <th>Qualification</th>
        </thead>
        <tbody>
            <tr>
                <td>Mono Ranjan</td>
                <td>28</td>
                <td>Developer</td>
                <td>Javascript, PHP, Python</td>
            </tr>
            <tr>
                <td>Shumon Babu</td>
                <td>29</td>
                <td>Developer</td>
                <td>Javascript, PHP, Python</td>
            </tr>
        </tbody>
    </Table>
    const data = {
        columns : [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Designation',
                field: 'designation',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Qualification',
                field: 'qualification',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Country',
                field: 'country',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Salary',
                field: 'salary',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Year',
                field: 'year',
                sort: 'asc',
                width: 150
            }
        ],
        rows:[
            {
                name: 'Mono Ranjan',
                designation: 'Junior Software Developer',
                age: '28',
                qualification: 'PHP',
                country: 'Bangladesh',
                salary: '$1200',
                year: '2021'
            },
            {
                name: 'Mauro Sebastianelli',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'PHP',
                country: 'Italy',
                salary: '$5000',
                year: '2023'
            },
            {
                name: 'Francesco Paternostro',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'Javascript',
                country: 'Italy',
                salary: '$5000',
                year: '2022'
            },
            {
                name: 'MR Mono',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'Python',
                country: 'Dhaka, Bangladesh',
                salary: '$5000',
                year: '2023'
            },
            {
                name: 'Shumon Babu',
                designation: 'Mid-Level Software Developer',
                age: '29',
                qualification: 'Javascript',
                country: 'Dhaka',
                salary: '$1600',
                year: '2022'
            },
            {
                name: 'MR Mono',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'Python',
                country: 'Dhaka, Bangladesh',
                salary: '$5000',
                year: '2023'
            },
            {
                name: 'Mono Ranjan',
                designation: 'Junior Software Developer',
                age: '28',
                qualification: 'PHP',
                country: 'Bangladesh',
                salary: '$1200',
                year: '2021'
            },
            {
                name: 'Mauro Sebastianelli',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'PHP',
                country: 'Italy',
                salary: '$5000',
                year: '2023'
            },
            {
                name: 'Francesco Paternostro',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'Javascript',
                country: 'Italy',
                salary: '$5000',
                year: '2022'
            },
            {
                name: 'MR Mono',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'Python',
                country: 'Dhaka, Bangladesh',
                salary: '$5000',
                year: '2023'
            },
            {
                name: 'Shumon Babu',
                designation: 'Mid-Level Software Developer',
                age: '29',
                qualification: 'Javascript',
                country: 'Dhaka',
                salary: '$1600',
                year: '2022'
            },
            {
                name: 'MR Mono',
                designation: 'Senior Software Developer',
                age: '30',
                qualification: 'Python',
                country: 'Dhaka, Bangladesh',
                salary: '$5000',
                year: '2023'
            },
        ]
    }
    return <MDBDataTable striped bordered hover data={data} />
}
export default Users