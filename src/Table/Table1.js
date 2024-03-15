import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Table1.css'

function Table1() {
    let [table, settable] = useState(null)
    const fetchdata = async () => {
        try {
            let response = await axios.get("https://intradayscreener.com/api/openhighlow/cash")
            console.log(response)
            console.log(response.data)
            settable(response.data)
        }
        catch (err) {
            console.log(err)

        }

    }

    useEffect(() => {
        fetchdata()
    }, [])
  return (
    <div className='w-100 vh-100  justify-content-space-between'>
        <div className='w-50'>
        <div style={{ backgroundColor:"white" ,border: "1px solid black", display:"grid",padding:"20px",width:"1200px",gridRowGap: "10px"}}>
        <table>
            <thead>
               
                <tr className='start'>
                    
                    <th>
                        SYMBOL
                        
                    </th>
                    <th>
                        LTP
                    </th>
                    <th>
                        MOMENTUM
                    </th>
                    <th>
                        OPEN
                    </th>
                    <th>
                        DEVIATION FROM PIVOTS
                    </th>
                    <th>
                        TODAYS RANGE
                    </th>
                    <th>
                        OHL
                    </th>
                    
                </tr>
               
            </thead>
            <tbody>
            {table && table.map((item) => (
             
            <tr>
                <td style={{ backgroundColor: 'white', color: 'skyblue',fontWeight:"bold" }}>{item.symbol}
                <td>{item.timeframe}</td>
                </td>
                
                <td style={{ color: 'black',fontWight:"bolder" }}>{item.ltp}</td>
                <td style={{ backgroundColor: '#90EE90', color: 'green' ,width:"0.1rem" ,borderRadius:"2rem"}}>{item.open}</td>
                <td style={{ backgroundColor: '#90EE90', color: 'green' ,width:"0.1rem" ,borderRadius:"2rem"}}>{item.high}</td>
                <td style={{ backgroundColor: '#90EE90', color: 'green' ,width:"0.1rem" ,borderRadius:"2rem"}}>{item.low}</td>
                <td>{item.close}</td>
                <td>{item.change}</td>
                <td>{item.pctChange}</td>
                <td style={{ backgroundColor: 'lightpink', color: 'red' ,width:"0.1rem" ,borderRadius:"2rem"}}>{item.openHighLowSignal}</td>
               

                
             </tr>
             
            ))
            }
            </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}

export default Table1