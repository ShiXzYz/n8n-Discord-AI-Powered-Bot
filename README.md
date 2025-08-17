# n8n-Discord-AI-Powered-Bot
<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg" width="38%"><img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png" width="15%"><img src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png" width="30%">
## Created By: Brian Ryu
-------

## What I Accomplished

Throughout my internship journey during the summer of 2025, I was able to have the opportunity of creating my own hands-on project after learning and working with various AI automation tools.

While designing this project, I had also ventured out into exploring various subjects such as networking. With this, I created a separate Discord bot that sent various HTTP methods, in particular, POST and PULL requests to n8n's webhooks to interact with APIs and webservices. 

From utilizing OpenAI, I managed to design an AI Agent that acted as a chatbot for any of the user's questions. While the chatbot was able to respond, there was also another feature where the AI would determine if the user needed actual help from one of the moderators in the Discord server or was just querying to the bot. 

<img src="https://pngimg.com/uploads/chatgpt/chatgpt_PNG1.png" width=10%> <img src="https://play-lh.googleusercontent.com/RyoQTmHnxsxPYabsETmWVXHtLorVh_yOO48hsdv2VmI-Uki4qt5c5vV1cicJODV56A4" width=10%>

With my interest in cybersecurity, I had additionally constructed a logging mechanism that was linked to Google Cloud services such as Google Sheets. In the file, the AI Agent would create a formatted row of [username, user_id, channel_id, feedback, and time (during the query)] and then append that row directly onto the Google Sheets that I had connected called: Logger.

<img width="1200" height="400" alt="image" src="https://github.com/user-attachments/assets/6086ff2b-20ef-40f7-a3f5-6a075b88d223" />

-------

## How to Run
In order to run the n8n Discord AI-Powered Bot, there are several steps to follow:

1) First, it is necessary to make sure everthing is self-hosted on your own device for personal projects that will not be used for business purposes.
2) In order to host n8n, it is required to download and install docker onto your device.
    - <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s" width=5%>
3) Use these commands in your terminal or command line (project directory):
    - ```docker volume create n8n_data```
    - ```docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n```

## What Did I Learn?

* 

## Issues/Things to Improve Upon

* 
