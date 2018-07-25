let referenceId = 'f27tDoSzrdY:APA91bHxN2fhIbPFjv_RTEBkK1A5RCmk1pdiV8YeI5rjo9QvSqyTm5LzhudscMwD-24dLaysY8_luIDj9Y9WONGuQKk6WS-dtFQqDriNoABRRXiSbdRlK2_NbGuNMcuZVkirbE8W1dDeiMj8yNLcjaqso_KXbixiQg';
let serverKey = 'AAAAy5M72QY:APA91bFkfqr51-iHp-UHASFs2gcq9XxOQYIANU2NGxMe5em02B1fnoP9TtJpg5I_3d7BTxhEI44sp6zqtGn1SDtforyKNhEShuUOB9-AuzuolA20MboNE39KE-9S2bUC25HaFPbtcDLb';
let title = 'Compressed FCM';
let body = 'Body Of FCM';

function FCM(serverKey, referenceId, title, body, message=null){
    //Author: Mayur N. Chhapra
    const FCM = require('fcm-node');
    let fcm = new FCM(serverKey);
    message !== null?
        message :
        message = { 
            "to": referenceId,
            "notification": {
                "title": title, 
                "body": body,
                "sound": true,
                "alert": true,
            }
        };
    fcm.send(message, function(err, response){
        if (err) {
            console.log(err);
            console.log("Something has gone wrong!");
        } else {
            console.log('______________________________________');
            console.log('Firebase Cloud Messaging. . .');
            console.log("Successfully sent with response: ", response);
            console.log('______________________________________');
        }
    });
}

FCM(serverKey, referenceId, title, body);


