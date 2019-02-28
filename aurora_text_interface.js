<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("atx{} object functions (aurora texts)"), default_selector: "string", disable_int:true

,variants: [
"atx.upper(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] String letters to upper case") + "</span>",
"atx.htmlclean(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Clear text from html") + "</span>",
"atx.htmltotext(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Clear text from html while preserving formatting") + "</span>",
"atx.breaks(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Remove text breaks") + "</span>",
"atx.spaces(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.1] Remove all spaces from text") + "</span>"
],
}) %>

</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>