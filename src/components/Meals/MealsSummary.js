import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Healthy Food, Delivered To You</h2>
      <p>
        Choose your favorite Healthy meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with fresh, high-quality ingredients with rich vitamins, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;