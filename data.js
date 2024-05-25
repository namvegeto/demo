const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData.cars); // Xử lý dữ liệu JSON ở đây
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});