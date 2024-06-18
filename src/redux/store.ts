import { combineReducers, legacy_createStore } from 'redux';

// Оголошення констант для типів дій
export const ADD_INGREDIENT = 'ADD_INGREDIENT' as const;
export const REMOVE_INGREDIENTS = 'REMOVE_INGREDIENTS' as const;
export const COUNTER_PLUS = 'COUNTER_PLUS' as const;
export const COUNTER_MINUS = 'COUNTER_MINUS' as const;

// Інтерфейси для типів дій
interface AddIngredientAction {
  type: typeof ADD_INGREDIENT; // Тип дії
  payload: string; // Навантаження (payload) дії, в даному випадку рядок
}

interface RemoveIngredientsAction {
  type: typeof REMOVE_INGREDIENTS; // Тип дії
}

interface CounterPlusAction {
  type: typeof COUNTER_PLUS; // Тип дії
  payload: number; // Навантаження (payload) дії, в даному випадку число
}

interface CounterMinusAction {
  type: typeof COUNTER_MINUS; // Тип дії
  payload: number; // Навантаження (payload) дії, в даному випадку число
}

// Типи дій для кожного ред'юсера
type SandwichActionTypes = AddIngredientAction | RemoveIngredientsAction;
type CounterActionTypes = CounterPlusAction | CounterMinusAction;

// Інтерфейси для станів
interface SandwichState {
  ingredients: string[]; // Стан містить масив рядків, кожен з яких є інгредієнтом
}

interface CounterState {
  value: number; // Стан містить числове значення лічильника
}

// Початкові значення станів
const initialSandwichState: SandwichState = {
  ingredients: [],
};

const initialCounterState: CounterState = {
  value: 0,
};

// Ред'юсер для сендвічів
const sandwichReducer = (state = initialSandwichState, action: SandwichActionTypes): SandwichState => {
  switch (action.type) {
    case ADD_INGREDIENT:
      // Додаємо інгредієнт до списку
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case REMOVE_INGREDIENTS:
      // Очищаємо список інгредієнтів
      return {
        ...state,
        ingredients: [],
      };
    default:
      return state; // Повертаємо поточний стан, якщо дія не розпізнана
  }
};

// Ред'юсер для лічильника
const counterReducer = (state = initialCounterState, action: CounterActionTypes): CounterState => {
  switch (action.type) {
    case COUNTER_PLUS:
      // Збільшуємо значення лічильника на вказане значення
      return {
        ...state,
        value: state.value + action.payload,
      };
    case COUNTER_MINUS:
      // Зменшуємо значення лічильника на вказане значення
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state; // Повертаємо поточний стан, якщо дія не розпізнана
  }
};

// Комбінація ред'юсерів в один кореневий ред'юсер
const rootReducer = combineReducers({
  sandwich: sandwichReducer, // Ред'юсер для сендвічів
  counter: counterReducer, // Ред'юсер для лічильника
});

// Створення магазину Redux з використанням кореневого ред'юсера
const store = legacy_createStore(rootReducer);

export default store; // Експортуємо магазин за замовчуванням
export type RootState = ReturnType<typeof store.getState>; // Тип для стану всього додатку
export type AppDispatch = typeof store.dispatch; // Тип для функції dispatch, яка відправляє дії
