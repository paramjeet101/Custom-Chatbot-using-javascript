
var usermessage;
const sendBtn=document.getElementById("generateData")
const base=document.getElementsByClassName("chat-message")

sendBtn.onclick=()=>{
    getDetails()
}
const generateResponse=(botchat)=>{
    const botli=botchat.querySelector('p')
    
    var companyData={
        "hello":"hii how may i help u?",
        "What is the main purpose of the Sciastra website?":"The main purpose of the Sciastra website is to provide users with an online platform to discover and purchase unique and handmade products.",
        "How can I create an account on the Sciastra website?":"- To create an account on the Sciastra website, simply click on the 'Sign Up' button on the homepage and follow the instructions to register with your email address.",
        "Are all the products on the Sciastra website handmade?":"Yes, all the products available on the Sciastra website are handmade by artisans and craftsmen.",
        "Can I sell my own handmade products on Sciastra?":"Yes, Sciastra provides a marketplace for artisans to sell their own handmade products. You can apply to become a seller by contacting the Sciastra team.",
        "How can I search for specific products on the Sciastra website?":"You can use the search bar located on the top of any page to enter keywords and find specific products. Additionally, you can browse through categories and filters to narrow down your search.",
        "What payment methods are accepted on the Sciastra website?":"Sciastra accepts various payment methods, including credit/debit cards, PayPal, and other secure online payment gateways.",
        "Is my personal information safe on the Sciastra website?":"Yes, Sciastra values user privacy and utilizes industry-standard security measures to protect personal information. You can refer to their Privacy Policy for more details.",
        "How can I track my order after purchasing from Sciastra?":" Once your order is confirmed, you will receive a confirmation email with a tracking number. You can use this number to track your order on the Sciastra website or the shipping carrier's website.",
        "Can I cancel or modify my order on the Sciastra website?":" It depends on the specific circumstances and stage of your order. Contact Sciastra's customer support as soon as possible to inquire about cancelation or modification options",
        "Does Sciastra ship internationally? ":"Yes, Sciastra offers international shipping to many countries. You can check the list of countries on the website and select your desired destination during the checkout process.",
        "How long does it take to receive the ordered products?":"Delivery times may vary depending on the location and the specific product you ordered. Sciastra strives to provide estimated delivery times for each product on their website.",
        "Can I return or exchange a product if I am not satisfied?":"Yes, Sciastra has a return policy in place. If you are not fully satisfied with your purchase, you can contact their customer support within a specified period to initiate a return or exchange.",
        "Can I leave reviews or ratings for products on the Sciastra website?":"Yes, Sciastra encourages users to leave reviews and ratings for the products they have purchased. This helps other customers make informed decisions.",
        "Are there any discounts or promotions available on the Sciastra website?":"Sciastra occasionally offers discounts and promotions on selected products. You can check their website or subscribe to their newsletter to stay updated on any ongoing offers.",
        "How can I contact the Sciastra team if I have further questions or concerns?":"You can reach out to the Sciastra team by visiting their 'Contact Us' page or by sending an email to their customer support email address. They typically respond to inquiries within a reasonable timeframe."
    }
    if (usermessage in companyData){
        botli.innerHTML=companyData[usermessage]
    }
    else{
        botli.innerHTML="Sorry Not Understand !!"
    }

}

const createChatData=(message,className)=>{
    const ChatLi=document.createElement('li')
    ChatLi.classList.add("chat",className)
    let chatpara=className === "users" ? `<p class="user-chat"><p class="user-info">${message}</p><p> you </p></p>
    ` : `<Span style="padding-top: 20px;padding-right:10px;"><img src="robo2.0.png" style="width: 30px"></Span>
    <p class="bot-chat">${message}</p>`

    ChatLi.innerHTML=chatpara
    return ChatLi;

}
const getDetails=()=>{
    var InputData=document.getElementById("user").value
    usermessage=InputData
    InputData.innerHTML=""
    if(!usermessage) return;
    base[0].append(createChatData(usermessage,'users'))
    setTimeout(()=>{
        const botchat=createChatData('Thinking...','bot')
        base[0].append(botchat)
        generateResponse(botchat)
    })
}




function chatbotclose(){
    var chatbot=document.getElementById('foropen')
    var bot=document.getElementById('afteropen')
    chatbot.style.display="none"
    bot.style.display="block";
   
}
function chatbotopen(){
    var chatbot=document.getElementById('foropen')
    var bot=document.getElementById('afteropen')
    chatbot.style.display="block"
    bot.style.display="none";
    var base=document.getElementById("chatmessage")
    var botchat=document.createElement("div")
    base.appendChild(botchat)
    botchat.style.padding="25px 0px 10px 25px";
}

