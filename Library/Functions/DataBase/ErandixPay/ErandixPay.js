export const ERANDIXPAY=(KEY,SECRET,callBack)=>{

    const DATA={
        consumer_key: KEY,
        consumer_secret: SECRET
    };

    CLOUDPOST(TOKENIZATIONLINK,DATA,(data)=>{

        callBack(data);

    });

};