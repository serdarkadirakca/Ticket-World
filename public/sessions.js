const container = document.querySelector('.modal-session');
const seats = document.querySelectorAll('.session:not(.reserved)');

container.addEventListener('click', function(e) {
   if(e.target.classList.contains('session') && !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected');      
    }
});

