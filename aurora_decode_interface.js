<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Column", description:tr("adc{} object functions (aurora decode)"), default_selector: "string", disable_int:true

,variants: [
"adc.aes(code, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] AES decrypting") + "</span>",
"adc.base64(code)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] BASE64 decrypting") + "</span>",
"adc.md5(code)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] MD5 hash decrypting") + "</span>",
"adc.utf8(code)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] UTF8 decrypting") + "</span>",
"adc.des(code, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] DES decrypting") + "</span>",
"adc.tripledes(code, key)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Triple DES decrypting") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal" id="1">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">Most decrypting functions require a CryptoJS library. You can download this library here:</div>
      <div class="tooltip-paragraph-last-fold">https://cloud.mail.ru/public/HtUq/cC3x1P93Y</div>
</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>