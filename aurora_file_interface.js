<style type="text/css">p {padding-left: 20px; font-size: 12px; color: #ca3030}</style>
<div class="container-fluid" >
   <div class='about'><p>Данный модуль работает как справочник и не создаёт отдельных экшенов для выбранных вами функций!</br>
Чтобы вызвать функцию, скопируйте её имя в свой блок кода, при необходимости подставив аргументы.</p>
<p>This module works as a reference and does not create separate actions for the selected functions!</br>
To call a function, copy function's name into your code block, substituting arguments if necessary.</p></div>
<%= _.template($('#input_constructor').html())({id:"Column", description:tr("afs{} object functions (aurora file system)"), default_selector: "string", disable_int:true

,variants: [
"afs.pathcheck(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Check for a folder") + "</span>",
"afs.filecheck(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Check for a file") + "</span>",
"afs.size(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] File size in bytes") + "</span>",
"afs.directory(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] File parent directory") + "</span>",
"afs.mod(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Last modifications") + "</span>",
"afs.write(string, path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Write to a file [nodata]") + "</span>",
"afs.listsave(list, path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Save list to a file [nodata]") + "</span>",
"afs.folder(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Create new folder [nodata]") + "</span>",
"afs.del(path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Remove file or folder [nodata]") + "</span>",
"afs.move(old_path, new_path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Move file or folder [nodata]") + "</span>",
"afs.copy(path, new_path)<br/><span style='color:gray;font-size:small'>" + tr("[1.0.0] Copy file or folder [nodata]") + "</span>"
],
}) %>

</div>
<div class="tooltipinternal" id="1">
      <div class="tr tooltip-paragraph-first-fold">Annotation!</div>
	  <div class="tr tooltip-paragraph-fold">To create a new file, use the afs.write function with an space value to write:</div>
	  <div class="tr tooltip-paragraph-fold">afs.write(" ", savepath)</div>
	  <div class="tr tooltip-paragraph-fold">Unfortunately, BAS call stack do not support asynchronous functions calling from third-party code.</div>
	  <div class="tr tooltip-paragraph-fold">That means it's not possible yet to write a function for file system search processing.</div>
	  <div class="tr tooltip-paragraph-fold">But you can insert a file search API into your code.</div>
	  <div class="tr tooltip-paragraph-fold">Use next example to do this:</div>
	  <div class="tr tooltip-paragraph-fold">native_async("filesystem", "search", JSON.stringify({ folder:"C:/FolderPath/",mask:"*",contains:"content",include_folders:true,include_files:true,recursive:true}))!</div>
	  <div class="tooltip-paragraph-last-fold">VAR_FILE_SEARCH_RESULT = JSON.parse(_result())["d"]</div>
</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>