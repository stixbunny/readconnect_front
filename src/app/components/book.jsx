import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Book({ book }) {
  function getAuthors(authorList) {
    const linkList = [];
    for (const author of authorList) {
      console.log('author ' + author.id);
      linkList.push(<Link href={'/author/' + author.id}>{author.name}</Link>);
    }
    return linkList.join('');
  }

  function getCategories(categoriesList) {
    const linkList = [];
    for (const category of categoriesList) {
      linkList.push(
        <Link href={'/category/' + category.id}>{category.name}</Link>,
      );
    }
    return linkList;
  }

  return (
    <div className="flex flex-row items-center justify-start gap-4 h-[200px]">
      <div className="min-w-[100px] max-w-[100px] aspect-[4-3] object-cover">
        <Image
          src={book.img}
          alt={'Picture of ' + book.img}
          width={150}
          height={188}
        />
      </div>
      <div className="flex flex-col text-sm w-full">
        <h1 className="line-clamp-1 font-merriweather font-bold hover:underline">
          <Link href={'/book/' + book.id}>{book.title}</Link>
        </h1>
        <h2 className="line-clamp-1 text-sm">
          <span>by </span>
          <span className="font-merriweather">
            {book.authors.map((author, index) => {
              return (
                <Fragment key={`${author.name}-${index}`}>
                  {index ? ', ' : ''}
                  <Link
                    href={`/author/${author.id}`}
                    className="hover:underline"
                  >
                    {author.name}
                  </Link>
                </Fragment>
              );
            })}
          </span>
        </h2>
        <p>{'(' + book.publishedDate + ')'}</p>
        <p className="line-clamp-2">{book.shortDescription}</p>
        <div className='py-1'>Rating: </div>
        <div className="flex flex-col gap-2 sm:flex-row justify-start">
          <button className="p-1 px-3 rounded bg-green-700 text-white hover:bg-green-800">
            Want to read
          </button>
          <button className="p-1 px-3 rounded bg-sky-700 text-white hover:bg-sky-800">
            Already read it!
          </button>
        </div>
      </div>
    </div>
  );
};