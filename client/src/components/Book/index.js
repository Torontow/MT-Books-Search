import React from 'react';
import "./style.css"

function Book() {
    return (
        <div className="container border border-2 border-dark rounded">
            <div className="row">
                <div className="col-2">
                    <img className="thumbnail" alt="" src=""/>
                </div>
                <div className="col-9">
                    <h4>Title</h4>
                    <h4>Author</h4>
                    <h5>Description</h5>
                </div>
                <div className="col-1">
                    <button>View</button>
                </div>
            </div>
            
        </div>
    )
}

export default Book
