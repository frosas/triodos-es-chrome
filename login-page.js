var setInputRemembered = function(input, id) {
    var storageId = 'rememberedInputs.' + id
    input.value = localStorage.getItem(storageId)
    input.addEventListener('change', function() {
        localStorage.setItem(storageId, input.value)
    })
}

var inputs = document.querySelectorAll('form input')
var USUARIO_INDEX = 0
var NIF_INDEX = 1
var PASSWORD_INDEX = 2

setInputRemembered(inputs[USUARIO_INDEX], USUARIO_INDEX)
setInputRemembered(inputs[NIF_INDEX], NIF_INDEX)

inputs[PASSWORD_INDEX].focus()
