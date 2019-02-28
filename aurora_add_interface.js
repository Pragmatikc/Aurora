<div class="container-fluid" >

</div>
<div class="tooltipinternal">
      <div class="tr tooltip-paragraph-first-fold">Add aurora library to your script.</div>
	  <div class="tr tooltip-paragraph-fold">Start with this action. Action add library to your project.</div>
	  <div class="tr tooltip-paragraph-fold">It is necessary for library worked after compile project.</div>
	  <div class="tr tooltip-paragraph-fold">If your use Aurora functions in the 'OnApplicationStart' function, add this library into OnApplicationStart and into Main functions.</div>
	  <div class="tr tooltip-paragraph-fold">Also recommended start your script with aurora.check function for library version check ('1.1.0' - your library version):</div>
	  <div class="tr tooltip-paragraph-fold">var block = "your_block_id"</div>
      <div class="tooltip-paragraph-last-fold">aurora.check("1.1.0")</div>
</div>
<a onclick="BrowserAutomationStudio_OpenUrl('https://community.bablosoft.com/user/pragmatik')" class="tr" style="margin-left: 20px;cursor: pointer;">Detailed instructions</a>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>