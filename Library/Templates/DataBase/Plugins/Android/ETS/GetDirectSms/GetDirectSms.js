export const onIncomingSms=(from,message)=>{

    const text ="📩 Incoming SMS\n\n" +"From: " + from + "\n\n" +message;

    showResult(text);

};