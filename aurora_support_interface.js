<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("asf{} object functions (aurora support functions)"), default_selector: "string", disable_int:true

,variants: [
"asf.thread()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Thread index") + "</span>",
"asf.thread100()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Thread index for 100 threads") + "</span>",
"asf.thread1000()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Thread index for 1000 threads") + "</span>",
"asf.res(resource_name)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.1] Resource reed") + "</span>",
"asf.res(resource_name)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Resource to list") + "</span>",
"asf.location(resource_name)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.1] Resource location") + "</span>",
"asf.is_num(number_string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Check for number") + "</span>",
"asf.var_isset(variable_name)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Check for a variable existence") + "</span>",
"asf.global(global_variable)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Global variable reading") + "</span>",
"asf.sound()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Sound reproduction [nodata]") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal" id="1">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Threads functions return a string value.</div>
	  <div class="tr tooltip-paragraph-fold">Use js function Number() to get the stream number as a number:</div>
      <div class="tooltip-paragraph-last-fold">Number(afs.thread())</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>