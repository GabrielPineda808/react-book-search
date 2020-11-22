import React from 'react';
import API from '../../utils/API'

function List () {

    const bookie = API.getBooks('coraline').then(res => console.log(res.data.items ))
    // console.log(bookie)
    
        return (
            <div className='container'>
                <ul className="list-group"> 
                    <li className="list-group-item"></li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
          )
}

export default List;