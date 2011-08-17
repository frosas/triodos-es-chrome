$('form input:lt(2)').each(function(i) {

    var storageId = 'rememberedInputs.' + i

    this.value = localStorage.getItem(storageId)

    $(this).change(function() {
        localStorage.setItem(storageId, this.value)
    })
})
