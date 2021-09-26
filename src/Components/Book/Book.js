import React from 'react';
import './Book.css';

const Books = (props) => {

    const { name, writter, rating, details, price, image } = props.book;

    return (
        <div>
            <div className="col">
                <div className="card border-0 rounded-3 shadow-lg">
                    <img src={image} className="card-img-top img-fluid" alt="img" />
                    <div className="card-body">
                        <h4 className="card-title fw-bold text-dark">{name}</h4>
                        <p className="card-text text-muted">By {writter}</p>
                        <p className="card-text">{details}</p>
                        <p className="card-text">Rating: {rating}</p>
                        <p className="card-text fw-bolder">Price: $ {price}</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={() => props.handleBooks(props.book)} type="button" class="btn btn-warning fw-bold"><i className="fas fa-shopping-cart"></i> Add To Read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;