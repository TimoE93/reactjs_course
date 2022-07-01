import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
    

    if (props.items.length === 0 ) {
        return <h2 className="expenses-list__fallback"><p>No expenses found.</p></h2>
    }

    return (
        <ul className="expenses-list">
             {/*map hat index als 2. parameter. kann auch als key genutzt werden*/}
            {props.items.map((expense) => (
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
            />
            ))};
        </ul>
    )
}

export default ExpensesList;