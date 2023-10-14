algebra = [
    {
        "question": "If a drip of water is equivalent to $\\frac{1}{4}$ of a milliliter, how many drips are in a liter of water? Note: 1 liter = 1000 milliliters.",
        "model_answer": "We know that 1 liter of water is equivalent to 1000 milliliters. Since 1 milliliter is equivalent to 4 drips, we have that 1000 milliliters is equivalent to $4\\cdot1000=4000$ drips. Therefore, the answer is $\\boxed{4000}$. Final Answer: The final answer is $4000$.",
        "reference_answer": "If a drip of water is equivalent to $\\frac{1}{4}$ of a milliliter, then $4$ drips of water must be equivalent to $1$ milliliter of water. Since there are $1000$ milliliters in a liter, it follows that there are $4 \\times 1000 = \\boxed{4000}$ drips in a liter of water.",
        "problem_source": "MATH Algebra Level 1",
        "result": "Correct"
    },
    {
        "question": "If a slice of bread contains 75 calories, and John ate $\\frac{2}{3}$ of it, how many calories did he consume?",
        "model_answer": "John ate $\\frac{2}{3}$ of the slice of bread, which means he consumed $\\frac{2}{3}\\cdot75 = 50$ calories. Therefore, the answer is $\\boxed{50}$. Final Answer: The final answer is $50$.",
        "reference_answer": "If a slice of bread contains 75 calories, and John ate $\\frac{2}{3}$ of it, he consumed $\\frac{2}{3} \\times 75 = \\boxed{50}$ calories.",
        "problem_source": "MATH Algebra Level 1",
        "result": "Correct"
    },
    {
        "question": "Solve for $x$ in the equation: $2x + 5 = 11$.",
        "model_answer": "Subtracting 5 from both sides, we get $2x = 6$. Dividing both sides by 2, we find $x = 3$. Therefore, the answer is $\\boxed{3}$. Final Answer: The final answer is $3$.",
        "reference_answer": "From $2x + 5 = 11$, subtracting 5 from both sides gives $2x = 6$. Dividing both sides by 2, we get $x = \\boxed{3}$.",
        "problem_source": "MATH Algebra Level 1",
        "result": "Correct"
    }
]

probability = [
    {
        "question": "A die is rolled. What is the probability of getting an even number?",
        "model_answer": "There are 3 even numbers on a die (2, 4, 6), and 6 possible outcomes in total. Therefore, the probability is $\\frac{3}{6} = \\boxed{\\frac{1}{2}}$. Final Answer: The final answer is $\\frac{1}{2}$.",
        "reference_answer": "On a standard die, there are 3 even numbers out of a total of 6 numbers. Hence, the probability is $\\frac{3}{6} = \\boxed{\\frac{1}{2}}$.",
        "problem_source": "MATH Probability Level 1",
        "result": "Correct"
    },
    {
        "question": "In a deck of 52 cards, what's the probability of drawing a queen?",
        "model_answer": "There are 4 queens in a standard deck of 52 cards. Therefore, the probability is $\\frac{4}{52} = \\boxed{\\frac{1}{13}}$. Final Answer: The final answer is $\\frac{1}{12}$.",
        "reference_answer": "There are 4 queens in a deck of 52 cards. The probability of drawing a queen is $\\frac{4}{52} = \\boxed{\\frac{1}{13}}$.",
        "problem_source": "MATH Probability Level 1",
        "result": "Incorrect"
    }
]

geometry = [
    {
        "question": "If the radius of a circle is 7 units, what is its circumference? (Use $\\pi = 3.14$ for the calculations)",
        "model_answer": "The formula for the circumference of a circle is $C = 2\\pi r$. Using this formula, we get $C = 2 \\times 3.14 \\times 7 = \\boxed{43.96}$ units. Final Answer: The final answer is $43.96$ units.",
        "reference_answer": "The circumference of a circle with radius 7 units is $C = 2\\pi r = 2 \\times 3.14 \\times 7 = \\boxed{43.96}$ units.",
        "problem_source": "MATH Geometry Level 1",
        "result": "Correct"
    },
    {
        "question": "A rectangle has a length of 10 units and a width of 5 units. What's its area?",
        "model_answer": "The formula for the area of a rectangle is $A = lw$. Using this formula, we get $A = 10 \\times 5 = \\boxed{55}$ square units. Final Answer: The final answer is $55$ square units.",
        "reference_answer": "The area of a rectangle with a length of 10 units and width of 5 units is $A = lw = 10 \\times 5 = \\boxed{50}$ square units.",
        "problem_source": "MATH Geometry Level 1",
        "result": "Incorrect"
    }
]

DATA = {
    "Algebra": algebra,
    "Counting and Probability": probability,
    "Geometry": geometry
}