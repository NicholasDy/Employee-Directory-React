import { useEffect, useState } from "react"
import Table from "../components/Table/Table";
import { useTable, columns } from 'react-table'
import API from "../utils/API";

function Home() {

    //call state 
    // name, email, gender, age, cell
    const [data, setData] = useState();


    // useEffect(() => {
    //     async function getApi() {
    //         await 
    //     }
    // })

    API.getRandomPeople()
        .then(res => {
            console.log(res.data.results)
            // have to be careful or else the instance is going to loop over itself
            // setData(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    // the data for the api table 
    // const data = React.useMemo(() => [
    //     {

    //     }
    // ])
    // // the column headers and the keys to the coloumn names
    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: 'Column 1',
    //             accessor: 'col1', // accessor is the "key" in the data
    //         },
    //     ]
    // )
    const instance = useTable(
        {
            data: [],
            columns: [],
        }
    )

    return (
        <div>
            <Table columns={columns} data={data}/>
        </div>
    )
}


export default Home