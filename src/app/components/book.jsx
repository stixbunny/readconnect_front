import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { list } from 'postcss';

const Book = ({ book }) => {
  function getAuthors(authorList) {
    linkList = [];
    for (const author in authorList) {
      linkList.push(<Link to={'/author/' + author.id}>{author.name}</Link>);
    }
    return linkList;
  }

  function getCategories(categoriesList) {
    linkList = [];
    for (const category in categoriesList) {
      linkList.push(
        <Link to={'/category/' + category.id}>{category.name}</Link>,
      );
    }
    return linkList;
  }

  return (
    <div className="flex flex-row items-center justify-start">
      <div className="h-full aspect-[4-3] object-cover">
        <Image
          src={book.img}
          alt={'Picture of ' + book.img}
          width={150}
          height={188}
        />
      </div>
      <div>
        <h1>
          <Link to={'/book/' + book.id}>{book.title}</Link>
        </h1>
        <h2>{'by ' + getAuthors(book.authors).join(', ')}</h2>
        <p>{'(' + book.date.toLocaleDateString() + ')'}</p>
        <p>{book.shortDescription}</p>
        <div>Rating: </div>
        <button className='p-1 rounded bg-green-600 text-white hover:bg-green-800'>Add to my list</button>
      </div>
    </div>
  );
};

export default Book;
