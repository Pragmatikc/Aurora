<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("Text object functions"), default_selector: "string", disable_int:true

,variants: [
"text.upper(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] String letters to upper case") + "</span>",
"text.html_clean(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Clear text from html") + "</span>",
"text.html_to_text(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Clear text from html while preserving formatting") + "</span>",
"text.breaks(string)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Remove text breaks") + "</span>"
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