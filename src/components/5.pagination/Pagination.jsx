import { useEffect, useState } from "react";
import classes from "./pagination.module.css";

const Pagination = () => {
  // https://jsonplaceholder.typicode.com/posts
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [itemPerPage] = useState(10);
  //currentPage
  //totalPage

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("network error");
      }
      const data = await response.json();
      setProducts(data);
      setTotalPage(data.length / itemPerPage);
    } catch (error) {
      console.log(error);
    }
  };

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  function generateNumbers() {
    const pages = [];
    for (let i = 0; i < totalPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  function setPage(currPage) {
    setCurrentPage(currPage);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <div>
        {products &&
          products.slice(startIndex, endIndex).map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div>{item.title}</div>
                  <div>{item.id}</div>
                </div>
              </>
            );
          })}
      </div>
      <div>
        <button
          className={classes.btn}
          disabled={currentPage === 1}
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          prev
        </button>
        {generateNumbers().map((_, index) => (
          <button
            key={index}
            className={classes.btn}
            style={{
              backgroundColor: currentPage === index + 1 ? "yellow" : "",
            }}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={classes.btn}
          disabled={currentPage === generateNumbers().length}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Pagination;
