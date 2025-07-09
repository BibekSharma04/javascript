let mydate = new Date();
console.log(mydate);//it shows current date and time

//Get Specific Parts of the Date
let date= new Date();
console.log(date.getFullYear()); // Year (e.g., 2025)
console.log(date.getMonth()); // Month (0-11) — January is 0
console.log(date.getDate());   //Day of month (1-31)
console.log(date.getDay());  //Day of week (0-6) — Sunday is 0
console.log(date.getHours()); //Hour (0-23)
console.log(date.getMinutes());//Minutes (0-59) 
console.log(date.getSeconds()); //seconds (0-59)

//Format Date with toLocaleString()
const date1 = new Date();

console.log(date1.toLocaleString());       // Local date and time
console.log(date1.toLocaleDateString());   // Only date
console.log(date1.toLocaleTimeString());   // Only time

//Custom Format Example
let customdate= new Date();
const formats = `${customdate.getFullYear()}-${customdate.getMonth()}-${customdate.getDay()}`;
console.log(formats);

// a timestamp is typically a numeric value representing the number of milliseconds since January 1, 1970 (UTC), also known as the Unix Epoch
// Get the Current Timestamp
const timestamp = Date.now();
console.log(timestamp); // e.g., 1720512000000
//or
const timestamp1 = new Date().getTime();
console.log(timestamp1);

// Convert a Date to a Timestamp
const date3 = new Date("2025-07-09T00:00:00Z");
const timestamp2 = date3.getTime();
console.log(timestamp2);

// ISO & UTC Formats
console.log(now.toISOString()); // e.g., "2025-07-09T10:40:00.000Z"
console.log(now.toUTCString()); // e.g., "Wed, 09 Jul 2025 10:40:00 GMT"
//What does GMT stand for? GMT stands for Greenwich Mean Time, the local clock time at Greenwich. From 1884 until 1972, GMT was the international standard of civil time.

//formate a date like below
// "YYYY-MM-DD HH:mm:ss" → e.g., "2025-07-09 15:30:45"

//Manual Formatting (Vanilla JS)
function formatDateTime(date) {
  const pad = (n) => n.toString().padStart(2, '0');

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are 0-indexed
  const day = pad(date.getDate());

  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
const now = new Date();
console.log(formatDateTime(now)); // e.g., "2025-07-09 15:30:45"





