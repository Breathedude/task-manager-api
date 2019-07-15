const sgMail = require('@sendgrid/mail')

const sendgridApiKey = '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'

//sgMail.setApiKey(process.env.Sendgrid_API_KEY)

// sgMail.send({
//     to: 'akhilatalanjeri@gmail.com',
//     from : 'rachithabayar@gmail.com',
//     subject:'Subject',
//     text:'This is the body of the mail'
// }) 



const sendEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from : 'rachithabayar@gmail.com',
        subject:'Hello!!',
        text:'Welcome! ${name}.Enjoy!!'
    })
   
}

const exitEmail = (email,name)=>{
    sgMail.send({
        to: email,
        from : 'rachithabayar@gmail.com',
        subject:'Bye!!',
        text:'Bye ${name}.Enjoy!!'
    })
   
}

module.exports = {
    sendEmail,
    exitEmail
    
}