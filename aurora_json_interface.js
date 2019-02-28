<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("ajn{} object functions (aurora json)"), default_selector: "string", disable_int:true

,variants: [
"ajn.check(json_string)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Check for json") + "</span>",
"ajn.count(json_string, jpath)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Number of elements") + "</span>",
"ajn.key(json_string, jpath)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Get key") + "</span>",
"ajn.keys(json_string, jpaths_list, list_separator)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Get keys") + "</span>",
"ajn.parse(string, jpath)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Get the value") + "</span>",
"ajn.multyparse(string, jpaths_list, list_separator)<br/><span style='color:gray;font-size:small'>" + tr("[1.1.0] Get multiple values") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Use a separator character to process multiple JSON strings.</div>
	  <div class="tr tooltip-paragraph-fold">Specify your separator for ajn.keys and ajn.multiparse functions.</div>
	  <div class="tr tooltip-paragraph-fold">For example, you can use *** characters like separator:</div>
	  <div class="tr tooltip-paragraph-fold">VAR_MULTY_JSON = '{"object1": {"title": "json_string","value": "json_value"}}***{"object2": {"title": "json_string_2","value": "json_value_2"}}'</div>
      <div class="tr tooltip-paragraph-fold">ajn.multyparse(VAR_MULTY_JSON, 'jpath', '***')</div>
	  <div class="tr tooltip-paragraph-fold">For get number of all json elements use ajn.count(json_string, jpath) with empty jpath value:</div>
	  <div class="tooltip-paragraph-last-fold">VAR_COUNT = ajn.count(json, '')</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>