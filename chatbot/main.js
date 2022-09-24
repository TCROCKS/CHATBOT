let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let i = 0;
let inp = document.getElementById("userInput");
let btn = document.getElementById("sendMsgBtn");
let card_1 = document.getElementById("chatContainer");

btn.onclick = function() {
    let user_box = document.createElement("p");
    user_box.classList.add("msg-to-chatbot-container", "msg-to-chatbot");
    user_box.textContent = inp.value;
    card_1.appendChild(user_box);

    let chat_box = document.createElement("p");
    chat_box.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    chat_box.textContent = chatbotMsgList[i];
    i += 1;
    card_1.appendChild(chat_box);
};