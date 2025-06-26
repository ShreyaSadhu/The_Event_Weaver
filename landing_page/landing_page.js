    document.getElementById('introVideo').addEventListener('ended', function () {
        document.querySelector('.video-container').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    });


    function showInput(event) {
        var form = event.target;
        var input = form.querySelector('input[type="text"]');
        
        if (!input.classList.contains('active')) {
          input.classList.add('active');
          event.preventDefault(); // Prevent form submission
        }
      }


      function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }