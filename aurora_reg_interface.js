<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("are{} object functions (aurora regular expression)"), default_selector: "string", disable_int:true

,variants: [
"are.check(regexp,content)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Check if string matches regexp") + "</span>",
"are.first(regexp,content)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Regular expression first match") + "</span>",
"are.all(regexp,content)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Regular expression all data") + "</span>",
"are.split(regexp,content)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Split text with regexp") + "</span>",
"are.change(regexp,content,removable,replacement)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Replace text with regexp") + "</span>"
],
}) %>

</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>