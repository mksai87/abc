let totalCalories = 0;
const foodCalories = {
    'apple': 95,
    'banana': 105,
    'orange': 62,
    'bread': 79,
    'egg': 78,
    'milk shake':200,
    'chicken':150,
    'idly':30,
    'puri':60,
    'dosa':65,
    'masala dosa':70,
    'veg pizza':120,
    'burger':210,
    'sandwich':90,
    'rice':100,
    'cool drink':350,
    'chips':79,
    'ice cream':400,
    'noodles':130,
    'egg puff':82,
    'chicken nuggets':70,
    'french fries':92,
    'brownie':84,
    'pizza':150,
    'sambar':90,
    'biryani':160   // Add more food items and their calorie values here
};

function addFoodItem() {
    const foodInput = document.getElementById('foodInput').value.toLowerCase();
    const foodList = document.getElementById('foodList');
    const totalCaloriesElement = document.getElementById('totalCalories');

    if (foodCalories[foodInput]) {
        const calories = foodCalories[foodInput];
        totalCalories += calories;

        const listItem = document.createElement('li');
        listItem.textContent = `${foodInput} - ${calories} calories`;
        foodList.appendChild(listItem);

        totalCaloriesElement.textContent = totalCalories;
    } else {
        alert('Food item not found in the database');
    }

    document.getElementById('foodInput').value = '';
}