
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { saveToLocalStorageBookCart } from "../Utils/LocalStorageBookCart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleBook = (data) => {
    saveToLocalStorageBookCart(data);
}

const WantToBuyCard = ({ book }) => {
    
    const { bookName, image, review } = book;

    return (
      <div className="">
        <ToastContainer/>
            <Card className="mt-6">
      <CardHeader color="blue-gray" className="relative flex justify-center items-center">
        <img
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {bookName}
        </Typography>
        <Typography>
          {review}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => handleBook(book)} className="bg-red-500">Add to cart</Button>
      </CardFooter>
    </Card>

        </div>
    );
};

export default WantToBuyCard;