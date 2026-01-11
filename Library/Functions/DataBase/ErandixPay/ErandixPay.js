export const ERANDIXPAY=(KEY,SECRET,SITE,AMOUNT,DETAILS,PHONE,callBack)=>{

    const DATA={
        consumer_key: KEY,
        consumer_secret: SECRET
    };

    CLOUDPOST(TOKENIZATIONLINK,DATA,(data)=>{

        const DATAONE={
            site: SITE,
            token: data.token
        };

        CLOUDPOST(IPNIZATIONLINK,DATAONE,(dataOne)=>{

            const DATATWO={
                token: data.token,
                id: 'ORDER_UGX_1001',
                amount:AMOUNT,
                description: DETAILS,
                callback_url: SITE,
                notification_id: dataOne.ipn,
                billing_address: {
                email_address: '',
                phone_number: PHONE,
                first_name: '',
                last_name: ''
                }
            };

            CLOUDPOST(SUBMIZATIONLINK,DATATWO,(dataTwo)=>{

                callBack(dataTwo);

            });

        });

    });

};