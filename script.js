document.getElementById('voterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const vote = document.getElementById('vote').value;
    document.getElementById('result').innerText = `${name} voted for ${vote}`;
});