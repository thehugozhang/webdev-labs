var body = document.body;

document.getElementById('default').addEventListener('click', function() {
   body.className = ''
});

document.getElementById('desert').addEventListener('click', function() {
   body.className = 'desert'
});

document.getElementById('ocean').addEventListener('click', function() {
   body.className = 'ocean'
});

document.getElementById('high-contrast').addEventListener('click', function() {
   body.className = 'high-contrast'
});