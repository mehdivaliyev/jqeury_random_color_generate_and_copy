$( document ).ready(function() {

    $(".generate-btn").on( "click", function() {
        let characters = '0123456789abcdef'
        let randomColor = '#'

        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() *  characters.length)
            randomColor += characters[randomIndex]
        }

        $('#inputField').val(randomColor)
        $('#inputField').css('color', randomColor)
        $('#inputField').css('border-color', randomColor)
        $('.color-preview').css('background-color', randomColor)
        $('.input-box .copy-btn').css('background-color', randomColor)
        $('.alert-msg').css('background-color', randomColor)

      });

      function add() {
        $('.alert-msg').last().addClass('slide-effect')
      }

      function remove() {
        $('.alert-msg').last().removeClass('slide-effect')
      }

      $('.copy-btn').on('click', function() {
        console.log('running')
        $("#inputField").select()
        document.execCommand("copy")

        $(".code").text($("#inputField").val())

        add()
        setTimeout(remove, 2000)
      })

});