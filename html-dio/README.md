# Formação HTML5

## Descrição
Uma breve descrição do seu projeto.

## Sumário
- [Formulário HTML form](#formulário-html)
- [Restrições de Entrada Input](#restrições-de-entrada)


## Formulário HTML
[Voltar para o Sumário](#sumário)

A tag `<form>` é usada para criar um formulário HTML que permite aos usuários inserir e enviar dados para um servidor.

1. name: Identifica o formulário e é usado para acessar os dados do formulário no lado do servidor.

Exemplo: `<form name="loginForm">`

2. action: Especifica para onde os dados do formulário serão enviados quando submetidos.

Exemplo: `<form action="processar_dados.php">`

3. method: Especifica como os dados do formulário serão enviados. Os valores comuns são GET e POST.

Exemplo: `<form method="POST">`
   - GET: Os dados do formulário são anexados à URL como uma string de consulta. É adequado para formulários de pesquisa ou envio de pequenas quantidades de dados não sensíveis.
   - POST: Os dados do formulário são enviados no corpo da solicitação HTTP. É mais seguro para enviar grandes quantidades de dados ou dados sensíveis, como senhas.

4. target: Especifica onde abrir o resultado do envio do formulário, como "_blank" para abrir em uma nova janela.

Exemplo: `<form target="_blank">`

5. enctype: Especifica como os dados do formulário devem ser codificados antes de serem enviados, útil principalmente para envio de arquivos.

Exemplo: `<form enctype="multipart/form-data">`

6. novalidate: Desativa a validação de formulário HTML5 embutida.

Exemplo: `<form novalidate>`

7. accept-charset: Especifica a codificação de caracteres que o servidor deve usar para interpretar os dados do formulário.

Exemplo: `<form accept-charset="UTF-8">`

8. methodoverride: Substitui o método de envio do formulário quando o navegador não suporta o método especificado pelo atributo "method".

Exemplo: `<form methodoverride="PUT">`

## Restrições de Entrada
[Voltar para o Sumário](#sumário)

Aqui está uma lista de algumas restrições comuns de entrada:

| Atributo  | Descrição                                                                                        |
|-----------|--------------------------------------------------------------------------------------------------|
| checked   | Especifica que um campo de entrada deve ser pré-selecionado quando a página é carregada         |
| disabled  | Especifica que um campo de entrada deve ser desativado                                           |
| max       | Especifica o valor máximo para um campo de entrada                                                |
| maxlength | Especifica o número máximo de caracteres para um campo de entrada                                 |
| min       | Especifica o valor mínimo para um campo de entrada                                                |
| pattern   | Especifica uma expressão regular para verificar o valor de entrada                                |
| readonly  | Especifica que um campo de entrada é somente leitura (não pode ser alterado)                     |
| required  | Especifica que um campo de entrada é obrigatório (deve ser preenchido)                           |
| size      | Especifica a largura (em caracteres) de um campo de entrada                                       |
| step      | Especifica os intervalos numéricos legais para um campo de entrada                                 |
| value     | Especifica o valor padrão para um campo de entrada                                                |

Exemplo de Uso:

```html
<input type="checkbox" id="pre-selected" name="pre-selected" checked>
<label for="pre-selected">Pré-selecionado</label><br>

<input type="number" id="min-max" name="min-max" min="1" max="10">
<label for="min-max">Entre 1 e 10</label><br>

<input type="text" id="max-length" name="max-length" maxlength="20">
<label for="max-length">Até 20 caracteres</label><br>

<input type="text" id="pattern" name="pattern" pattern="[A-Za-z]{3}">
<label for="pattern">Apenas letras (3 caracteres)</label><br>

<input type="text" id="readonly" name="readonly" readonly value="Somente Leitura">
<label for="readonly">Somente Leitura</label><br>

<input type="text" id="required" name="required" required>
<label for="required">Campo Obrigatório</label><br>
