import { createBrowserRouter } from "react-router-dom";
import Error from "../Error/Error";
import ListedBook from "../ListedBooks/ListedBook";
import PagesToRead from "../PagesToRead/PagesToRead";
import Home from "../Home/Home";
import Roots from "../Roots/Roots";
import BookDetails from "../BookDetails/BookDetails";
import Wishlist from "../Wishlist/Wishlist";
import ReadBooks from "../ReadBooks/ReadBooks";
import WantToBuy from "../WantToBuy/WantToBuy";
import BookBuyCards from "../BookBuyCards/BookBuyCards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-to-books",
        element: <ListedBook />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/book-shop",
        element: <WantToBuy />,
      },
      {
        path: "/book-cart",
        element: <BookBuyCards/>
      }
    ],
  },
]);

export default router;
