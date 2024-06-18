import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, removeIngredients } from '../actions';
import { RootState } from '../redux/store';

// Імпорт зображень
import cheeseImage from '../image/сир.jpg';
import breadImage from '../image/Хліб.jpg';
import sausageImage from '../image/Ковбаса.jpg'; 
import sandwichImage from '../image/Бутер.jpg';

const Sandwich: React.FC = () => {
  const dispatch = useDispatch(); // Використовується для відправки дій в Redux
  const ingredients = useSelector((state: RootState) => state.sandwich.ingredients); // Отримання інгредієнтів з Redux стану

  // Локальний стан для відображення текстів бутербродів та зображень
  const [sandwichTexts, setSandwichTexts] = useState<string[]>([]);
  const [showCheeseImage, setShowCheeseImage] = useState<boolean>(false);
  const [showBreadImage, setShowBreadImage] = useState<boolean>(false); 
  const [showSausageImage, setShowSausageImage] = useState<boolean>(false); 
  const [showSandwichImage, setShowSandwichImage] = useState<boolean>(false); 

  // Обробник додавання хліба
  const handleAddBread = () => {
    dispatch(addIngredient('хлеб')); // Відправка дії додавання інгредієнта
    setShowBreadImage(true); // Відображення зображення хліба
  };

  // Обробник додавання сиру
  const handleAddCheese = () => {
    dispatch(addIngredient('сыр')); // Відправка дії додавання інгредієнта
    setShowCheeseImage(true); // Відображення зображення сиру
  };

  // Обробник додавання ковбаси
  const handleAddSausage = () => {
    dispatch(addIngredient('колбаса')); // Відправка дії додавання інгредієнта
    setShowSausageImage(true); // Відображення зображення ковбаси
  };

  // Обробник видалення інгредієнтів
  const handleRemoveIngredient = () => {
    dispatch(removeIngredients()); // Відправка дії видалення інгредієнтів
  };

  // Обробник додавання тексту бутерброда
  const addSandwichText = () => {
    const newSandwichText = `Бутерброд: ${ingredients.join(' ')}`; // Створення тексту бутерброда
    setSandwichTexts([...sandwichTexts, newSandwichText]); // Додавання тексту до стану
    setShowSandwichImage(true); // Відображення зображення бутерброда
  };

  return (
    <div>
      {/* Відображення текстів бутербродів */}
      {sandwichTexts.map((text, index) => (
        <div key={index}>
          <h1>{text}</h1>
        </div>
      ))}
      {/* Кнопки для додавання інгредієнтів та показу бутерброда */}
      <button onClick={handleAddBread}>Добавить хлеб</button>
      <button onClick={handleAddCheese}>Добавить сыр</button>
      <button onClick={handleAddSausage}>Добавить колбасу</button>
      <button onClick={addSandwichText}>Показать бутерброд</button>
      <div>
        <h2>Додані інгредієнти:</h2>
        <ul>
          {/* Відображення списку інгредієнтів */}
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient}
              <button onClick={() => handleRemoveIngredient()}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Відображення зображень інгредієнтів та бутерброда */}
      {showCheeseImage && (
        <img src={cheeseImage} alt="Сыр" style={{ width: '150px', height: '150px', borderRadius: '20%' }} />
      )}
      {showBreadImage && (
        <img src={breadImage} alt="Хлеб" style={{ width: '150px', height: '150px', borderRadius: '20%' }} />
      )}
      {showSausageImage && (
        <img src={sausageImage} alt="Колбаса" style={{ width: '150px', height: '150px', borderRadius: '20%' }} />
      )}
      {showSandwichImage && (
        <img src={sandwichImage} alt="Бутерброд" style={{ width: '550px', height: '300px', borderRadius: '2%' }} />
      )}
    </div>
  );
};

export default Sandwich;
