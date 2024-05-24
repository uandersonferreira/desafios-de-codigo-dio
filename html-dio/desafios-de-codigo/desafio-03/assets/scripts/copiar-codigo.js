function copiarCodigo(selector) {
    var codigo = document.querySelector(selector);
    var range = document.createRange();
    range.selectNode(codigo);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado!');
}



