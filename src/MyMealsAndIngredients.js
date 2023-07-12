const MyMealsAndIngredients = ({selectedDay, updatedDay}) => {

    const editMeal = (myInput, value) => {
        updatedDay({
            ...selectedDay,
            [myInput]:value
        })
    }
    if (!selectedDay) return <p> Plan your week ahead of time</p>

    return <div className="whole-plan">

            <input 
                type="text" 
                className="myInput" 
                placeholder="Today is ..." 
                id="title"
                value={selectedDay.title}
                onChange={(e) => editMeal ("title", e.target.value)}
            />

            <textarea 
                placeholder="Write your meal plan here"
                id="mealForADay"
                value={selectedDay.mealForADay}
                onChange={(e) => editMeal ("mealForADay", e.target.value)}
                ></textarea>

            <textarea 
                placeholder="List of ingridients"
                id="mealForADay"
                value={selectedDay.ingregians}
                onChange={(e) => editMeal ("ingregians", e.target.value)}
            ></textarea>

        </div>
}

export default MyMealsAndIngredients;