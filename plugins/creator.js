import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 𝑷𝒆𝒎𝒊𝒍𝒊𝒌 𝑩𝒐𝒕`, `ℱ𝑒𝓇𝒹𝓎 ℱ𝒾𝓇𝓂𝒶𝓃𝓈𝓎𝒶𝒽`, `ferrjb146@gmail.com`, `🇮🇩 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂`, `📍 https://github.com/frdy19`, `👤 𝑶𝒘𝒏𝒆𝒓 𝑳𝒆𝒐𝒏𝑩𝒐𝒕`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🎈 𝑩𝒐𝒕 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑`, `📵 𝑫𝒐𝒏𝒕 𝑺𝒑𝒂𝒎/𝑪𝒂𝒍𝒍 𝑴𝒆 😢`, `𝑵𝒐𝒕𝒉𝒊𝒏𝒈`, `🇮🇩 𝑰𝒏𝒅𝒐𝒏𝒆𝒔𝒊𝒂`, `𝑮𝒓𝒐𝒖𝒑 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍 𝑩𝒐𝒕 https://chat.whatsapp.com/FQH6CI63LJCBTySzClHrrg `, `𝑯𝒂𝒏𝒚𝒂 𝑩𝒐𝒕 𝒃𝒊𝒂𝒔𝒂 𝒚𝒂𝒏𝒉 𝒌𝒂𝒅𝒂𝒏𝒈 𝒔𝒖𝒌𝒂 𝒆𝒓𝒓𝒐𝒓 ☺`]
  ], fkontak)
  /*const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })*/
let caption = `👋 𝑯𝒂𝒍𝒍𝒐 *@${who.split("@")[0]}*, 𝑴𝒚 𝑶𝒘𝒏𝒆𝒓\n円 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑲𝒂𝒍𝒂𝒖 𝑪𝒉𝒂𝒕\n円 𝑻𝒊𝒅𝒂𝒌 𝒅𝒊𝒃𝒂𝒍𝒂𝒔?𝑳𝒂𝒈𝒊 𝑺𝒊𝒃𝒖𝒌\n円 𝑻𝒊𝒅𝒂𝒌 𝑴𝒆𝒏𝒆𝒓𝒊𝒏𝒂 𝑪𝒉𝒂𝒕 𝑨𝒏𝒆𝒉 (𝑩𝒍𝒐𝒄𝒌)\n円 𝑺𝒂𝒗𝒆?𝑺𝒆𝒃𝒖𝒕 𝑵𝒂𝒎𝒂+𝑨𝒔𝒌𝒐𝒕`
    await conn.sendButton(m.chat, caption, author, null, [['👨 𝑺𝒂𝒑𝒂 𝑶𝒘𝒏𝒆𝒓', 'bilek']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
  } 
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
