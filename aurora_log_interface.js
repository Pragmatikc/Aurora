<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("Log object functions"), default_selector: "string", disable_int:true

,variants: [
"log.color(color_name)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Colors list for log display") + "</span>",
"log.all_colors()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Display all colors from log.color function into the log") + "</span>",
"log.block_check()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Checking the block ID existence") + "</span>",
"log.one(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Color log display. Require block id in 'block' variable") + "</span>",
"log.two(str_1, str_2)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Duplicated log, you can use 2 colors in the log string") + "</span>",
"log.three(str_1, str_2, str_3)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Triple log, you can use 3 colors in log string") + "</span>",
"log.name(name, string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Color log with Name. For example, account, user or function name") + "</span>",
"log.name_two(name, str_1, str_2)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Duplicated log with Name") + "</span>",
"log.name_three(name, str_1, str_2, str_3)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Triple log with Name") + "</span>",
"log.noblank(name, str_1, str_2, str_3)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Triple log with Name and without spaces between the strings") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Before using log functions, set the block identifier into the 'block' variable, like this:</div>
	  <div class="tr tooltip-paragraph-fold">var block = '369642717'</div>
	  <div class="tr tooltip-paragraph-fold">Where '369642717' - id of your code block.</div>
	  <div class="tr tooltip-paragraph-fold">This id will display with thread number, time and name (optionally) in the log area.</div>
	  <div class="tr tooltip-paragraph-fold">An example of the log.one function:</div>
	  <div class="tr tooltip-paragraph-fold">var block = '369642717'</div>
	  <div class="tr tooltip-paragraph-fold">var str = 'Hello, world!'</div>
	  <div class="tr tooltip-paragraph-fold">log.one(str)</div>
	  <div class="tr tooltip-paragraph-fold">Output:</div>
	  <div class="tr tooltip-paragraph-fold">[001] [369642717] [20:08:56] Hello, world!</div>
	  <div class="tr tooltip-paragraph-fold">If you want color log, specify a color using three symbols * , like this:</div>
	  <div class="tr tooltip-paragraph-fold">var str = 'Hello, world!***red'</div>
	  <div class="tr tooltip-paragraph-fold">To view all colors, call the function log.all_colors without arguments:</div>
      <div class="tooltip-paragraph-last-fold">log.all_colors()</div>
</div>
<a onclick="BrowserAutomationStudio_OpenUrl('https://community.bablosoft.com/user/pragmatik')" class="tr" style="margin-left: 20px;cursor: pointer;">Detailed instructions</a>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>