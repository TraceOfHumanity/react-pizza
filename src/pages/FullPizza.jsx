import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";



const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate()

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64579cb40c15cb14820ca98f.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        console.log("error", error);
        alert("помилка при отриманні піци!");
        navigate('/')
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div className="">Завантаження....</div>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <p>
       
      </p>
      <h4>{pizza.price} UAH</h4>
    </div>
  );
};

export default FullPizza;
