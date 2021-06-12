import { useEffect, useState } from "react"
import API from "../../utils/API"

function Table() {
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
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table