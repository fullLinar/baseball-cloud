import React, { useState } from "react";
import { Container, Button, NavBtn } from "./styled";
const Paginator = ({ totalCount, setOffset, count }) => {
  const [activePage, setActivePage] = useState(1);
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCount / count); i++) {
    pageNumbers.push(i);
  }
  let pagesRange = [];
  let rageStart = activePage - 2;
  let rageEnd = activePage + 2;

  const renderPageNumber = ({ pageNumbers, activePage }) => {
    if (rageStart < pageNumbers[0]) {
      rageStart = 1;
    }

    if (rageEnd >= pageNumbers.length - 1) {
      rageEnd = pageNumbers.length;
    }

    for (let i = rageStart; i <= rageEnd; i++) {
      pagesRange.push(i);
    }

    return pagesRange.map((num) => (
      <NavBtn isActive={num === activePage ? true : false} onClick={choosePage}>
        {num}
      </NavBtn>
    ));
  };

  const nextPage = () => {
    if (activePage < pageNumbers.length) {
      setActivePage(activePage + 1);
      let offset = (activePage - 1) * count;
      setOffset(offset);
    }
  };
  const prevPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
      if (activePage === 1) {
        setOffset(0);
      } else {
        let offset = (activePage - 1) * count;
        setOffset(offset);
      }
    }
  };

  const choosePage = (e) => {
    const { innerHTML } = e.target;
    setActivePage(parseInt(innerHTML));
    setOffset((innerHTML - 1) * count);
  };

  return (
    <Container>
      <Button
        disabled={pageNumbers[0] === activePage ? true : false}
        onClick={prevPage}
      >
        «
      </Button>
      {rageStart >= 3 ? (
        <>
          <NavBtn
            isActive={1 === activePage ? true : false}
            onClick={choosePage}
          >
            1
          </NavBtn>
          <span>...</span>
        </>
      ) : null}
      {renderPageNumber({ pageNumbers, activePage })}
      {rageEnd !== pageNumbers.length ? (
        <>
          <span>...</span>
          <NavBtn
            isActive={pageNumbers.length === activePage ? true : false}
            onClick={choosePage}
          >
            {pageNumbers.length}
          </NavBtn>
        </>
      ) : null}
      <Button
        disabled={
          pageNumbers[pageNumbers.length - 1] === activePage ? true : false
        }
        onClick={nextPage}
      >
        »
      </Button>
    </Container>
  );
};

export default Paginator;