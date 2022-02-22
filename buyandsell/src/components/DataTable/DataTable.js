import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import {useState, useEffect} from 'react'

function DATATable(){

        const [content, setContent] = useState([]);

        useEffect(()=>{
            const fetchContents = async () => {
                  const {data} = await axios.get('/api/datatabledata')
                       setContent(data)
                  }
                  fetchContents()
        }, [])

        const data = {
                columns: [
                        {
                          label: 'Name',
                          field: 'name',
                          sort: 'asc',
                          width: 150
                        },
                        {
                          label: 'Position',
                          field: 'position',
                          sort: 'asc',
                          width: 270
                        },
                        {
                          label: 'Office',
                          field: 'office',
                          sort: 'asc',
                          width: 200
                        },
                        {
                          label: 'Age',
                          field: 'age',
                          sort: 'asc',
                          width: 100
                        },
                        {
                          label: 'Start date',
                          field: 'date',
                          sort: 'asc',
                          width: 150
                        },
                        {
                          label: 'Salary',
                          field: 'salary',
                          sort: 'asc',
                          width: 100
                        }
                ],
                rows:content
        }

        return ( <MDBDataTable striped bordered hover data={data} /> );
        
}
export default DATATable