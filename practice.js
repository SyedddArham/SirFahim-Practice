//Original list of guests
var originalGuests = ['Talia', 'Arham', 'Maaz', 'Hasan', 'Saad', 'Shahmeer', 'Nofil', 'Daniyal', 'Abdul Moiz', 'Faizan', 'Tahir', 'Ahmed', 'Arshad', 'Muzammil', 'Mudassir'];
//Second list to store invited guests
var secondList = [];
//Invite 100 guests randomly from the original list to the second list
for (var i = 0; i < 100; i++) {
    var randomIndex = Math.floor(Math.random() * originalGuests.length);
    secondList.push(originalGuests[randomIndex]);
}
//Printing invited guests
console.log("Invited Guests (100 Guests):");
for (var _i = 0, secondList_1 = secondList; _i < secondList_1.length; _i++) {
    var guest = secondList_1[_i];
    console.log("Dear ", guest, " you are invited to Mr. Fahim's wedding.");
}
//Randomly remove 10 guests due to rain
var startIndex = Math.floor(Math.random() * (secondList.length - 10));
var endIndex = startIndex + 10;
var removedGuests = secondList.splice(startIndex, endIndex - startIndex);
//Printing removed guests due to rain
console.log("\n-----------------------------------------------------------------------");
console.log("Removed Guests (10 guests due to Rain):");
for (var _a = 0, removedGuests_1 = removedGuests; _a < removedGuests_1.length; _a++) {
    var removedGuest = removedGuests_1[_a];
    console.log("Dear ", removedGuest, " unfortunately, due to rain, we will not be able to call you for the wedding.");
}
//Printing remaining guests invited to the wedding
console.log("\n-----------------------------------------------------------------------");
console.log("Remaining Guests Invited (90 Guests):");
for (var _b = 0, secondList_2 = secondList; _b < secondList_2.length; _b++) {
    var guest = secondList_2[_b];
    console.log("Dear ", guest, " you are still invited to Mr. Fahim's wedding.");
}
//Add back the removed guests due to rain
secondList = secondList.concat(removedGuests);
//Ensuring secondList has at least 100 guests
while (secondList.length < 100) {
    var randomIndex = Math.floor(Math.random() * originalGuests.length);
    secondList.push(originalGuests[randomIndex]);
}
//Invite additional 100 guests from the original list
for (var i = 0; i < 100; i++) {
    var randomIndex = Math.floor(Math.random() * originalGuests.length);
    secondList.push(originalGuests[randomIndex]);
}
//Printing message to new guests invited to the wedding
console.log("\n-----------------------------------------------------------------------");
console.log("New Guests Invited (200 Guests):");
for (var _c = 0, secondList_3 = secondList; _c < secondList_3.length; _c++) {
    var guest = secondList_3[_c];
    console.log("Dear ", guest, " you are now invited to Mr. Fahim's wedding at the new venue.");
}
