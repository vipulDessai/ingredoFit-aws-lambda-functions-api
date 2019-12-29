const FOOD_DATA = [
    { name: 'lemon', calories: 17, protein: '0.6g', c: '51%' },
    { name: 'lime', calories: 20, protein: '0.5g', c: '32%' },
    { name: 'seafood', calories: 58, protein: '8g', c: '7%' },
    { name: 'fish', calories: 175, protein: '19g', c: '5%' },
    { name: 'salt', calories: 1, protein: '1g', c: '1%' },
    { name: 'vegetable', calories: 59, protein: '2.5g', c: '4%' },
    { name: 'garlic', calories: 49, protein: '1g', c: '2%' },
    { name: 'clam', calories: 100, protein: '5g', c: '2%' },
    { name: 'wine', calories: 24, protein: '1g', c: '1%' },
    { name: 'oil', calories: 40, protein: '1g', c: '1%' },
    { name: 'butter', calories: 102, protein: '0.1g', c: '1%' },
    { name: 'mussel', calories: 146, protein: '20g', c: '19%' },
    { name: 'sauce', calories: 1, protein: '1g', c: '1%' },
    { name: 'salad', calories: 152, protein: '1g', c: '20%' },
    { name: 'shellfish', calories: 99, protein: '24g', c: '1%' },
    { name: 'citrus', calories: 97, protein: '2g', c: '5%' },
    { name: 'oyster', calories: 169, protein: '7g', c: '5%' },
    { name: 'white wine', calories: 24, protein: '1g', c: '1%' },
    { name: 'olive oil', calories: 40, protein: '0g', c: '0%' },
    { name: 'syrup', calories: 104, protein: '0g', c: '0%' },
    { name: 'waffle', calories: 291, protein: '8g', c: '0%' },
    { name: 'french toast', calories: 229, protein: '8g', c: '0%' },
    { name: 'toast', calories: 313, protein: '13g', c: '0%' },
    { name: 'maple syrup', calories: 104, protein: '0g', c: '0%' },
    { name: 'chocolate', calories: 155, protein: '1.4g', c: '0%' },
    { name: 'coffee', calories: 0, protein: '0.1g', c: '0%' },
    { name: 'blueberry', calories: 8, protein: '0.5g', c: '11%' },
    { name: 'bacon', calories: 43, protein: '3g', c: '0%' },
    { name: 'yogurt', calories: 59, protein: '10g', c: '0%' },
    { name: 'rice', calories: 124, protein: '2.7g', c: '1%' },
    { name: 'oil', calories: 40, protein: '1g', c: '1%' },
    { name: 'pizza', calories: 285, protein: '12g', c: '2%' },
    { name: 'crust', calories: 120, protein: '5g', c: '1%' },
    { name: 'pepperoni', calories: 10, protein: '1g', c: '1%' },
    { name: 'dough', calories: 82, protein: '3.3g', c: '1%' },
    { name: 'mozzarella', calories: 70, protein: '7g', c: '1%' },
    { name: 'cheese', calories: 68, protein: '4.2g', c: '1%' },
    { name: 'cheddar', calories: 113, protein: '7g', c: '0%' },
    { name: 'onion', calories: 24, protein: '0.7g', c: '7%' },
    { name: 'tomato', calories: 25, protein: '2g', c: '3%' },
    { name: 'salami', calories: 25, protein: '2.7g', c: '1%' },
    { name: 'pie', calories: 67, protein: '0.7g', c: '1%' },
    { name: 'ham', calories: 123, protein: '18g', c: '1%' },
    { name: 'frozen pizza', calories: 285, protein: '12g', c: '2%' },
    { name: 'basil', calories: 1, protein: '1g', c: '1%' },
    { name: 'meat', calories: 122, protein: '22g', c: '1%' },
    { name: 'pastry', calories: 156, protein: '2.1g', c: '1%' },
    { name: 'mushrooms', calories: 10, protein: '1g', c: '1%' },
    { name: 'sausage', calories: 229, protein: '30g', c: '3%' },
    { name: 'strawberry', calories: 4, protein: '1g', c: '1%' },
    { name: 'watermelon', calories: 67, protein: '1.7g', c: '20%' },
    { name: 'raspberry', calories: 65, protein: '1.5g', c: '30%' },
    { name: 'chiken', calories: 200, protein: '40g', c: '5%' },
    { name: 'tuna', calories: 175, protein: '19g', c: '5%' },
    { name: 'beef', calories: 200, protein: '20g', c: '2%' },
    { name: 'steak', calories: 200, protein: '62g', c: '1%' },
    { name: 'pork', calories: 206, protein: '27g', c: '2%' },
    { name: 'crab', calories: 100, protein: '83g', c: '3%' },
    { name: 'mint', calories: 2, protein: '0.12g', c: '1%' },
    { name: 'banana', calories: 89, protein: '1.1g', c: '14%' },
    { name: 'berry', calories: 57, protein: '0.7g', c: '16%' },
    { name: 'chicken', calories: 167, protein: '25g', c: '0%' },
    { name: 'salmon', calories: 208, protein: '20g', c: '6%' },
    { name: 'peanut', calories: 161, protein: '7g', c: '0%' },
    { name: 'coconut', calories: 159, protein: '1.5g', c: '2%' },
    { name: 'honey', calories: 64, protein: '0.1g', c: '0%' },
    { name: 'shrimp', calories: 7, protein: '3g', c: '0%' },
    { name: 'nachos', calories: 346, protein: '9g', c: '2%' },
    { name: 'salsa', calories: 36, protein: '1.5g', c: '6%' },
    { name: 'avocado', calories: 160, protein: '2g', c: '16%' },
    { name: 'potato', calories: 77, protein: '2g', c: '32%' },
    { name: 'chili', calories: 40, protein: '1.9g', c: '8%' },
    { name: 'corn', calories: 44, protein: '1.6g', c: '0%' },
    { name: 'chips', calories: 536, protein: '7g', c: '51%' },
    { name: 'pepper', calories: 40, protein: '2g', c: '157%' },
  ];
  
  export { FOOD_DATA }