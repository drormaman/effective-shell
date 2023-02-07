"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[2021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},h),{},{components:n})):r.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Get to Grips with Grep",slug:"/part-3-manipulating-text/get-to-grips-with-grep/"},i=void 0,l={unversionedId:"manipulating-text/get-to-grips-with-grep/index",id:"manipulating-text/get-to-grips-with-grep/index",title:"Get to Grips with Grep",description:"The grep tool is a real workhorse for shell users - once you've learned how to use it you will find yourself using it again and again. In this chapter we'll see how you can use grep for common tasks, and how to use it in combination with other tools.",source:"@site/docs/03-manipulating-text/14-get-to-grips-with-grep/index.md",sourceDirName:"03-manipulating-text/14-get-to-grips-with-grep",slug:"/part-3-manipulating-text/get-to-grips-with-grep/",permalink:"/part-3-manipulating-text/get-to-grips-with-grep/",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/03-manipulating-text/14-get-to-grips-with-grep/index.md",tags:[],version:"current",frontMatter:{title:"Get to Grips with Grep",slug:"/part-3-manipulating-text/get-to-grips-with-grep/"},sidebar:"sidebar",previous:{title:"Regex Essentials",permalink:"/part-3-manipulating-text/regex-essentials/"},next:{title:"Slice and Dice Text",permalink:"/part-3-manipulating-text/slice-and-dice-text/"}},s={},p=[{value:"What is Grep",id:"what-is-grep",level:2},{value:"Why Grep?",id:"why-grep",level:2},{value:"Searching Through Text",id:"searching-through-text",level:2},{value:"Using Patterns",id:"using-patterns",level:2},{value:"Finding Problems",id:"finding-problems",level:2},{value:"The ABC of Grep",id:"the-abc-of-grep",level:2},{value:"Working with Multiple Files",id:"working-with-multiple-files",level:2},{value:"V for Invert",id:"v-for-invert",level:2},{value:"Don&#39;t Forget Your Pipelines!",id:"dont-forget-your-pipelines",level:2},{value:"Alternatives to Grep",id:"alternatives-to-grep",level:2},{value:"Summary",id:"summary",level:2}],h={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," tool is a real workhorse for shell users - once you've learned how to use it you will find yourself using it again and again. In this chapter we'll see how you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," for common tasks, and how to use it in combination with other tools."),(0,a.kt)("p",null,"As with the other tools we'll introduce in this chapter, we'll also look at when ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," is the right tool for the job and when we should consider other options."),(0,a.kt)("h2",{id:"what-is-grep"},"What is Grep"),(0,a.kt)("p",null,"A quick check of the manual page for ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," gives an overview:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ man grep\n\nGREP(1)                   BSD General Commands Manual                  GREP(1)\n\nNAME\n     grep, egrep, fgrep, zgrep, zegrep, zfgrep -- file pattern searcher\n\nSYNOPSIS\n     grep [-abcdDEFGHhIiJLlmnOopqRSsUVvwxZ] [-A num] [-B num] [-C[num]] [-e pattern] [-f file]\n          [--binary-files=value] [--color[=when]] [--colour[=when]] [--context[=num]] [--label]\n          [--line-buffered] [--null] [pattern] [file ...]\n\nDESCRIPTION\n     The grep utility searches any given input files, selecting lines that match one or more\n     patterns.  By default, a pattern matches an input line if the regular expression (RE) in\n     the pattern matches the input line without its trailing newline.  An empty expression\n     matches every line.  Each input line that matches at least one of the patterns is written\n     to the standard output.\n")),(0,a.kt)("p",null,"Wow. Lots of options for this command. And confusingly, lots of alternative forms as well (such as ",(0,a.kt)("inlineCode",{parentName:"p"},"egrep"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"zgrep")," and so on). "),(0,a.kt)("p",null,"Maybe the ",(0,a.kt)("inlineCode",{parentName:"p"},"tldr")," tool will provide a more concise overview?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ tldr grep\n\n  grep\n\n  Matches patterns in input text.\n  Supports simple patterns and regular expressions.\n")),(0,a.kt)("p",null,"That is indeed a little more concise. By the way, if you are not familiar with how you can get help on commands, check out ",(0,a.kt)("a",{parentName:"p",href:"/part-1-transitioning-to-the-shell/getting-help/"},"Chapter 5 - Getting Help"),". As the manual pages indicate, ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," is used to match patterns in files. More advanced users will most likely know exactly what this means, but a more simple description is just:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Grep lets you search for text or filter text.")),(0,a.kt)("p",null,"That's it. You can search in files, but you are not ",(0,a.kt)("em",{parentName:"p"},"limited")," to searching in files. And you can search for ",(0,a.kt)("em",{parentName:"p"},"literal")," text, such as the word 'error', or you can search for ",(0,a.kt)("em",{parentName:"p"},"patterns"),". ",(0,a.kt)("em",{parentName:"p"},"Patterns")," in this case means ",(0,a.kt)("em",{parentName:"p"},"regular expressions")," - expressions which allow you to be more specific in how you search (such as looking for a set of 16 numbers in a row, like a credit card number, or any text which looks like an email address). You can also do the opposite - filtering out parts of text."),(0,a.kt)("p",null,"We'll use ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," to search through text. Let's get straight into it!"),(0,a.kt)("h2",{id:"why-grep"},"Why Grep?"),(0,a.kt)("p",null,"Why the odd name? Grep is such a commonly used tool that the name has become a verb amongst technologists (people will often suggest you ",(0,a.kt)("em",{parentName:"p"},"grep")," for something in files)."),(0,a.kt)("p",null,"The name comes from a command which was used in the original ",(0,a.kt)("inlineCode",{parentName:"p"},"ed")," text editor - the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"g/re/p\n")),(0,a.kt)("p",null,"This command ran on all lines (",(0,a.kt)("inlineCode",{parentName:"p"},"g"),", for ",(0,a.kt)("em",{parentName:"p"},"global"),"), applied a regular expression (",(0,a.kt)("inlineCode",{parentName:"p"},"re"),", for ",(0,a.kt)("em",{parentName:"p"},"regular expression"),") and then printed (",(0,a.kt)("inlineCode",{parentName:"p"},"p")," for ",(0,a.kt)("em",{parentName:"p"},"print"),") the results. A colleague of Ken Thompson, one of the early innovators and inventors in the Unix world, needed to edit a large file - a file which was too large to fit in ",(0,a.kt)("inlineCode",{parentName:"p"},"ed"),". Ken wrote the ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," program overnight to allow the file's text to be filtered - and the results passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ed")," editor!"),(0,a.kt)("p",null,"You can read more about this story and some of the fascinating history of the early days of Unix in a ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NTfOnGZUZDk&feature=emb_title"},"great interview with Brian Kerninghan")," from Computerphile",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("h2",{id:"searching-through-text"},"Searching Through Text"),(0,a.kt)("p",null,"If you've been working through this book, you've probably entered quite a few commands in the shell. Most shells keep a history of the commands you type. Under the hood, when you use the up and down keys to look through commands you entered earlier, or use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-R")," shortcut to ",(0,a.kt)("em",{parentName:"p"},"search")," through earlier commands, your shell is looking through this file. If these tricks are not familiar, check ",(0,a.kt)("a",{parentName:"p",href:"/part-2-core-skills/fly-on-the-command-line"},"Chapter 9 - Fly on the Command Line"),"."),(0,a.kt)("p",null,"The file which keeps the history can vary from shell to shell. For example, on my system, my history for Bash is in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bash_history"),". But most 'Bash-like' shells provide a built-in environment variable which let's you find the path of the shell history. Let's at this file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat $HISTFILE\n\n...\ncat ~/.ssh/config\nssh bastion.cloudops\nhelp echo\nhelp cd\nexit\n")),(0,a.kt)("p",null,"This file will generally contain a list of the commands that the logged in user has entered in their shell. This file will likely be huge. Let's search through it using ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),"! Here's how we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," command to search for lines which contain the text ",(0,a.kt)("inlineCode",{parentName:"p"},"man"),":"),(0,a.kt)("pre",null,"grep man $HISTFILE","\n","\n","...","\n",(0,a.kt)("strong",null,"man")," socket","\n","k describe services eventstoredb-http-",(0,a.kt)("strong",null,"man"),"agement","\n",(0,a.kt)("strong",null,"man")," cal","\n","gcb refactor/perfor",(0,a.kt)("strong",null,"man"),"ce/standardise-eventstore","\n","vi src/tests/handlers/test_com",(0,a.kt)("strong",null,"man"),"d_handlers.py","\n","gco src/handlers/com",(0,a.kt)("strong",null,"man"),"d_handlers.py","\n","gcb feat/perfor",(0,a.kt)("strong",null,"man"),"ce/use-eventstore-writer","\n","nvim perfor",(0,a.kt)("strong",null,"man"),"ce.md","\n",(0,a.kt)("strong",null,"man")," grep","\n"),(0,a.kt)("p",null,"Here I can see all of the commands I have recently entered which have the text ",(0,a.kt)("inlineCode",{parentName:"p"},"man")," in them. Note that the text which matches is highlighted and shown in bold."),(0,a.kt)("p",null,"Now what if you a different shell, or forget where the history file lives? A nice trick here is to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," command. This command prints out the history, as well as the line number. The ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," command writes to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout"),". If we don't give ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," a source file, it will simply search through ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),". Just as we learnt in ",(0,a.kt)("a",{parentName:"p",href:"/part-2-core-skills/thinking-in-pipelines/"},"Chapter 7 - Thinking in Pipelines")," this means we can just ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," the output of the ",(0,a.kt)("inlineCode",{parentName:"p"},"history")," command!"),(0,a.kt)("p",null,"Here's how that would work:"),(0,a.kt)("pre",null,"history | grep man","\n","\n","...","\n","9125  ",(0,a.kt)("strong",null,"man")," socket","\n","9188  k describe services eventstoredb-http-",(0,a.kt)("strong",null,"man"),"agement","\n","9211  ",(0,a.kt)("strong",null,"man")," cal","\n","9341  gcb refactor/perfor",(0,a.kt)("strong",null,"man"),"ce/standardise-eventstore","\n","9344  vi src/tests/handlers/test_com",(0,a.kt)("strong",null,"man"),"d_handlers.py","\n","9347  gco src/handlers/com",(0,a.kt)("strong",null,"man"),"d_handlers.py","\n","9352  gcb feat/perfor",(0,a.kt)("strong",null,"man"),"ce/use-eventstore-writer","\n","9355  nvim perfor",(0,a.kt)("strong",null,"man"),"ce.md","\n","10002  ",(0,a.kt)("strong",null,"man")," grep","\n"),(0,a.kt)("p",null,"This is easier to remember! There's one more cool trick - if we just type in the exclamation point symbol followed by any line number shown above, we repeat the command! For example, typing in:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"!9355\n")),(0,a.kt)("p",null,"Would repeat line ",(0,a.kt)("inlineCode",{parentName:"p"},"9355")," of the history (which is ",(0,a.kt)("inlineCode",{parentName:"p"},"nvim performance.md"),")."),(0,a.kt)("h2",{id:"using-patterns"},"Using Patterns"),(0,a.kt)("p",null,"Now as you can see from the output above, when we searched through my history, we didn't just find times I executed the ",(0,a.kt)("inlineCode",{parentName:"p"},"man")," command - we found ",(0,a.kt)("em",{parentName:"p"},"any")," line which has the characters ",(0,a.kt)("inlineCode",{parentName:"p"},"man")," in it. What about if we only wanted to find the lines which start with ",(0,a.kt)("inlineCode",{parentName:"p"},"man"),"?"),(0,a.kt)("p",null,"To perform a search like this, we can use a ",(0,a.kt)("em",{parentName:"p"},"regular expression"),". Here's how it would work:"),(0,a.kt)("pre",null,'history | grep "[0-9]\\+  man"',"\n","\n","...","\n",(0,a.kt)("strong",null,"9125  man")," socket","\n",(0,a.kt)("strong",null,"9211  man")," cal","\n",(0,a.kt)("strong",null,"10002  man")," grep","\n"),(0,a.kt)("p",null,"Let's break this down. In this search, we are using a ",(0,a.kt)("em",{parentName:"p"},"pattern")," to search for text. The pattern in this case is a ",(0,a.kt)("em",{parentName:"p"},"basic regular expression"),". Regular expressions allow us to use some clever constructs to search for text. The expression we've used is made up of the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[0-9]\\+")," At least one number - any character in the range zero to nine."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"  man")," The literal text written, i.e. two spaces and the letters ",(0,a.kt)("inlineCode",{parentName:"li"},"man"),".")),(0,a.kt)("p",null,"Now for anyone who is familiar with regular expressions, you might wonder why we have a slash before the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," symbol, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," symbol has a specific meaning in regular expressions (it means 'at least one of the previous characters). The reason we have a leading slash is that by default ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," is using ",(0,a.kt)("em",{parentName:"p"},"basic regular expressions"),". In general, this will be less familiar for users and will be different to what they are used to from different tools."),(0,a.kt)("p",null,"To make regular expressions more 'standard', we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-E")," flag to tell ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," to use ",(0,a.kt)("em",{parentName:"p"},"Extended Regular Expressions"),". We can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"egrep")," tool, which assumes the pattern will be an extended regular expression. Using either approach will work, and allow you to re-write the pattern as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'history | grep -E "[0-9]+  man"\n\n# ...or...\n\nhistory | egrep "[0-9]+  man"\n')),(0,a.kt)("p",null,"This is just a little hint of the power of regular expressions. They can be daunting at first, and many people never become comfortable with them, but I would strongly encourage you to start exploring them."),(0,a.kt)("admonition",{title:"Getting Help on Regular Expressions",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you want to find out more about the difference between the slightly old-fashioned ",(0,a.kt)("em",{parentName:"p"},"basic")," regular expressions and modern regular expressions, you can use:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"man re_format\n")),(0,a.kt)("p",{parentName:"admonition"},"This manpage gives lots of information on regular expressions, including the differences between basic and extended patterns.")),(0,a.kt)("p",null,"If you ever want to see how a regular expression works, try using the website ",(0,a.kt)("a",{parentName:"p",href:"https://regex101.com"},"regex101.com"),". It let's you test out regular expressions and also describes exactly how they work. For example, if I enter the regular expression we just used I'll see this:"),(0,a.kt)("img",{src:n(7835).Z,width:"800px",alt:"Screenshot of the 'regex101' website"}),(0,a.kt)("p",null,"We're going to see more about regular expressions as we go through the book."),(0,a.kt)("h2",{id:"finding-problems"},"Finding Problems"),(0,a.kt)("p",null,"If there's one command I use a lot, it's this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"grep -i err\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," flag makes the search case-insensitive. This makes this a very quick way to scan through a file for any text which matches the letters ",(0,a.kt)("inlineCode",{parentName:"p"},"err")," - making it a very quick way to find ",(0,a.kt)("em",{parentName:"p"},"errors")," in log files."),(0,a.kt)("p",null,"You can try this out by using some of the log files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"logs")," folder of the samples. Here's how you can try it out:"),(0,a.kt)("pre",null,"grep -i err ~/effective-shell/logs/web-server-logs.txt","\n","\n","...","\n","2020-11-29T12:50:30.594Z: info - Serving file '../../../website/public/docs/part-2-core-skills/7-thinking-in-pipelines/images/diagram-std",(0,a.kt)("strong",null,"err"),"-redirect.png'...","\n","2020-11-29T12:50:31.827Z: ",(0,a.kt)("strong",null,"err"),"or - Unhandled ",(0,a.kt)("strong",null,"err"),"or EACCES trying to read '../../../website/public/svg/calendar.svg', returning a 500","\n","2020-11-29T12:50:31.827Z: ",(0,a.kt)("strong",null,"err"),"or - Unhandled ",(0,a.kt)("strong",null,"err"),"or EACCES trying to read '../../../website/public/svg/calendar.svg', returning a 500","\n","2020-11-29T12:50:31.827Z: ",(0,a.kt)("strong",null,"err"),"or - Unhandled ",(0,a.kt)("strong",null,"err"),"or EACCES trying to read '../../../website/public/svg/calendar.svg', returning a 500","\n","2020-11-29T12:50:31.848Z: ",(0,a.kt)("strong",null,"err"),"or - Unhandled ",(0,a.kt)("strong",null,"err"),"or EACCES trying to read '../../../website/public/svg/edit.svg', returning a 500","\n","2020-11-29T12:50:31.849Z: ",(0,a.kt)("strong",null,"err"),"or - Unhandled ",(0,a.kt)("strong",null,"err"),"or EACCES trying to read '../../../website/public/svg/edit.svg', returning a 500","\n"),(0,a.kt)("p",null,"This is a very useful trick. You could use this technique to search for warnings, problems, specific messages and so on."),(0,a.kt)("h2",{id:"the-abc-of-grep"},"The ABC of Grep"),(0,a.kt)("p",null,"There are three ",(0,a.kt)("em",{parentName:"p"},"really")," useful parameters for ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),", which I used to struggle to remember, until I realised that they are simple - ABC!"),(0,a.kt)("p",null,"Here's how they work:"),(0,a.kt)("pre",null,"$ grep host -A 3 ./programs/web-server/web-server.js","\n","\n",(0,a.kt)("strong",null,"host"),": process.env.HOST || 'local",(0,a.kt)("strong",null,"host"),"',","\n","port: process.env.PORT || getOptonalEnvInt('PORT', 8080),","\n","root: process.env.ROOT || process.cwd(),","\n","defaultPage: 'index.html',","\n","--","\n","httpServer.listen(","{",(0,a.kt)("strong",null,"host"),": config.",(0,a.kt)("strong",null,"host"),", port: config.port &brace;);","\n","log.info(`Server running on: $","{","config.",(0,a.kt)("strong",null,"host"),"}",":$","{","config.port","}","`);","\n","}","\n","main();","\n"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"A")," stands for ",(0,a.kt)("em",{parentName:"p"},"after"),". In this example we show the three lines after each occurrence of the work ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"web-server.js")," script. This is a quick way to see how something you search for might be used!"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"B")," stands for ",(0,a.kt)("em",{parentName:"p"},"before")," - we can use this to see what comes ",(0,a.kt)("em",{parentName:"p"},"before")," a match when we're searching. What can lead to us sending an error in our web server? Let's see:"),(0,a.kt)("pre",null,"$ grep throw -B 5 ./programs/web-server/web-server.js","\n","\n","//  Helper to return an optional numeric environment variable or the default.","\n","function getOptonalEnvInt(name, defaultValue) ","{","\n","const val = process.env[name];","\n","if (!val) return defaultValue;","\n","const intVal = parseInt(val, 10);","\n","if (isNaN(intVal)) ",(0,a.kt)("strong",null,"throw")," new Error(`Unable to parse environment variable named '$","{","name","}","' with value '$","{","val","}","' into an integer`);","\n"),(0,a.kt)("p",null,"And finally ",(0,a.kt)("inlineCode",{parentName:"p"},"C"),", the most useful of them all. ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," stands for ",(0,a.kt)("em",{parentName:"p"},"context"),", and lets you see a number of lines ",(0,a.kt)("em",{parentName:"p"},"before and after")," each match. What was I up to the last time I ran the ",(0,a.kt)("inlineCode",{parentName:"p"},"git init")," command? Let's see!"),(0,a.kt)("pre",null,"$ history | grep -C 5 'git init'","\n","\n","5802  git push --follow-tags && git push origin","\n","5803  cd ../java-maven-standard-version-sample","\n","5804  rm -rg .git","\n","5805  rm -rf git","\n","5806  rm -rf .idea","\n","5807  ",(0,a.kt)("strong",null,"git init")," -h","\n","5808  git remote add origin git@github.com:dwmkerr/java-maven-standard-version-sample.git","\n","5809  git push origin -u","\n","5810  git push -u origin","\n","5811  git push --set-upstream origin master","\n","5812  git rm --cached tpm","\n"),(0,a.kt)("p",null,"Don't forget that these flags need to be capitalised! These three flags are ",(0,a.kt)("em",{parentName:"p"},"very")," useful - knowing how to find context of a match can be a lifesaver when quickly searching through text."),(0,a.kt)("h2",{id:"working-with-multiple-files"},"Working with Multiple Files"),(0,a.kt)("p",null,"What about if you have a bunch of files you want to search? One problem we have at the moment is that everything we search through has been a single file. But if we are searching through multiple files, how can we identify where the matches come from?"),(0,a.kt)("p",null,"There's a useful pair of flags for this. ",(0,a.kt)("inlineCode",{parentName:"p"},"-H")," stands for 'header', which shows the file name before each match. ",(0,a.kt)("inlineCode",{parentName:"p"},"-n")," stands for 'number', which makes sure the line number is shown. Here's how we might use this command:"),(0,a.kt)("pre",null,"$ grep -Hn ERROR ./logs/apm-logs/*.logs","\n","\n","...","\n","./logs/apm-logs/apm02.logs:34893:2020-11-27T12:24:37.429Z       ",(0,a.kt)("strong",null,"ERROR"),"   [request]       middleware/log_middleware.go:95unauthorized     ","{",'"request_id": "53a41a98-ba12-454e-aadf-72c97dc40e96", "method": "POST", "URL": "/config/v1/agents", "content_length": 27, "remote_address": "127.0.0.1", "user-agent": "elasticapm-python/5.9.0", "response_code": 401, "error": "unauthorized"',"}","\n","./logs/apm-logs/apm02.logs:34906:2020-11-27T12:25:11.415Z       ",(0,a.kt)("strong",null,"ERROR"),"   [request]       middleware/log_middleware.go:95unauthorized     ","{",'"request_id": "a49d5546-b8d2-4e50-9dd0-6cbf419a365e", "method": "POST", "URL": "/config/v1/agents", "content_length": 27, "remote_address": "127.0.0.1", "user-agent": "elasticapm-python/5.9.0", "response_code": 401, "error": "unauthorized"',"}","\n"),(0,a.kt)("p",null,"Note that in this case we searched through many files - anything which matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"*.logs")," wildcard. To help us identify in ",(0,a.kt)("em",{parentName:"p"},"which")," file the match was found, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"-Hn")," flags. The beginning of the lines now start with the path of the file and the line number, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./logs/apm-logs/apm02.logs:34906\n")),(0,a.kt)("p",null,"You can take this even further:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ grep -R -Hn -i error ./logs\n")),(0,a.kt)("p",null,"Adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-R")," or ",(0,a.kt)("em",{parentName:"p"},"recursive")," flag tells ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," to search recursively in folders if they are included in the search."),(0,a.kt)("h2",{id:"v-for-invert"},"V for Invert"),(0,a.kt)("p",null,"As long as your remember that ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," is the flag for ",(0,a.kt)("em",{parentName:"p"},"case insensitive"),", it makes it a little easier to remember ",(0,a.kt)("em",{parentName:"p"},"v for invert"),". This tells ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," to ",(0,a.kt)("em",{parentName:"p"},"exclude")," lines which match the pattern. This works kind of like a filter."),(0,a.kt)("p",null,"Here's how I could look through my log files, excluding any messages with 'debug' in them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ grep -v debug ./logs/web-server.logs\n")),(0,a.kt)("p",null,"Don't forget, you can always ",(0,a.kt)("em",{parentName:"p"},"pipe")," a series of ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," commands together. Rather than trying to work out a perfect pattern which searches for exactly what you want, you could just pipe a a set of commands together:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ grep -i error -R ./logs | grep -i -v memory | grep -i -v 'not found'\n")),(0,a.kt)("p",null,"This set of small, simple, commands is chained together to make a more sophisticated operation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First we recursively search for any ",(0,a.kt)("inlineCode",{parentName:"li"},"error")," text in the ",(0,a.kt)("inlineCode",{parentName:"li"},"./logs")," folder"),(0,a.kt)("li",{parentName:"ul"},"Then we exclude anything which matches ",(0,a.kt)("inlineCode",{parentName:"li"},"memory")),(0,a.kt)("li",{parentName:"ul"},"Then we exclude anything which matches ",(0,a.kt)("inlineCode",{parentName:"li"},"not found"))),(0,a.kt)("p",null,"This is the essence of the Unix Philosophy - with a small number of simple tools, we can ",(0,a.kt)("em",{parentName:"p"},"compose")," a more complex workflow!"),(0,a.kt)("h2",{id:"dont-forget-your-pipelines"},"Don't Forget Your Pipelines!"),(0,a.kt)("p",null,"We've introduced a very powerful command in this chapter. For familiar users, ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," becomes a ",(0,a.kt)("em",{parentName:"p"},"verb")," they use regularly - you ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," the output of something, or might be ",(0,a.kt)("em",{parentName:"p"},"grepping")," to find something. Remember that ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),", just like most of the tools in this section, works on ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin")," by default. So you can easily ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," the output of almost anything!"),(0,a.kt)("p",null,"Here are a few simple examples just to show you how easy it is to perform more complex tasks with grep."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ps -a | grep vim\n")),(0,a.kt)("p",null,"Show all processes, then filter the list down to only ",(0,a.kt)("inlineCode",{parentName:"p"},"vim")," processes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"grep -Hn -C 3 -R password ./k8s/**/*.yaml | less\n")),(0,a.kt)("p",null,"Search through all of the ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml")," files in my ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s")," folder, for the text 'password', show three lines of context, as well as the file name and number, and put the output in my pager so that it is easy to search through."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ls -al /usr/bin /bin /usr/local/bin | grep zip\n")),(0,a.kt)("p",null,"Search through all of my installed programs for programs which have ",(0,a.kt)("inlineCode",{parentName:"p"},"zip")," in the name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"history | grep grep | tail -n 10\n")),(0,a.kt)("p",null,"Show me the last ten ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," commands I typed in my shell!"),(0,a.kt)("p",null,"We'll see a lot more examples as we go through the book - just remember that ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," is always available to search or filter text!"),(0,a.kt)("h2",{id:"alternatives-to-grep"},"Alternatives to Grep"),(0,a.kt)("p",null,"Grep is a very commonly used tool and has been around for a long time. It can vary a bit from system to system. Over the years a number of alternatives have been developed. Most of these alternatives are either designed to be ",(0,a.kt)("em",{parentName:"p"},"faster"),", so that you can search through files much more quickly, or ",(0,a.kt)("em",{parentName:"p"},"easier")," so that you don't have to remember too many flags."),(0,a.kt)("p",null,"In general, I would advise ",(0,a.kt)("em",{parentName:"p"},"against")," using alternatives - until you genuinely find you are limited by ",(0,a.kt)("inlineCode",{parentName:"p"},"grep"),". Every alternative is another tool to learn, which might not be present on other systems you use. It is also less likely to be available if you are writing scripts or instructions for others."),(0,a.kt)("p",null,"If you find yourself really struggling with performance - perhaps you often search huge folders of text or if you find yourself regularly struggling to find ways to craft your search patterns, then perhaps you can investigate some of the popular alternatives. But I would suggest that you master the core ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," functionality first, before installing other tools."),(0,a.kt)("p",null,"If you ",(0,a.kt)("em",{parentName:"p"},"do")," decide you want to add some more text searching tools to your toolkit, I would suggest ",(0,a.kt)("inlineCode",{parentName:"p"},"ripgrep"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ag")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ack")," as three potential options. Each of them offer performance improvements and additional functionality."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Grep is a simple text-based search tool! If you need to ",(0,a.kt)("em",{parentName:"p"},"find")," text, or want to ",(0,a.kt)("em",{parentName:"p"},"filter")," text, then ",(0,a.kt)("inlineCode",{parentName:"p"},"grep")," should be your go-to tool."),(0,a.kt)("p",null,"Here's a summary of what we've covered:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grep pattern file")," searches ",(0,a.kt)("inlineCode",{parentName:"li"},"file")," for the text ",(0,a.kt)("inlineCode",{parentName:"li"},"pattern")),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"-E")," flag lets you use ",(0,a.kt)("em",{parentName:"li"},"regular expressions")," for more sophisticated searches"),(0,a.kt)("li",{parentName:"ul"},"You can make the search case insensitive with the ",(0,a.kt)("inlineCode",{parentName:"li"},"-i")," flag"),(0,a.kt)("li",{parentName:"ul"},"Remember the ",(0,a.kt)("inlineCode",{parentName:"li"},"ABC")," flags - ",(0,a.kt)("em",{parentName:"li"},"after"),", ",(0,a.kt)("em",{parentName:"li"},"before")," and ",(0,a.kt)("em",{parentName:"li"},"context"),", which show lines after, before and around the matches"),(0,a.kt)("li",{parentName:"ul"},"Include the filename and line number with the ",(0,a.kt)("inlineCode",{parentName:"li"},"-Hn")," flags"),(0,a.kt)("li",{parentName:"ul"},"V for invert! Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"-v")," flag to invert the search, or filter out matches"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grep")," works great in pipelines! Use it to search or filter when working with ",(0,a.kt)("em",{parentName:"li"},"other")," commands")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"See the interview at: ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NTfOnGZUZDk&feature=emb_title"},"https://www.youtube.com/watch?v=NTfOnGZUZDk&feature=emb_title"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},7835:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/regex101-fea6481d5879238fd6a0ea825fef8eb1.png"}}]);