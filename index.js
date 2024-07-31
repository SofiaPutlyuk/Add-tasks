const answer = confirm("Ви хочете розпочати гру Google dinosaur");
if (answer) {
    const dinosaur = document.getElementById('dinosaura');

    document.addEventListener("keydown", function(event) {
        if (event.key === " ") {
            dinosaur.style.transition = 'transform 0.2s ease';
            dinosaur.style.transform = 'translateY(-60px)'; 
            setTimeout(function() {
                dinosaur.style.transform = 'translateY(0)'; 
            }, 200);
        }
    });
}