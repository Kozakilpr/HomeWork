import { ADD_INGREDIENT, REMOVE_INGREDIENTS, COUNTER_PLUS, COUNTER_MINUS } from './redux/store';

export const addIngredient = (ingredient: string) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
} as const);

export const removeIngredients = () => ({
  type: REMOVE_INGREDIENTS,
} as const);

export const counterPlus = (value: number) => ({
  type: COUNTER_PLUS,
  payload: value,
} as const);

export const counterMinus = (value: number) => ({
  type: COUNTER_MINUS,
  payload: value,
} as const);
