"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import Footer from "../../components/Footer";
import data from "../../components/bible.json";
import { Bookmark, BookmarkCheck, Copy } from "lucide-react";
import { toast } from "react-hot-toast";
import { useClerk } from "@clerk/nextjs";
import axios from "axios";

const BibleData = () => {
  const { theme, toggleTheme } = useFunctions();
  //filter
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filteredBooks = data.books.filter((book) =>
    book.name.toLowerCase().includes(filterText.toLowerCase())
  );

  //bible
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [selectedVerseText, setSelectedVerseText] = useState(null);

  const handleClickBook = (bookName) => {
    setSelectedBook(bookName);
    setSelectedChapter(null);
    setSelectedVerseText(null);
  };

  const handleClickChapter = (chapterNum) => {
    setSelectedChapter(chapterNum);
    setSelectedVerseText(null);
    setSelectedVerse(null);
  };

  const handleClickVerse = (verseNum) => {
    const book = data.books.find((book) => book.name === selectedBook);
    const chapter = book.chapters.find(
      (chapter) => chapter.num === selectedChapter
    );
    const verseText = chapter.verses.find(
      (verse) => verse.num === verseNum
    ).text;
    setSelectedVerseText(verseText);
    setSelectedVerse(verseNum);
  };

  //copy and save
  const handleCopyText = () => {
    if (selectedVerseText) {
      navigator.clipboard.writeText(selectedVerseText);
      toast.success("Text copied!");
    }
  };

  //!booked
  const getCurrentDate = (date) => {
    if (!date) {
      date = new Date();
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [loading, setLoading] = useState(false);
  const clerk = useClerk();
  const userId = clerk.user ? clerk.user.id : null;
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [savedId, setSavedId] = useState(null);
  const [booked, setBooked] = useState(false);

  const handleBookPost = async (e) => {
    //! POST
    try {
      e.preventDefault();

      const data = {
        text: selectedVerseText,
        author: `${selectedBook} ${selectedChapter}:${selectedVerse}`,
        date: selectedDate,
        userId,
      };

      setLoading(true);

      const res = await axios.post("/api/saved", data);

      const refreshPage = () => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };

      if (res) {
        toast.success("Bookmark Saved!");
        refreshPage();
        setLoading(false);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const checkIfBooked = async () => {
      const verseReference = `${selectedBook} ${selectedChapter}:${selectedVerse}`;

      if (userId && verseReference) {
        try {
          const response = await axios.get(
            `/api/saved?userId=${userId}&verseReference=${encodeURIComponent(
              verseReference
            )}`
          );

          if (
            response.data.Saved2.some(
              (item) => item.userId === userId && item.author === verseReference
            )
          ) {
            const savedItem = response.data.Saved2.find(
              (item) => item.userId === userId && item.author === verseReference
            );
            setBooked(true);
            setSavedId(savedItem._id);
          } else {
            setBooked(false);
            setSavedId(null);
          }
        } catch (error) {
          console.error("Error checking if verse is saved:", error);
          setBooked(false);
        }
      }
    };

    checkIfBooked();
  }, [userId, selectedBook, selectedChapter, selectedVerse]);

  //!delete

  const handleBookDelete = async (text) => {
    if (savedId) {
      try {
        setLoading(true);
        const response = await axios.delete(`/api/saved?id=${savedId}`);
        if (response.status === 200) {
          toast.success("Bookmark removed!");
          setBooked(false);
          setSavedId(null);
        } else {
          throw new Error("Failed to delete bookmark");
        }
      } catch (error) {
        console.error("Error deleting the bookmark:", error);
        toast.error("Failed to delete bookmark.");
      } finally {
        setLoading(false);
      }
    }
  };

  const oldTestamentBooks = data.books.slice(0, 39);
  const newTestamentBooks = data.books.slice(39);

  const filteredOldTestamentBooks = oldTestamentBooks.filter((book) =>
    book.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const filteredNewTestamentBooks = newTestamentBooks.filter((book) =>
    book.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="flex justify-center items-center flex-col pt-28 pb-10 text-[var(--color2)] mb-10">
        <span className="mb-8">
          <h1 className="text-[40px] underline ">Bible</h1>
          {data.version} version
        </span>
        <input
          type="text"
          value={filterText}
          onChange={handleFilterChange}
          autoComplete="off"
          placeholder="Filter by book"
          className="bg-transparent border-t-transparent border-x-transparent  outline-none border-b-[var(--color2)] border p-1 w-64 sm:w-72"
        />

        <div
          className="flex flex-wrap gap-2 pt-10 px-2 justify-center items-center"
          style={{ maxWidth: "500px" }}
        >
          <div style={{ gridColumn: "span 5", margin: "20px 0 20px 0 " }}>
            <h2 className="text-center text-xl w-[95vw]">Old testament</h2>
          </div>
          {filteredOldTestamentBooks.length > 0 ? (
            filteredOldTestamentBooks.map((book, index) => (
              <button
                className="hover:text-blue-600"
                key={index}
                onClick={() => handleClickBook(book.name)}
              >
                {book.name}
              </button>
            ))
          ) : (
            <div>Nothing found.</div>
          )}

          <div style={{ gridColumn: "span 5", margin: "20px 0 20px 0 " }}>
            <h2 className="text-center text-xl w-[95vw]">New testament</h2>
          </div>
          {filteredNewTestamentBooks.length > 0 ? (
            filteredNewTestamentBooks.map((book, index) => (
              <button
                className="hover:text-blue-600"
                key={index}
                onClick={() => handleClickBook(book.name)}
              >
                {book.name}
              </button>
            ))
          ) : (
            <div>Nothing found.</div>
          )}
        </div>
        {selectedBook && (
          <div className="flex items-center justify-center flex-col pt-10">
            <h2 className="text-2xl">{selectedBook}</h2>
            <div className="flex items-center justify-center flex-col">
              <h3>Chapters</h3>
              <span
                className="flex flex-wrap gap-2 pt-10 px-2 justify-center items-center"
                style={{ maxWidth: "500px" }}
              >
                {data.books
                  .find((book) => book.name === selectedBook)
                  .chapters.map((chapter, index) => (
                    <button
                      className="hover:text-blue-600"
                      key={index}
                      onClick={() => handleClickChapter(chapter.num)}
                    >
                      {chapter.num}
                    </button>
                  ))}
              </span>
            </div>
            {selectedChapter && (
              <div className="flex items-center justify-center flex-col pt-10">
                <h3 className="text-xl">Chapter {selectedChapter}</h3>
                <div className="flex items-center justify-center flex-col">
                  <h4>Verses</h4>
                  <div className="flex justify-center">
                    <span
                      className="flex flex-wrap gap-2 pt-10 px-2 justify-center items-center"
                      style={{ maxWidth: "500px" }}
                    >
                      {data.books
                        .find((book) => book.name === selectedBook)
                        .chapters.find(
                          (chapter) => chapter.num === selectedChapter
                        )
                        .verses.map((verse, index) => (
                          <button
                            className={`hover:text-blue-600 ${
                              selectedVerse === verse.num ? "text-blue-600" : ""
                            }`}
                            key={index}
                            onClick={() => handleClickVerse(verse.num)}
                          >
                            {verse.num}
                          </button>
                        ))}
                    </span>
                  </div>
                </div>
                {selectedVerse && (
                  <div className="flex items-center justify-center flex-col pt-10 sm:w-[500px] w-[290px]">
                    <h3 className="text-xl">Verse {selectedVerse}</h3>
                    <span className="mt-6 text-center">
                      {selectedVerseText && <p>{selectedVerseText}</p>}
                      <span className="flex justify-center items-center gap-5 pt-5">
                        <Copy
                          onClick={handleCopyText}
                          size={32}
                          className="cursor-pointer  text-[var(--color2)]"
                        />
                        <div className="cursor-pointer text-[var(--color2)]">
                          {booked == false ? (
                            <Bookmark onClick={handleBookPost} size={32} />
                          ) : (
                            <BookmarkCheck
                              onClick={handleBookDelete}
                              size={32}
                            />
                          )}
                        </div>
                      </span>
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BibleData;
