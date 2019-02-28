<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("atm{} object functions (aurora time)"), default_selector: "string", disable_int:true

,variants: [
"atm.time()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current time") + "</span>",
"atm.year()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current full year") + "</span>",
"atm.monthnum()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Month sequence number (0-11)") + "</span>",
"atm.month()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Month number (1-12)") + "</span>",
"atm.day()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current day") + "</span>",
"atm.hour()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current hour") + "</span>",
"atm.minute()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current minute") + "</span>",
"atm.second()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current second") + "</span>",
"atm.unixtime()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current unix time") + "</span>",
"atm.unixtimems()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Current unix time with milliseconds") + "</span>",
"atm.unixtoutc(unixtime)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Convert unixtime to UTC") + "</span>",
"atm.unixmstoutc(unixtime)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Convert unixtime with milliseconds to UTC") + "</span>",
"atm.delayed_start(start_time)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Delayed start") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Function atm.delayed_start return the sleep time in milliseconds.</div>
	  <div class="tr tooltip-paragraph-fold">Use this function with function sleep()! from BAS API. Example:</div>
	  <div class="tr tooltip-paragraph-fold">var block = '123456789'</div>
	  <div class="tr tooltip-paragraph-fold">var sleep_time = atm.delayed_start ('18:03:30')</div>
	  <div class="tooltip-paragraph-last-fold">sleep(sleep_time)!</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>