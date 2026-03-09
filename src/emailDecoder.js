export function decode(hex) {
  const key = parseInt(hex.slice(0, 2), 16)
  let email = ""
  for (let i = 2; i < hex.length; i += 2) {
    const byte = parseInt(hex.slice(i, i + 2), 16)
    email += String.fromCharCode(byte ^ key)
  }
  return email
}
export default decode;
//=========================================================================================================
// Cloudflare encrypts emails to prevent scraping. This function decodes them.
// CF just XORs each byte with a key (the first byte of the hex string) to obfuscate the email address.
//  This function reverses that process to reveal the original email.
// THIS IS AN ATTEMPT TO DECODE CF-OBFUSCATED EMAILS. IT MAY NOT WORK IN ALL CASES, 
// BUT IT SHOULD WORK FOR MOST COMMONLY ENCODED EMAILS.
// =============================================================================================================