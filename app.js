// Exercise 1: Minimum Numbers
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (typeof count !== 'number') {
        console.log("Please provide a numeric value.");
        return;
    }

    let start = count < 0 ? count : 1;
    let end = count < 0 ? -1 : count;

    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
} 
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (!userName || age === undefined) {
        console.log("Missing parameters: name and/or age.");
        return;
    }

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("Point is at the origin.");
    } else if (x === 0) {
        console.log(`Point (${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
        console.log(`Point (${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`Point (${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`Point (${x}, ${y}) is in Quadrant 3.`);
    } else {
        console.log(`Point (${x}, ${y}) is in Quadrant 4.`);
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function triangleType(a, b, c) {
    // Triangle Inequality Theorem check
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle.";
    }

    if (a === b && b === c) {
        return "Equilateral triangle.";
    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle.";
    } else {
        return "Scalene triangle.";
    }
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dataUsage(planLimit, day, usage) {
    const periodLength = 30;

    if (day < 1 || day > periodLength) {
        console.log("Day must be between 1 and 30.");
        return;
    }

    const daysRemaining = periodLength - day;
    const averageDailyLimit = planLimit / periodLength;
    const currentAvg = usage / day;
    const projectedUsage = currentAvg * periodLength;
    const remainingData = planLimit - usage;
    const suggestedDaily = remainingData / daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyLimit.toFixed(2)} GB/day`);

    if (currentAvg > averageDailyLimit) {
        const overBy = projectedUsage - planLimit;
        console.log(`You are EXCEEDING your average daily use (${currentAvg.toFixed(2)} GB/day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by ${overBy.toFixed(2)} GB.`);
        console.log(`To stay below your data plan, use no more than ${suggestedDaily.toFixed(2)} GB/day.`);
    } else {
        console.log(`You are on track with your data usage.`);
        console.log(`You can use up to ${suggestedDaily.toFixed(2)} GB/day for the remaining period.`);
    }
}

