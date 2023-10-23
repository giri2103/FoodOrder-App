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
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
