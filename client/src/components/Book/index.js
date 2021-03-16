import React from 'react';
import "./style.css"

function Book() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <img className="thumbnail" alt="" src=""/>
                </div>
                <div className="col-8">
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
