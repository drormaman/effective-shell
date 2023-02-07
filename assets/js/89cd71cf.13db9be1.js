"use strict";(self.webpackChunkeffective_shell=self.webpackChunkeffective_shell||[]).push([[8959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),h=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=h(n),u=i,d=c["".concat(r,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var h=2;h<o;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const o={title:"Shell Script Essentials",slug:"/part-3-manipulating-text/shell-script-essentials/"},l=void 0,s={unversionedId:"shell-scripting/shell-script-essentials/index",id:"shell-scripting/shell-script-essentials/index",title:"Shell Script Essentials",description:"In this chapter we're going to look at how to write shell scripts and the different ways we can execute them. We'll look at how shell script files should be structured and how to use 'shebangs' to define how a shell script will run.",source:"@site/docs/04-shell-scripting/18-shell-script-essentials/index.md",sourceDirName:"04-shell-scripting/18-shell-script-essentials",slug:"/part-3-manipulating-text/shell-script-essentials/",permalink:"/part-3-manipulating-text/shell-script-essentials/",draft:!1,editUrl:"https://github.com/dwmkerr/effective-shell/edit/main/docs/04-shell-scripting/18-shell-script-essentials/index.md",tags:[],version:"current",frontMatter:{title:"Shell Script Essentials",slug:"/part-3-manipulating-text/shell-script-essentials/"},sidebar:"sidebar",previous:{title:"Part 4 - Shell Scripting",permalink:"/part-4-shell-scripting/"},next:{title:"Variables, Reading Input, and Mathematics",permalink:"/part-3-manipulating-text/variables-reading-input-and-mathematics/"}},r={},h=[{value:"What is a Shell Script?",id:"what-is-a-shell-script",level:2},{value:"Creating a Basic Shell Script",id:"creating-a-basic-shell-script",level:2},{value:"The &#39;common&#39; Command",id:"the-common-command",level:3},{value:"Creating a Simple Script",id:"creating-a-simple-script",level:3},{value:"Commentsindex",id:"commentsindex",level:2},{value:"Building and Testing the Script",id:"building-and-testing-the-script",level:2},{value:"Multi-line Commands",id:"multi-line-commands",level:2},{value:"Running a Shell Script",id:"running-a-shell-script",level:2},{value:"Using Shebangs",id:"using-shebangs",level:2},{value:"Shebangs - Dealing with Paths",id:"shebangs---dealing-with-paths",level:3},{value:"Sourcing Shell Scripts",id:"sourcing-shell-scripts",level:2},{value:"Dot Sourcingindex",id:"dot-sourcingindex",level:3},{value:"Installing Your Script",id:"installing-your-script",level:2},{value:"Summary",id:"summary",level:2},{value:"Appendix - How the Script Works",id:"appendix---how-the-script-works",level:3}],p={toc:h};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this chapter we're going to look at how to write shell scripts and the different ways we can execute them. We'll look at how shell script files should be structured and how to use 'shebangs' to define how a shell script will run."),(0,i.kt)("p",null,"We'll learn the essential techniques that will be help you build your own scripts. Even if you are familiar with shell scripts I would suggest skimming this chapter to make sure you understand each of the concepts, particularly the later section where we talk about using the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," command in shebangs."),(0,i.kt)("h2",{id:"what-is-a-shell-script"},"What is a Shell Script?"),(0,i.kt)("p",null,"A shell script is just a text file which contains a set of commands. As soon as you find yourself repeating the same sequence of commands in a shell, it might be worth saving these commands to a file and running the file instead."),(0,i.kt)("p",null,"Saving your commands to a file has a number of benefits. It saves time - you don't need to type the commands out each time you want to run them! You can use your favourite editor to build the script file, and you can add 'comments' to describe what you are trying to achieve (which will make it far easier to update the script over time). Files can also easily be shared - meaning you can copy these scripts to other machines or share them with others who might find them useful."),(0,i.kt)("h2",{id:"creating-a-basic-shell-script"},"Creating a Basic Shell Script"),(0,i.kt)("p",null,"Let's create a simple shell script that shows us our most commonly used shell commands."),(0,i.kt)("p",null,"Almost every command that is needed to build the script has been discussed in the book already, so it shouldn't be too unfamiliar. But I'll still break it down blow-by-blow to help us understand it."),(0,i.kt)("p",null,"As we go through this section of the book, we're going to extend this script and make it more useful!"),(0,i.kt)("h3",{id:"the-common-command"},"The 'common' Command"),(0,i.kt)("p",null,"We're going to create a new command, called 'common', that shows the most commonly used shell commands."),(0,i.kt)("p",null,"We should be able to do this using techniques we've seen so far. We'll do it like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read a large number of commands from the history"),(0,i.kt)("li",{parentName:"ol"},"Sort the commands, then count the number of duplicates"),(0,i.kt)("li",{parentName:"ol"},"Sort this list showing the most commonly run commands first"),(0,i.kt)("li",{parentName:"ol"},"Print the results to the screen.")),(0,i.kt)("p",null,"Let's get started!"),(0,i.kt)("h3",{id:"creating-a-simple-script"},"Creating a Simple Script"),(0,i.kt)("p",null,"It's going to take some trial and error to get our commands right. So let's start by creating a shell script, which we'll run again and again."),(0,i.kt)("p",null,"In your favourite editor, create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," and put it somewhere on your system. As an example, I'm going to create a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," in my home directory and create the ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," file there:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a directory called 'scripts'.\n# Using the '-p' flag means we won't get an error if the folder exists.\nmkdir -p ~/scripts \n\n# Create the script file.\ntouch ~/scripts/common.v1.sh\n\n# Open the script file in my favourite editor.\nvi ~/scripts.sh\n")),(0,i.kt)("p",null,"I have called the script ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"common.sh")," because in each chapter of this section we are going to improve upon the script and change the version number. So in later chapters we will create ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v2.sh"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v3.sh")," and so on."),(0,i.kt)("p",null,"These commands should be familiar. The ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir")," command creates a directory. The ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," (create parent directories if needed) flag stops the command from returning an error if the directory already exists."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"touch")," command creates an empty file with the given name. Finally, I open the file in an editor. I am using Vim, but you can open this file in any editor you like. If you would like to see how to use Vim you can also jump to ",(0,i.kt)("a",{parentName:"p",href:"/part-6-advanced-techniques/a-vim-crash-course/"},"Chapter 32 - A Vim Crash Course"),"."),(0,i.kt)("p",null,"Before we run the script, let's quickly talk about ",(0,i.kt)("em",{parentName:"p"},"comments"),"."),(0,i.kt)("h2",{id:"commentsindex"},"Comments"),(0,i.kt)("p",null,"Comments are lines of text that you add to a script or program to help the reader understand what is going on. Comments are not interpreted by the shell \u2013 they are purely for the benefit of the reader."),(0,i.kt)("p",null,"Any text that follows a ",(0,i.kt)("inlineCode",{parentName:"p"},"#")," hash symbol is treated as a comment. Whether this is text you type into a shell, or text in a shell script, the shell will ignore anything after the hash and not try to interpret it."),(0,i.kt)("p",null,"Using comments effectively can be a huge time-saver \u2013 it is amazing how quickly you can forget what a certain piece of code means, or why you solved a problem in a particular way."),(0,i.kt)("p",null,"Let\u2019s look at some examples of comments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# This is a comment - we can use this to describe what we\'re trying to do.\n\necho "Hello Shell" # Comments can go at the end of a line...\n\n# You can also use a comment symbol to \'comment out\' a line:\n# echo "Goodbye Shell"\n')),(0,i.kt)("p",null,"There are three comments in this sample. The first comment takes up a whole line, the second comment is at the end of a line to add some explanation, and the third comment is some 'commented out' code \u2013 we've just put a hash in front of some commands so that they will not be executed."),(0,i.kt)("p",null,"From this point on we'll use comments a lot to explain what we are trying to accomplish with each section of a script. It is generally good practice to use comments to describe your ",(0,i.kt)("em",{parentName:"p"},"intent")," - why you are doing something. This is far more useful for the reader than ",(0,i.kt)("em",{parentName:"p"},"what")," you are doing. The 'what' should be clear from the commands - the 'why' is the thing readers will likely want to understand."),(0,i.kt)("p",null,"Here's an example of a bad comment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Write the CSV file, reverse it, cut it, reverse it.\ncat ~/effective-shell/data/top100.csv | rev | cut -d',' -f1 | rev\n")),(0,i.kt)("p",null,"The comment just describes what the script is doing. But it doesn't explain ",(0,i.kt)("em",{parentName:"p"},"why"),". A better comment would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Get the last field of each line in the csv file.\ncat ~/effective-shell/data/top100.csv | rev | cut -d',' -f1 | rev\n")),(0,i.kt)("p",null,"If you ",(0,i.kt)("em",{parentName:"p"},"don't")," come from a programming background, you might think that many of these comments are a little obvious. But as you write more and more code, you'll realise that something that seemed obvious when you wrote it a while ago can look surprisingly baffling even just a few days later!"),(0,i.kt)("h2",{id:"building-and-testing-the-script"},"Building and Testing the Script"),(0,i.kt)("p",null,"Add the following commands to the ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Write the title of our command.\necho \"common commands:\"\n\n# Show the most commonly used commands.\ntail ~/.bash_history -n 1000 | sort | uniq -c | sed 's/^ *//' | sort -n -r | head -n 10\n")),(0,i.kt)("p",null,"This is a short script, but there is quite a lot going on. Let's look at it blow-by-blow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First we take the last 1000 lines of the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.bash_history")," file using the ",(0,i.kt)("inlineCode",{parentName:"li"},"tail")," command",(0,i.kt)("sup",{parentName:"li",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,i.kt)("li",{parentName:"ol"},"Then we sort the commands. This will put all of the duplicates next to each other"),(0,i.kt)("li",{parentName:"ol"},"Then we remove all duplicates and use the ",(0,i.kt)("inlineCode",{parentName:"li"},"-c")," (",(0,i.kt)("em",{parentName:"li"},"show count"),") flag to count the duplicates"),(0,i.kt)("li",{parentName:"ol"},"Then we remove the leading spaces from the output (which we need to do so that we can sort properly)"),(0,i.kt)("li",{parentName:"ol"},"Then we sort ",(0,i.kt)("em",{parentName:"li"},"numerically")," and in reverse - the highest count first"),(0,i.kt)("li",{parentName:"ol"},"Finally, we limit the results to the first ten items")),(0,i.kt)("p",null,"If you need a refresher on the shell history, ",(0,i.kt)("inlineCode",{parentName:"p"},"sort")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," the check the ",(0,i.kt)("a",{parentName:"p",href:"/part-3-manipulating-text/slice-and-dice-text/"},"Slice and Dice Text")," chapter. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"sed")," command doesn't look familiar then check the ",(0,i.kt)("a",{parentName:"p",href:"/part-3-manipulating-text/advanced-text-manipulation/"},"Advanced Text Manipulation with Sed")," chapter."),(0,i.kt)("p",null,"If you want to see a more detailed breakdown of how the script works, check ",(0,i.kt)("a",{parentName:"p",href:"#appendix-how-the-script-works"},"Appendix - How the Script Works"),". But this is not necessary for you to follow the content in this chapter."),(0,i.kt)("p",null,"Now save the file. In your shell, run the following command to execute the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sh ~/scripts/common.v1.sh\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")," (shell) command starts a new shell. When we pass the path of a shell script, the shell command will run the script and then exit. The output you see will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"common commands:\n463 vi\n267 gc\n238 ga .\n212 ls\n169 gpo\n122 make dev\n112 gl\n97 gcm\n96 gpr\n")),(0,i.kt)("p",null,"You can see my most common commands are short aliases for Git commands (the ones that start with 'g'), opening Vim, running a makefile command and a few others."),(0,i.kt)("p",null,"We now have a basic shell script. Let's look at a few different ways we can run the script."),(0,i.kt)("h2",{id:"multi-line-commands"},"Multi-line Commands"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," backslash character to create a 'continuation' that tells the shell it needs to join lines up. This allows you to break long commands into multiple lines."),(0,i.kt)("p",null,"As an example, we could re-write our pipeline command to look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Show the most commonly used commands.\ntail ~/.bash_history -n 1000 \\\n    | sort \\\n    | uniq -c \\\n    | sed 's/^ *//' \\\n    | sort -n -r \\\n    | head -n 10\n")),(0,i.kt)("p",null,"This will probably look very familiar to anyone with a background in functional programming!"),(0,i.kt)("p",null,"Be careful when you split lines up - the continuation character ",(0,i.kt)("em",{parentName:"p"},"must")," be the last character on the line. If you add something after it (such as a comment) then the command will fail."),(0,i.kt)("h2",{id:"running-a-shell-script"},"Running a Shell Script"),(0,i.kt)("p",null,"There are a few different ways we can run shell scripts."),(0,i.kt)("p",null,"The first is to run a shell program and pass the script as a parameter. This is what we did in the earlier example. Here's another example of how we could run the script we created:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bash ~/scripts/common.v1.sh\n")),(0,i.kt)("p",null,"This is a perfectly valid technique. Now let's see the other ways we can run a script."),(0,i.kt)("p",null,"The next way we can run a script it is make it 'executable'. This means we change the file permissions of the script file, adding the 'executable bit'. This tells the systems we can run the file. We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," (",(0,i.kt)("em",{parentName:"p"},"change file mode"),") command to do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chmod +x ~/scripts/common.v1.sh\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," command looks unfamiliar then check the ",(0,i.kt)("a",{parentName:"p",href:"/part-2-core-skills/understanding-commands"},"Understanding Commands")," chapter. Now that the file has been made executable, we can simply enter the path to the file and run it, as if it was any other command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/scripts/common.v1.sh\n")),(0,i.kt)("p",null,"There is a problem with this approach though. How this file is executed is going to vary depending on how your system is set up",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". For example, if you are using Bash, then the script will run in a new instance of the Bash shell. However, if you are using the Z shell, then the script will most likely run in the ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")," program (and depending on your system, this program might just be a link to ",(0,i.kt)("em",{parentName:"p"},"another")," type of shell)."),(0,i.kt)("p",null,"We want to avoid any ambiguity and be explicit about ",(0,i.kt)("em",{parentName:"p"},"what")," program should run our script. We can do this using a special construct called a ",(0,i.kt)("em",{parentName:"p"},"shebang"),"."),(0,i.kt)("h2",{id:"using-shebangs"},"Using Shebangs"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"shebang")," is a special set of symbols at the beginning of a file that tells the system what program should be used to run the file."),(0,i.kt)("p",null,"If we were to add a shebang to our ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," file, it would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/sh\n\n# Write the title of our command.\necho \"common commands:\"\n\n# Show the most commonly used commands.\ntail ~/.bash_history -n 1000 | sort | uniq -c | sed 's/^ *//' | sort -n -r | head -n 10\n")),(0,i.kt)("p",null,"The shebang is the two characters - ",(0,i.kt)("inlineCode",{parentName:"p"},"#!"),". The name 'shebang' comes from the names of the symbols. The first symbol is a 'sharp' symbol (sometimes it is called a hash, it depends a little on context). The second symbol is an exclamation point. In programming the exclamation point is sometimes called the 'bang' symbol. When we put the two together, we get 'sharp bang', which is shortened to 'shebang'."),(0,i.kt)("p",null,"Immediately after the shebang you write the full path to the program which should be used to open the file."),(0,i.kt)("p",null,"For example, if you wanted to write a script that is run in Python, you could do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/python3\n\nprint('Hello from Python')\n")),(0,i.kt)("p",null,"If we wanted to explicitly use the Bash shell to run a script, we might use a shebang like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/bash\n\necho "Hello from Bash"\n')),(0,i.kt)("p",null,"What about Node.js? Easy!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'#!/usr/bin/node\n\nconsole.log("Hello from Node.js");\n')),(0,i.kt)("h3",{id:"shebangs---dealing-with-paths"},"Shebangs - Dealing with Paths"),(0,i.kt)("p",null,"When we use a shebang we need to provide the full path the executable that will be used to run the script."),(0,i.kt)("p",null,"For example, what if we want to use Ruby to run a script we could write a script like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"#!/usr/bin/ruby\n\nputs 'Hello from Ruby'\n")),(0,i.kt)("p",null,"But there is a problem here. This will only work if you have the Ruby program installed in the location specified after the shebang (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin/ruby"),"). If you do not have the Ruby program in this location the script will fail to run."),(0,i.kt)("p",null,"How can we know where the user will have a specific program installed?"),(0,i.kt)("p",null,"There is a common trick for dealing with this issue. We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," (",(0,i.kt)("em",{parentName:"p"},"set environment and execute command"),") command to run a command and it will work out the path for us."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," command is often used to show environment variables, but you can also use it to execute an arbitrary command (often with a modified environment). One handy feature of the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," command is that it looks through the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," variable to find the path of the command to execute."),(0,i.kt)("p",null,"You can see this by running a command like the below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ env python3\nPython 3.8.5 (default, Jan 27 2021, 15:41:15)\n[GCC 9.3.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>>\n')),(0,i.kt)("p",null,"We've used the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," command to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"python3")," command - and it worked out the correct path for us."),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," in a shebang, specify the full path to ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," (which should be the same on all Unix-like systems) and then provide the name of the command to run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#!/usr/bin/env bash\n\necho "Hello from Bash"\n')),(0,i.kt)("p",null,"Or another example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#!/usr/bin/env ruby\n\nputs 'Hello from Ruby'\n")),(0,i.kt)("p",null,"Using a shebang to specify the exact command to run, and then using the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," command to allow the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH")," to be searched is generally the safest and most portable way to specify how a shell script should run."),(0,i.kt)("h2",{id:"sourcing-shell-scripts"},"Sourcing Shell Scripts"),(0,i.kt)("p",null,"We have discussed how to ",(0,i.kt)("em",{parentName:"p"},"run")," shell scripts. You can also use the ",(0,i.kt)("em",{parentName:"p"},"source")," (",(0,i.kt)("em",{parentName:"p"},"execute commands from a file"),") command"," to load the contents of a file into the ",(0,i.kt)("em",{parentName:"p"},"current")," shell."),(0,i.kt)("p",null,"Remember that when we run a shell script, a new shell is created as a child process of the current shell. This means that if you change something in the environment, such as a variable, it will not affect the environment of the shell that ran the script."),(0,i.kt)("p",null,"Let's see an example. We'll create a script called ",(0,i.kt)("em",{parentName:"p"},"set_editor.sh")," that sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"EDITOR")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"nano"),". The script's contents are below (can can also find it in the samples at ",(0,i.kt)("em",{parentName:"p"},"~/effective-shell/scripts/set_editor.sh"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'EDITOR=nano\necho "Editor changed to: $EDITOR"\n')),(0,i.kt)("p",null,"Let's run this script and see what editor looks like before and after:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ echo $EDITOR\nvim\n$ ~/effective-shell/scripts/set_editor.sh\nEditor changed to: nano\n$ echo $EDITOR\nvim\n")),(0,i.kt)("p",null,"Notice that although we changed the ",(0,i.kt)("inlineCode",{parentName:"p"},"EDITOR")," environment variable in our script, the change has not persisted in the current shell. This is because each shell (and in fact, each process) gets its own ",(0,i.kt)("em",{parentName:"p"},"copy")," of the environment."),(0,i.kt)("p",null,"If we want to run the commands in the file in the context of the current shell, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," command to load the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ echo $EDITOR\nvim\n$ source ~/effective-shell/scripts/set_editor.sh\nEditor changed to: nano\n$ echo $EDITOR\nnano\n")),(0,i.kt)("p",null,"Our existing environment has been changed. When we use ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),", the commands in the file are executed in the current shell, rather than in a new shell."),(0,i.kt)("p",null,"We can see this even more clearly if we use the ",(0,i.kt)("em",{parentName:"p"},"showpstree.sh")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ~/effective-shell/scripts/show-info.sh\nbash\n  \u2514\u2500sh /home/ubuntu/effective-shell/scripts/showpstree.sh\n    \u2514\u2500pstree -l -a -s 2240\n")),(0,i.kt)("p",null,"This script shows the current 'process tree', using the ",(0,i.kt)("inlineCode",{parentName:"p"},"pstree")," (",(0,i.kt)("em",{parentName:"p"},"show process tree"),") command. We can see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"pstree")," command was run as a child of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sh")," program. This program was run with the script path, by the shell I was using, ",(0,i.kt)("inlineCode",{parentName:"p"},"bash"),". This is a nice visualisation of what is going on - our ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," shell has run the ",(0,i.kt)("em",{parentName:"p"},"showpstree.sh")," script in a child shell."),(0,i.kt)("p",null,"If we source the same file, we'll see that we do ",(0,i.kt)("em",{parentName:"p"},"not")," create a new shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ source ~/effective-shell/scripts/show-info.sh\nbash\n  \u2514\u2500pstree -l -a -s 2169\n")),(0,i.kt)("h3",{id:"dot-sourcingindex"},"Dot Sourcing"),(0,i.kt)("p",null,"There is a slightly more concise syntax that can be used to source a script - the ",(0,i.kt)("em",{parentName:"p"},"dot sourcing")," notation. When the shell sees a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," dot character, it will source the file that follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ . ~/effective-shell/scripts/show-info.sh\nbash\n  \u2514\u2500pstree -l -a -s 2169\n")),(0,i.kt)("p",null,"You may encounter this syntax as you look at things like shell configuration files, which we discuss in ",(0,i.kt)("a",{parentName:"p",href:"../../part-5-building-your-toolkit/configuring-the-shell"},"Chapter 24 - Configuring the Shell"),"."),(0,i.kt)("h2",{id:"installing-your-script"},"Installing Your Script"),(0,i.kt)("p",null,"Before we finish with our shell script fundamentals, we'll take a look at one final commonly used pattern to run shell scripts - installing them as a local binary."),(0,i.kt)("p",null,"Our ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," script (with the added shebang) looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/usr/bin/env sh\n\n# Write the title of our command.\necho \"common commands:\"\n\n# Show the most commonly used commands.\ntail ~/.bash_history -n 1000 | sort | uniq -c | sed 's/^ *//' | sort -n -r | head -n 10\n")),(0,i.kt)("p",null,"If we have made the script executable with the ",(0,i.kt)("inlineCode",{parentName:"p"},"chmod")," command, then we can run the script by simply typing the location of the script in the shell:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ~/scripts/common.v1.sh\ncommon commands:\n97 gcm\n96 gpr\n...\n")),(0,i.kt)("p",null,"If we want to 'install' this script as a local command which we can run easily, we can create a ",(0,i.kt)("em",{parentName:"p"},"symbolic link")," to the shell script in our ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ln -s ~/scripts/common.v1.sh /usr/local/bin/common\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ln")," (",(0,i.kt)("em",{parentName:"p"},"create link"),") command creates a link (which is like a shortcut in Windows and other desktop systems) in our ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," folder, with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"common"),", which points to the script we have written. We can now run the ",(0,i.kt)("inlineCode",{parentName:"p"},"common")," command without specifying its path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ common\ncommon commands:\n97 gcm\n96 gpr\n...\n")),(0,i.kt)("p",null,"This works because when the shell sees a command, it searches through the folders in the $PATH environment variable to find out where the command is. And the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," folder is in this list of paths."),(0,i.kt)("p",null,"Why do we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," folder rather than the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin")," folder? This is just a convention. In general, the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin")," folder is for commands which are installed with package manager tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," or Homebrew (on MacOS). The ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," folder is used for commands which you create for yourself on your local machine and manage yourself",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this chapter we've covered quite a few of the fundamentals of shell scripts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to create a shell script"),(0,i.kt)("li",{parentName:"ul"},"How comments work in shell scripts"),(0,i.kt)("li",{parentName:"ul"},"How to handle long lines with continuations"),(0,i.kt)("li",{parentName:"ul"},"How to run a shell script"),(0,i.kt)("li",{parentName:"ul"},"How to make a shell script executable"),(0,i.kt)("li",{parentName:"ul"},"How shebangs work"),(0,i.kt)("li",{parentName:"ul"},"How to use the ",(0,i.kt)("inlineCode",{parentName:"li"},"env")," command to make our shebangs more portable"),(0,i.kt)("li",{parentName:"ul"},"How to 'install' scripts for the current user")),(0,i.kt)("p",null,"In the next chapter we'll look at how to add logic to our shell scripts."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"appendix---how-the-script-works"},"Appendix - How the Script Works"),(0,i.kt)("p",null,"This section briefly covers how the ",(0,i.kt)("inlineCode",{parentName:"p"},"common.v1.sh")," script works. Assuming we have a history that looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vi README.md\ngit status\ngit checkout main\ngit status\nrestart-shell\ngit status\nopen .\nvi README.md\nopen .\n")),(0,i.kt)("p",null,"First we sort, putting duplicate lines next to each other:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git checkout main\ngit status\ngit status\ngit status\nopen .\nopen .\nrestart-shell\nvi README.md\nvi README.md\n")),(0,i.kt)("p",null,"Then we use ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," to remove duplicate adjacent lines, passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," flag to include a count:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"     1 git checkout main\n     3 git status\n     2 open .\n     1 restart-shell\n     2 vi README.md\n")),(0,i.kt)("p",null,"Now we remove the leading whitespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 git checkout main\n3 git status\n2 open .\n1 restart-shell\n2 vi README.md\n")),(0,i.kt)("p",null,"Finally we sort numerically (by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," flag) and in descending order (by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-r")," flag):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"3 git status\n2 vi README.md\n2 open .\n1 restart-shell\n1 git checkout main\n")),(0,i.kt)("p",null,"Why the numeric sort? If we didn't sort numerically and instead performed the default lexographic sort and have more than single digit results, the output would look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 git checkout main\n1 restart-shell\n13 git status\n2 open .\n2 vi README.md\n")),(0,i.kt)("p",null,"This is a lexographic sort - the line starting with 13 comes after the line starting with 2. We want to sort by the value of the number."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"The path to the shell history file is normally available in the ",(0,i.kt)("inlineCode",{parentName:"li"},"$HISTFILE")," environment variable. However, in a non-interactive shell this variable is not set (and when we run a shell script, it is run in a non-interactive shell). We'll see more about interactive and non-interactive shells later, this is just a note in case you are wondering why we don't use the ",(0,i.kt)("inlineCode",{parentName:"li"},"$HISTFILE")," variable or ",(0,i.kt)("inlineCode",{parentName:"li"},"history")," command!",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Try putting the command ",(0,i.kt)("inlineCode",{parentName:"li"},"pstree -p $$")," in a shell script and running the script - you'll see exactly what process is run.",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"If you want to know more about these folders and the conventions behind them then check back soon, I am going to be adding an entire section on Linux Fundamentals, and one of the chapters will specifically be on the Linux Filesystem. This will cover 'The Linux Filesystem Hierarchy Standard' which defines how folders like this should be used.",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);