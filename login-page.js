// TODO Disable autocomplete to make browser itself to remember inputs

var form = document.getElementsByTagName('form')[0]
var inputs = form.getElementsByTagName('input')
var rememberedInputs = { user: inputs[0], nif: inputs[1] }

for (var name in rememberedInputs) {
    (function() {
        var _name = name
        rememberedInputs[_name].addEventListener('change', function() {
            console.log(_name)
            localStorage.setItem('rememberedInputs.' + _name, this.value)
        })
    })()
}

for (var name in rememberedInputs) {
    var value = localStorage.getItem('rememberedInputs.' + name)
    rememberedInputs[name].value = value
}
