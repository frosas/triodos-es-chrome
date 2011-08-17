var howToUrl = 'http://www.triodos.es/es/particulares/como-operar/bienvenido-oficina-internet/'
var loginUrl = 'https://banking.triodos.es/isum/services/redirect_acceso.jsp?url=https://banking.triodos.es/isum/Main?ISUM_SCR=login&loginType=accesoSeguro&ISUM_Portal=93&acceso_idioma=es_ES'
$('a').each(function() {
    if (this.href == howToUrl && this.target == '_blank') {
        this.href = loginUrl
        this.target = ''
    }
})
