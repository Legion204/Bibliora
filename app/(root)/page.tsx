import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

const Home = () => {
  return (
    <>
      <BookOverview {...sampleBooks[0]}></BookOverview>
      <BookList title='Latest Books' books={sampleBooks} containerClassName='mt-28'></BookList>
    </>
  );
};

export default Home;