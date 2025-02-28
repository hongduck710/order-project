import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetail = () => {
    const { id } = useParams(); // URL에서 id 가져오기
    const { books } = useSelector((state) => state.bookList); // Redux 스토어에서 책 목록 가져오기

    // books 배열에서 해당 ID에 맞는 책 찾기
    const book = books.find((b) => b.id.toString() === id);

    // 책이 없을 경우 예외 처리
    if (!book) {
        return <h1>책 정보를 찾을 수 없습니다.</h1>;
    }

    return (
        <>
            <h1>{book.title}</h1>
            <img src={book.imgUrl} alt={book.title} />
            <ul>
                <li>저자: {book.author}</li>
                <li>출판사: {book.publisher}</li>
                <li>가격: {book.price}원</li>
            </ul>
        </>
    );
};

export default BookDetail;
