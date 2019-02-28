<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Log", description:tr("agf{} object functions (aurora generating functions)"), default_selector: "string", disable_int:true

,variants: [
"agf.tmp(template)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Any data builder") + "</span>",
"agf.rmalename()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian male name") + "</span>",
"agf.tmalename()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian male name translit") + "</span>",
"agf.emalename()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] English male name") + "</span>",
"agf.rfemname()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian female name") + "</span>",
"agf.tfemname()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian female name translit") + "</span>",
"agf.efemname()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] English female name") + "</span>",
"agf.rmalesurname()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian male surname") + "</span>",
"agf.rfemsurname()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian female surname") + "</span>",
"agf.esurname()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] English surname") + "</span>",
"agf.randstringen(number)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] English letters random string") + "</span>",
"agf.randstringru(number)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Russian letters random string") + "</span>",
"agf.cryptopass(number)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Cryptographically secure password") + "</span>",
"agf.pass(number)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Normal password") + "</span>",
"agf.numpass(number)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Numeric password") + "</span>",
"agf.year()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Random year in the range from 1970 to 1999") + "</span>",
"agf.month()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Random month number") + "</span>",
"agf.day()<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Random day in the range from 01 to 28 (for February)") + "</span>",
"agf.birthday(min_age, max_age)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Random date generator for min-max ages range") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Types of templates for agf.tmp function.</div>
	  <div class="tr tooltip-paragraph-fold">One of several options: {option1|option2|option3}.</div>
	  <div class="tr tooltip-paragraph-fold">Template application example.</div>
	  <div class="tr tooltip-paragraph-fold">Any year in the range from 1960 to 1999:</div>
      <div class="tooltip-paragraph-last-fold">agf.tmp("19{6|7|8|9}<AnyDigit>").</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>