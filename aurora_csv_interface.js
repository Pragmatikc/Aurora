<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("asv{} object functions (aurora csv)"), default_selector: "string", disable_int:true

,variants: [
"asv.check(resource, string)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Check for matching record type") + "</span>",
"asv.add(resource, string)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Adding a new line to a csv file") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Specify name of the resource that contains the csv file and an array or string of data.</div>
	  <div class="tr tooltip-paragraph-fold">Working with arrays is preferable and easier. The data in the arrays are processed automatically.</div>
	  <div class="tr tooltip-paragraph-fold">All csv functions accept string values and arrays:</div>
	  <div class="tr tooltip-paragraph-fold">asv.check('csv', 'type,ip,port,login,password')</div>
	  <div class="tr tooltip-paragraph-fold">equivalently</div>
      <div class="tooltip-paragraph-last-fold">asv.check('csv', ['type','ip','port','login','password'])</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>