// ==============================
// Send Message Function
// ==============================

const messageInput = document.getElementById("message");
const sendBtn = document.getElementById("send");
const chatBox = document.querySelector(".messages");

function sendMessage(){

    const text = messageInput.value.trim();

    if(text===""){
        alert("Please type a message.");
        return;
    }

    const msg = document.createElement("div");

    msg.classList.add("sent");

    msg.innerText = text;

    chatBox.appendChild(msg);

    messageInput.value="";

    chatBox.scrollTop = chatBox.scrollHeight;

}

// Send Button

sendBtn.addEventListener("click",sendMessage);


// Press Enter

messageInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        e.preventDefault();

        sendMessage();

    }

});


// ==============================
// Attachment Button
// ==============================

const attachBtn = document.querySelectorAll(".message-input button")[0];

attachBtn.addEventListener("click",()=>{

    alert("Attachment feature will be available soon.");

});


// ==============================
// Emoji Button
// ==============================

const emojiBtn = document.querySelectorAll(".message-input button")[1];

emojiBtn.addEventListener("click",()=>{

    messageInput.value += " 😊";

    messageInput.focus();

});


// ==============================
// Chat Auto Reply
// ==============================

sendBtn.addEventListener("click",()=>{

    setTimeout(()=>{

        const reply=document.createElement("div");

        reply.classList.add("received");

        reply.innerText="Thanks! I'll review your message and get back to you shortly.";

        chatBox.appendChild(reply);

        chatBox.scrollTop=chatBox.scrollHeight;

    },1500);

});