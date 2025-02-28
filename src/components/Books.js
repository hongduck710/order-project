import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookSlice } from "../store/slice/bookSlice"; 


const Books = () => {
    const [bookData, setBookData] = useState([]);
    const dispatch = useDispatch();
    const {books, loading, error} = useSelector((state) => state.bookList);

    useEffect(() => {
        dispatch(bookSlice());
        console.log("books", books);
        //setUserData(users); setUserData와 dispatch같이 쓰면 안됨(?)
    }, [dispatch]);

    useEffect(() => {
        setBookData(books);
    },[books]);

    if(loading) {return <div>불러오는 중...</div>}
    return (
        <>
            <ul>
                {bookData?.map((book) => (
                        <li key={book.id}>
               
                                <div><img src={book.imgUrl} alt={book.title} / ></div>
                                <ul>
                                    <li>저자{book.author}</li>
                                    <li>판매가{book.price}</li>
                                    <li>출판사{book.publisher}</li>
                                </ul>
                
                        </li>
                ))}
            </ul>
        </>
    );
}

export default Books;