const inputValue = document.getElementById("input");
let finalResult;
let reply;
const messagesContainer = document.getElementById("messages");
  

document.addEventListener("DOMContentLoaded", () => {
    inputValue.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputValue.value;
        inputValue.value = "";
        output(input);
      }
      
    });
  });
  
  function output(input) {
  
    // Regex remove non word/space chars
    // Trim trailing whitespce
    // Remove digits - not sure if this is best
  
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    
    text = text
      .replace(/ a /g, "")   // replaces 'tell me a story' to 'tell me story'
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is") // replaces "whats" to "what is"
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you"); //replaces "r u" to "are you"
  
    if (compare(userTexts, botReplies, text)) { 
      // search for exact match in `userTexts`
      finalResult = compare(userTexts, botReplies, text);
    } else {
      // if everything else fails, bot produces a random alternative reply
      finalResult = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    // to update our HTML DOM element 
    addToChat(input, finalResult);
  }

  // function to match the bot's reply to a user's text
  function compare(userTexts, botReplies, text) { 
    for (let x = 0; x < userTexts.length; x++) {
      for (let y = 0; y < botReplies.length; y++){
        if (userTexts[x][y] == text) {
          let replies = botReplies[x];
          console.log(botReplies[x][y])
          reply = replies[Math.floor(Math.random() * replies.length)];
        } 
      }
    }
    return reply;
  }
  
  function addToChat(input, finalResult) {
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "response";
    userDiv.innerHTML = `<span>${input}</span><img src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1625055846/Movie%20booth/download_cwsons.png" alt="Robot cartoon" height="30px" width="30px">`;
    messagesContainer.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    let botImg = document.createElement("img");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botImg.src = "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1625055846/Movie%20booth/unnamed_yyh2zq.jpg";
    botImg.className = "avatar";
    botDiv.className = "bot response";
    botText.innerText = "Typing...";
    botDiv.appendChild(botImg);
    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
    // Keep messages at most recent
    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Fake delay to seem "real"
    setTimeout(() => {
      botText.innerText = `${finalResult}`;
    }, 2000
    )
  
  }
  

const userTexts = [
  
  ["Egypt air", "MS", "ms"],
  ["Flydubai", "FZ", "fz"],
  ["Emirates", "EK", "ek"],
  [" Fly nas", "xy", "XY"],
  ["Flyadeal", "f3", "adel"],
  
  ["Turkish Airlines", "TK", "tk"],
  ["KLM Royal Dutch", "Royal Dutch", "klm"],
  ["Royal Jordanian", "rj", "RJ", "Jordanian"],
  ["Air Maroc", "moroco", "Royal Air Maroc", "AT", "at"],
  ["Saudia", "sv", "Saudia arabia"],
  ["Etihad", "Etihad(KSA/DXB/KWI)", "ey", "EY"],
  ["pritch", "pa"],
  ["Air Arabia", "e5", "arabia"],
  [" Malaysia Airlines", "mh"],
  ["j9", "Jazeera", "jazera", "J9"],
  ["Air Asia", "Asia", "AK", "ak" , "asia"],
 
  ["Cebu Pacific", "CX", "cx", "cebu", "Pacific"],
  ["Indigo", "6E", "indg"],
  ["Spicejet", "SG", "Spicejet"],
  ["Salam Air", "OV", "ov"],
  ["AirIndia", "IX","ind"],

]
  

const botReplies = [
  
  [`<Baggage Info> https://www.egyptair.com/en/fly/baggage/Pages/baggage-allowance.aspx           
  <Contacts> https://www.egyptair.com/en/contact-us/Pages/WorldWideOffices.aspx`],

  [`<Baggage Info> https://www.flydubai.com/en/flying-with-us/baggage/check-in-baggage
  <contacts> https://www.flydubai.com/en/contact/
  <cancelation> Refundable From our side 
  <Amendment Policy> Amendable / Rerouting Not permitted 
  <Name Amendment> 1 letter only with airline via phone
  <No Show Time> Time frame 24 hours.
https://www.flydubai.com/en/plan/fare-types
`  ],
  



  [`<baggage>   https://www.emirates.com/eg/english/before-you-fly/baggage/checked-baggage/  
  
  <contacts> https://www.emirates.com/eg/english/help/offices/
  
  <Airport terminal> https://www.emirates.com/eg/english/before-you-fly/dubai-international-airport/emirates-terminal-3/
`],
  
  [`<NON REFUNDABLE> YR  Non refundable 
  <name Amend> Via Contacting the Airline 

  <no show> Time frame 4 hours ..Within 4 hours ticket

  non changeable non refundable.

  <NUMBER> 920001234 -Watsapp +966592001234 >   
  
    <package>  https://www.flynas.com/en/plan-my-trip/checked-baggage

    < PACAKGE > https://www.flynas.com/ar/travel/baggage 
    < EMAIL >  CSU@flynas.com   contactcenter@flynas.com
     <Covid19> CSU@flynas.com  
     contactcenter@flynas.com
      <Airport terminal> https://www.flynas.com/en/plan-my-trip/airports
`],
  
  [
    `<BAGGAGE> https://www.flyadeal.com/en/fly/hold-baggage     
  
  <CONTACTS> https://www.flyadeal.com/en/information/customer-service/contact-us/ 
  
  <AIRPORT TERMINAL> https://www.flyadeal.com/ar/information/fly/airport-information/
  `],


  
  [`Numbers < 966 800 811 0478  /  90 212 463 63 63 >  
  <baggage>  https://www.turkishairlines.com/en-eg/any-questions/free-baggage/
  <Email> https://www.turkishairlines.com/en-int/any-questions/customer-relations/ 
  <Covid19> https://www.turkishairlines.com/en-int/any-questions/customer-relations/`],
  



  [`Royal Dutch number <35722671616 >
  <Baggage info> < https://www.klm.com.cy/information/baggage/checked-baggage-allowance  > 
  <Email> < https://www.klm.us/contact >
  <Covid19> <https://www.klm.com/travel/jp_en/prepare_for_travel/up_to_date/coronavirus.htm `],
  



  [`YQ + YR   Non-refundable <phone>  962.6.5100000  
  <package inf < https://rj.com/ar/info-and-tips/baggage-information/carry-on-pieces > 
  Email < https://rj.com/en/contact-us/e-mail-us >
  Covid19 < https://rj.com/en/contact-us/e-mail-us >`],
  



  [`Royal moroco Non refundable TAXES  ( YQ - YR )
   phone Number : 966114774100  <package info > https://rj.com/en/info-and-tips/baggage-information/checked-luggage > 
    <Email>   callcenter@royalairmaroc.com 
     <covid19>  https://www.royalairmaroc.com/pt-en/covid-19-information-center `],

  [`Non refundable tax Saudia < E3 > 
  whats app : <  920022222 - 0540000002  >  < https://www.saudia.com/help/contact-us/call-centers > 
   Package info < https://www.saudia.com/travel-with-saudia/manage/web-check-in >  
   contact Email < smadmin@saudiairlines.com > 
    "Covid 19 < https://www.saudia.com/before-flying/travel-information/travel-requirements-by-international-stations#:~:text=Arriving%20guests%20for%20a%20period,from%20the%20date%20of%20arrival`],
  
  
  
  
  [`<Number> : < 800 844 7893 - 971 600 555666 - +97126177700  >
  <pag-inf> < https://www.etihad.com/en-eg/fly-etihad/baggage 
  <Contact Email> < adgetp@etihadguest.com>

  <contacts> :< https://www.etihad.com/en-eg/help/contact-us > 
 < Covid19> < https://www.etihad.com/en/travel-updates/all-destinations-travel-guides >
  <Airport-Terminal> https://www.etihad.com/en-eg/fly-etihad/airport-information
  <boarding> https://www.etihad.com/en/manage/check-in

  `],

  
  [`numbers :  966 92 000 2215 - 920002215 - 18002436822 
   <package info >  https://www.britishairways.com/en-gb/information/baggage-essentials/checked-baggage-allowances
    < EMAIL > https://www.britishairways.com/en-us/information/help-and-contacts/contact-us?aboutCountry=SA 
    https://www.britishairways.com/en-gb/information/incident/coronavirus/entry-requirements`],
  
  
  [`<number> 920011969 - +97165580000 –+96522254071 – 16278 

   < pacage info > https://www.airarabia.com/en/checked-baggage
  
   <Email> https://www.airarabia.com/en/contact-us
  
  <Cancellation Policy> Credit shell & new booking from our side  

  <Amendment Policy> Amendable & Rerouting permitted 

  <Name Amendment> Permitted/ Full name 
  Note: 24 H prior to the original departure  
  
<No Show Time>		1st Scenario 72H. 
2nd Scenario24H. non changeable non refundable

<Website> https://www.airarabia.com/ar/modify-flight
`
  ],
  
  
  
  [`<phone  +201401040794  > 
   <baggage> https://www.malaysiaairlines.com/my/en/plan-your-trip/baggage/checked-baggage.html 
   <email> https://malaysia-airlines.pissedconsumer.com/sendEmail.html?group=Customer%20Service
   <covid19> https://www.malaysiaairlines.com/hq/en/advisory/travel-information.html"`],
 
  [`<Cancellation Policy> From our side & amount will be credit shell with airline 
  
  <Amendment Policy>  Amendable / Rerouting Not permitted 
  
  <Name Amendment> With Airline 
  
  <No Show Time> Time frame 24 hours for Cancellation and

  Amendable for 08 hours Within this no show filght
  non Changeable Non Refundable.

  <Contacts>	Kuwait: 177 - KSA: 800 844 5859 - Whatsapp: 965 6222 1770

<website>https://www.jazeeraairways.com/ar-eg#manage-booking

  `],
  [`<cancelation policy> Non-Refundable all tickets  
<Amend Date > Amendable / Rerouting Not permitted 
<Name Amendment> 	Amend name via chat or Email with airline with copy of passport
<No Show Time > Time frame 48 hours ..within 48 hours flight Non-Changeable.
<contacts > USA: 18447274588 - India : +9180 4666 2222
<website > https://support.airasia.com/s/entry-restrictions?language=en_GB
  `],
  
  [
    `<cancelation> From our side & amount will be credit shell with airline
    
    <Amendment policy > Amendable / Rerouting Not permitted
    <Amend Name> Not Allowed
    <No show time >Changes allowed but must be done not less than
( 8 ) hours before departure check-in / 7 days before
flight until 1 hour for domestic until 4 hour for international flight.  
<contacts> Manila: +63322308888 - UAE : +971 45086777
<website>https://book.cebupacificair.com/Manage/Retrieve
    `
  ],
  [
 `<cancelation> 	Refundable From our side & new booking from website
    
    <Amendment policy > Amendable / Rerouting Not permitted
<Amend name>  Amend 1 letter with airline via phone / Chat

    <No show time > Any Action must be taken 2 H prior to departure in
Domestic flights and 4 H in International flights


<contacts> India: +910 124 435 2500 - UAE: +971 43557355

<website>https://www.goindigo.in/edit-booking.
html?linkNav=edit-booking_header
    `
  ],
  
  [
 `<cancelation> Refundable From our side
Team Leaders only can take the action



    <Amendment policy > Amendable & Rerouting permitted
Team Leaders only can take the action

<Amend name> Amend 1 letter with airline via phone

    <No show time > Time frame 08 hours ..
Within 08 hours flight non changeable non refundable.


<contacts> 	India: +919871803333 - UAE:+97143965186- KSA: 920019077

<website> https://book.spicejet.com/Search.aspx?op=5

    `
  ],
  

  [
 `<cancelation> Refundable From our side


    <Amendment policy > Amendable / Rerouting Not permitted


<Amend name> Contact the Airline Via Phone

    <No show time > Time frame 24 hours ..
Within 24 hours flight non changeable non refundable.

<contacts> 	Oman: +96824272222 - UAE: +971 42255777

<website> https://www.salamair.com/en/


    `
  



  ],
  
  [`
  <cancelation>Refundable From our side
  
  <Amend Date> Amendable / Rerouting Not permitted
  
  <Name Amend> With Airline
  
  <No Show> Time frame 24 hours ..within 24 hours flight ticket
non changeable non refundable.

<contacts> India: +91 44400 13001 - KSA: +966 11477 2228 - Dubai: +971 4207 9444

<website> https://www.airindiaexpress.in/en/manage/manage-booking
`]





];
const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "I don't understand :/"
]











