var matrix = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,0,2,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],[0,1,1,5,0,3,0,0,0,25,1,0,1,0,3,0,8,0,1,1,2,0,3,10,2,4,1,3,9,9,2,0,0,2],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,18,3,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,5,3,0,0,0,0],[0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,2,0,0,0,0,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,6,8,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0,13,4,0,0,0,0,1,0,1,0,0,0,0,0,1,3,0,1,0,0,5,3,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,4,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[0,0,0,3,0,0,0,1,33,10,0,1,0,0,1,0,2,0,0,0,0,0,1,0,0,1,0,2,8,8,2,0,0,1],[0,0,0,0,0,0,0,0,5,7,0,0,0,0,5,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,3,3,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0],[0,0,0,5,0,0,0,0,15,7,0,0,0,0,0,0,18,0,0,0,0,0,0,1,1,0,0,3,0,1,0,0,1,0],[0,0,0,0,0,0,0,0,17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,2,0,0,0,0,28,10,0,0,0,0,0,0,2,0,1,1,0,0,1,18,0,0,0,0,2,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,9,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0],[0,0,0,0,0,0,0,0,4,9,0,0,1,0,12,0,1,0,0,0,0,0,0,4,1,0,0,0,0,1,0,0,0,0]]
var packages = [{
"name": " org.jedit.io", "color": " #3182bd"
}
,{
"name": " org.gjt.sp.jedit.indent", "color": " #6baed6"
}
,{
"name": " org.gjt.sp.jedit.gui.tray", "color": " #9ecae1"
}
,{
"name": " org.gjt.sp.jedit.syntax", "color": " #c6dbef"
}
,{
"name": " org.gjt.sp.jedit.bsh.reflect", "color": " #e6550d"
}
,{
"name": " org.gjt.sp.jedit.visitors", "color": " #fd8d3c"
}
,{
"name": " org.gjt.sp.jedit.menu", "color": " #fdae6b"
}
,{
"name": " org.jedit.options", "color": " #fdd0a2"
}
,{
"name": " org.gjt.sp.jedit", "color": " #31a354"
}
,{
"name": " org.gjt.sp.util", "color": " #74c476"
}
,{
"name": " org.gjt.sp.jedit.bsh.classpath", "color": " #a1d99b"
}
,{
"name": " org.gjt.sp.jedit.gui.statusbar", "color": " #c7e9c0"
}
,{
"name": " org.gjt.sp.jedit.datatransfer", "color": " #756bb1"
}
,{
"name": " org.jedit.migration", "color": " #9e9ac8"
}
,{
"name": " org.gjt.sp.jedit.io", "color": " #bcbddc"
}
,{
"name": " org.gjt.sp.jedit.proto.jeditresource", "color": " #dadaeb"
}
,{
"name": " org.gjt.sp.jedit.buffer", "color": " #636363"
}
,{
"name": " org.jedit.core", "color": " #969696"
}
,{
"name": " org.jedit.keymap", "color": " #bdbdbd"
}
,{
"name": " org.gjt.sp.jedit.pluginmgr", "color": " #d9d9d9"
}
,{
"name": " org.gjt.sp.jedit.search", "color": " #3182bd"
}
,{
"name": " org.gjt.sp.jedit.bsh.collection", "color": " #6baed6"
}
,{
"name": " org.gjt.sp.jedit.bufferset", "color": " #9ecae1"
}
,{
"name": " org.gjt.sp.jedit.gui", "color": " #c6dbef"
}
,{
"name": " org.gjt.sp.jedit.bufferio", "color": " #e6550d"
}
,{
"name": " org.gjt.sp.jedit.bsh", "color": " #fd8d3c"
}
,{
"name": " org.gjt.sp.jedit.help", "color": " #fdae6b"
}
,{
"name": " org.gjt.sp.jedit.input", "color": " #fdd0a2"
}
,{
"name": " org.gjt.sp.jedit.textarea", "color": " #31a354"
}
,{
"name": " org.gjt.sp.jedit.msg", "color": " #74c476"
}
,{
"name": " org.gjt.sp.jedit.options", "color": " #a1d99b"
}
,{
"name": " org.gjt.sp.jedit.bsh.org.objectweb.asm", "color": " #c7e9c0"
}
,{
"name": " org.gjt.sp.jedit.print", "color": " #756bb1"
}
,{
"name": " org.gjt.sp.jedit.browser", "color": " #9e9ac8"
}
];
