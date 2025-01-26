const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  fs.readFile('output/repo-info.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading repository info');
    }
    const repoInfo = JSON.parse(data);
    res.send(`
      <h1>Repository Information</h1>
      <p><strong>Name:</strong> ${repoInfo.name}</p>
      <p><strong>Description:</strong> ${repoInfo.description}</p>
      <p><strong>Stars:</strong> ${repoInfo.stargazers_count}</p>
      <p><strong>Forks:</strong> ${repoInfo.forks_count}</p>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});