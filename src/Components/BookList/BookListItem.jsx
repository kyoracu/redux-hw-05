import React from 'react';
import '../../styles.css';
const BookListItem = ({ id, title, imgUrl, author, price }) => {
  return (
    <div key={id} className="book-page">
      <div className="book-page-container">
        <img className="book-page-image" src={imgUrl} alt={title} />
        <div className="book-page-details">
          <h3 className="book-page-title">{title}</h3>
          <h4 className="book-page-author">by {author}</h4>
          <p className="book-page-price">{price}$</p>
          <button className="book-page-button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
