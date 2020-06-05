import React from 'react';

const FaceRecognitionImage = ({searchParameters, books, bookCount}) =>{
    
    console.log('in FaceRecognitionImage searchParameters: ', searchParameters);
    console.log('in FaceRecognitionImage books: ', books.length);
    if(!books.length){
        return (
           
            <article className="mw5 center1 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                        <div className="tc">
                            <img alt='' src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h3 w3 dib" title="Photo of a kitty staring at you" />
                            <h1 className="f4">Mimi Whitehouse</h1>
                            <hr className="mw3 bb bw1 b--black-10" />
                        </div>
                        <p className="lh-copy measure center f6 black-70">
                            Quite affectionate and outgoing.
                            She loves to get chin scratches and will
                            roll around on the floor waiting for you give her more of them.
                        </p>
           </article>
          
        )
    }
    return (
        <div className='f4 center1 pa2 w-100 shadow-5'>
            <div className='w-100'>Your Search: {searchParameters}</div> 
            <div className='w-100'>Books Found: {bookCount}</div> 
           
                {books.map((book,i) =>
                    <article key={book.id} className="center1 bg-white br3 pa3 pa4-ns mv3 ba b--black-10 w-70">
                        <div className="tc">
                            <img alt='' src={book.volumeInfo.imageLinks.thumbnail.substring(0,book.volumeInfo.imageLinks.thumbnail.indexOf('&edge'))} className="dib" title={book.volumeInfo.title} />
                            <h1 className="f4">{book.volumeInfo.title}</h1>
                            <h3 className="f5">{book.volumeInfo.authors}</h3>
                            <hr className="mw3 bb bw1 b--black-10" />
                        </div>
                       
                        <div className="pa4">
                            <blockquote className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                                <p className="f5 f4-m lh-copy mt0">
                                {book.volumeInfo.description}
                                </p>
                                
                            </blockquote>
                        </div>
                    </article>

                   
                   
                )}
        </div>
   )
}


export default FaceRecognitionImage