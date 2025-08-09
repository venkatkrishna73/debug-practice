// 1. Destructure first two colors
function destructureColors(colors) {
  debugger; // Check incoming array
  const [color1, color2] = colors;
  debugger; // Check destructured values
  return { color1, color2 };
}

const colors = ['red', 'green', 'blue', 'yellow'];
console.log(destructureColors(colors));

// 2. Destructure first user’s name and status
function destructureData(data) {
  debugger; // Inspect full data object
  const { users: [ { name: firstUserName } ], status } = data;
  debugger; // Inspect firstUserName & status
  return { firstUserName, status };
}

const data = {
  users: [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Sam' }
  ],
  status: 'active'
};

console.log(destructureData(data));
