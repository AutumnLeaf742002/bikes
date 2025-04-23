export const validateMail = (mailText = "")=>{

    const mailList = [
        "@gmail",
        "@hotmail",
        "@outlook",
    ]
    const pointList = [
        ".com",
        ".es",
        ".org",
    ]

    const hasValidMail = mailList.some(mail => mailText.includes(mail))
    const hasValidPoint = pointList.some(point => mailText.includes(point))

    return hasValidMail===true&&hasValidPoint===true
}