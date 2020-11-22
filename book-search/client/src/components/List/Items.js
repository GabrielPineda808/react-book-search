import React from 'react';
import API from '../../utils/API'

function List (props) {

    const bookie = API.getBooks('coraline').then(res => console.log(res.data.items ))
    // console.log(bookie)
    const styles ={
        marginLeft:{
            marginRight: 1000
        }
    }
        return (
            <div >
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title" style={styles.marginLeft}>Books</h5>
                        <ul className="list-group"> 
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <h4>{props.title}</h4>
                                        
                                        <h6>Written by :{props.author}</h6>
                                    </div>
                                    <div className="col-lg-4"></div>
                                    <div className="col-lg-4">
                                        <button type='button' className="btn mr-1 btn-dark">Save</button>
                                        <a href={props.link} target="_blank"><button type='button' className="btn mr-1 btn-dark">View</button></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4"><img src={props.image}></img></div>
                                    <div className="col-lg-8"><p>{props.description}</p></div>
                                </div>
                            </li>
                            <br></br>
                        </ul>
                    </div>
                </div>
            </div>
          )
}

export default List;