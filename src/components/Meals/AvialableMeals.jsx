import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvialableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map(meal => (
          <li key={meal.id}>
            <div>
              <h3>{meal.name}</h3>
              <div>{meal.description}</div>
              <div>{meal.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AvialableMeals