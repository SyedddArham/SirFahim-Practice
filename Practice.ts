//Original list of guests
let originalGuests: string[] = ['Talia', 'Arham', 'Maaz', 'Hasan', 'Saad', 'Shahmeer', 'Nofil', 'Daniyal', 'Abdul Moiz', 'Faizan', 'Tahir', 'Ahmed', 'Arshad', 'Muzammil', 'Mudassir'];

//Second list to store invited guests
let secondList: string[] = [];

//Invite 100 guests randomly from the original list to the second list
for (let i = 0; i < 100; i++) {
    let randomIndex = Math.floor(Math.random() * originalGuests.length);
    secondList.push(originalGuests[randomIndex]);
}

//Printing invited guests
console.log("Invited Guests (100 Guests):");
for (let guest of secondList) {
    console.log("Dear ",guest," you are invited to Mr. Fahim's wedding.");
}

//Randomly remove 10 guests due to rain
let startIndex = Math.floor(Math.random() * (secondList.length - 10));
let endIndex = startIndex + 10;
let removedGuests = secondList.splice(startIndex, endIndex - startIndex);

//Printing removed guests due to rain
console.log("\n-----------------------------------------------------------------------")
console.log("Removed Guests (10 guests due to Rain):");
for (let removedGuest of removedGuests) {
    console.log("Dear ",removedGuest," unfortunately, due to rain, we will not be able to call you for the wedding.");
}

//Printing remaining guests invited to the wedding
console.log("\n-----------------------------------------------------------------------")
console.log("Remaining Guests Invited (90 Guests):");
for (let guest of secondList) {
    console.log(`Dear ${guest}, you are still invited to Mr. Fahim's wedding.`);
}

//Add back the removed guests due to rain
secondList = secondList.concat(removedGuests);

//Ensuring secondList has at least 100 guests
while (secondList.length < 100) {
    let randomIndex = Math.floor(Math.random() * originalGuests.length);
    secondList.push(originalGuests[randomIndex]);
}

//Invite additional 100 guests from the original list
for (let i = 0; i < 100; i++) {
    let randomIndex = Math.floor(Math.random() * originalGuests.length);
    secondList.push(originalGuests[randomIndex]);
}

//Printing message to new guests invited to the wedding
console.log("\n-----------------------------------------------------------------------")
console.log("New Guests Invited (200 Guests):");
for (let guest of secondList) {
    console.log("Dear ",guest," you are now invited to Mr. Fahim's wedding at the new venue.");
}
