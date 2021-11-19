const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID)

const sendwelcomeemail = (email,name)=>{
    sgMail.send({
    to:email,
    from:'add1ct3dsoul@gmail.com',
    subject:'Thanks for joining us',
    text:`Welcome to the app ${name}. Let me know how you like our app.`
    })
}

const byeemail = (email,name)=>{
    sgMail.send({
        to :email,
        from:'add1ct3dsoul@gmail.com',
        subject:'Thankyou for trying our application out',
        text:`It was great having you ${name}. Please tell us some changes we can make.`
    })
}

module.exports = {
    sendwelcomeemail,
    byeemail
}