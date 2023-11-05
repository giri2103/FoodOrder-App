import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chhole (Chickpea Curry)",
    description: "Made with convenient canned beans",
    price: 125,
  },
  {
    id: "m2",
    name: "Chitrannam (Lemon Rice)",
    description: "fried rice with vegies",
    price: 245,
  },
  {
    id: "m3",
    name: "Baingan Bharta",
    description: "This spicy eggplant dish",
    price: 89,
  },
  {
    id: "m4",
    name: "Daal Tarka",
    description: "Variations of daal (or dal) and tarka (or tadka)",
    price: 129,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
