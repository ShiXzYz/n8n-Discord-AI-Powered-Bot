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

## What I Did / How to Run

### Docker Setup for n8n self-hosting:
1) First, it is necessary to make sure everthing is self-hosted on your own device for personal projects that will not be used for business purposes.
2) In order to host n8n, it is required to download and install docker onto your device.

   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s" width=5%/>
   
3) Use these commands in your terminal or command line (project directory):
    - ```docker volume create n8n_data```
    - ```docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n```
4) Something similar to this should show up on your Docker Desktop application:
        <img width="2488" height="804" alt="image" src="https://github.com/user-attachments/assets/cf9878e0-98f4-416b-b8e8-fccb389e003d" />
5) Once this shows up, you are good to go by using the link to get into n8n:

   <img width="267" height="102" alt="Screenshot 2025-08-17 at 7 20 37 PM" src="https://github.com/user-attachments/assets/20c99d33-660c-4f98-8586-94ba0ce165d3" />

### Working in n8n:
1) From getting into n8n by self-hosting through the terminal or command line, I was able to create a project using the tools that n8n provided as well as implementing various essential factors such as API keys, webhooks, and etc.

<img width="1313" height="750" alt="Screenshot 2025-08-18 at 6 05 49 PM" src="https://github.com/user-attachments/assets/d9271fdd-d360-4449-9965-a257f683a579" />

2) The main element to point out at from this project is the AI Agent named "My Friend". This AI node is the heart of the project that I have created:
   - In my case, I had used the OpenAI Chat Model and applied a simple memory storage so that the AI Agent will continue to remember and save past conversations to help answer upcoming queries.
   - There are also options for more tools in order to help the AI Agent optimize the information that it is trying to fetch. As shown in the image, there is a Wikipedia and a Calculator tool that is extended from the node which will call these whenever the query contains related information such as math calculations or general definitions, etc.
   - The last part in this feature is the Output Parser. This is an optional format for making sure that the AI Agent's response is in the exact format that the user needs so that the data can continue on being used or manipulated for the remainder of the project workflow.

     <img width="720" height="270" alt="image" src="https://github.com/user-attachments/assets/2f3de494-7bf1-4cdf-b212-d94202f806dd" />

4) There are two parts to the last and final portion of my project's design:
   - **First**, the logging mechanism. After setting up a project using the Google Cloud account, it is possible to link the project with n8n using the OAuth2 API key. By doing so, sending any features such as create, delete, or insert from n8n to Google Cloud, it will be an execute that job in an automated process from start to finish.

     <img src="https://cdn.worldvectorlogo.com/logos/google-sheets-full-logo-1.svg" width=300 height=100>

   - **Second**, the help identifier. This was actually set up inside of the AI Agent node with a query stating that it should output a specific JSON format with decision in the category block. This allows for the _if_ statement to determine if the resulting answer should be sent in the normal conversation channel or the help desk. 

     <img width="450" height="300" alt="image" src="https://github.com/user-attachments/assets/5c999a07-4d43-478c-9357-2f1a367a224b" />


## What Did I Learn?

Throughout this internship, I was able to gain a meaningful experience with AI and the tools that it offers. With technology constantly improving at an unpredictable rate, I strongly believe that it will be important to continue to work with AI and have the skills to utilize and manage them to its full potential. 

## Issues/Things to Improve Upon

* 
