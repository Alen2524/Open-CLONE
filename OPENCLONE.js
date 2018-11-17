/**
 * Send a user a link to their avatar
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
prifix = 클론
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix '아바타 보여줘') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === '입퇴장');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(` ${member}님. 저희 서버에 오신것을 환영합니다. `);
});
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('클론, 추방')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('추가적 이유는 서버 기록에 기록됩니다.').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(` ${user.tag}님을 성공적으로 추방하였습니다.`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('저는 유저를 추방할 권한이 없어요.....');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('추방할 유저는 현재 이 서버에 없어요. :slight_frown: ');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('추방 할 유저를 멘션 해 주세요.');
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('클론, 차단')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: '나쁜짓 함 ㅇㅇ',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(` ${user.tag}님을 성공적으로 차단하였습니다.`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('저는 유저를 차단할 권한이 없어요.....');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply(' 차단할 유저는 현재 이 서버에 없어요. :slight_frown:');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('차단할 유저를 멘션해주세요.');
    }
  }
});

client.on('message', message => {
  
if(!message.guild) return;
  if (message.content === '클론, 1') {
    if (message.member.voiceChannel) {  //보이스 채널에 들어왔는지 확인
      message.member.voiceChannel.join().then(connection => {
          message.reply('네. Windows 7의 샘플뮤직 중 하나인 Sleep Away를 재생합니다.');
          const dispatcher = connection.playFile('Sleep Away.mp3'); //보이스 채널에서 재생하실 소리 위치를 입력
        })
        .catch(console.log);
    } else {
      message.reply('먼저 음성 채널에 입장해 주세요!');
    }
 }
  if (message.content === '클론, 안녕?') {
    message.reply('저희 CLONE-NGEN를 채택해주셔서 감사합니다! CLONE-NGEN은 CLONE과 CLONE-FSM이 통합되고, 여러 새로운 기능이 추가된 기존의 CLONE보다 **새로운 세대!**(**N**ew **gen**eration) 봇입니다. 도움말을 보여드리겠습니다.```클론, 안녕?/클론, 잘 가/클론, 아바타 보여줘/클론, 추방 (유저멘션)/클론, 차단 (유저멘션)/클론, 핑!/클론, 업데이트 내역/클론, 초기설정/클론, 뭐해?/클론, 나 심심해/클론, 오늘 날씨 어때?/클론, 막장 동화 읽어줘/클론, 초대링크/클론, 게임추천/클론, 점검일자/클론, 막장 뉴스 알려줘/클론, NGEN을 제외한 클론봇들은?``` 기능을 더 넣을까요? https://discord.gg/PbUQmJk 에서 제안해 주세요!');
  }
  if (message.content === '클론, 초기설정') {
    message.reply('CLONE의 입장알림 기능은 **입퇴장** 이라는 텍스트 채널에 기록됩니다. **반드시 입퇴장 채널을 만들어 주세요.** 이외에도, CLONE은 자신과 역할 **권한**, 또는 **등급이 같거나 높은 유저**는 **차단 및 추방이 불가능 합니다.** **반드시 알맞은 역할을 부여하여 주세요.** 재즈 재생기능을 이용할려면, 음성채널이 **꼭** 있어야 합니다. ');
  }
  if (message.content === '클론, 잘 가') {
    message.reply('안녕히가세요');
    message.reply('https://cdn.discordapp.com/attachments/508159591092322308/509394011157692426/IMG_1655.PNG ');
  }
  if (message.content === '클론, 뭐해?') {
    message.reply('뭐하긴 말하지');
  }
  if (message.content === '클론, 나 심심해') {
    message.reply('농담 드릴까요? 사람을 짜증나게 하는데는 두가지가 있는데, 첫째는 하다가 말을 끝내');
  }
  if (message.content === '클론, 오늘 날씨 어때?') {
    message.reply('비올 확률은 0~100%이고 맑거나 흐리거나 비오겠습니다.');
  }
  if (message.content === '클론, 막장 동화 읽어줘') {
    message.reply('옛날옛날에 아~주 옛날에 공주가 살고 있었어요. 그러나 **죽었어** 역병에 걸리고 만거야.');
  }
  if (message.content === '클론, 게임추천') {
    message.reply('스팀에서 게임을 찾고 지갑을 포기하세요! ~~연쇄할인마의 습격~~');
  }
  if (message.content === '클론, 끝말잇기하자') {
    message.reply('좋아요! 제가 먼저 시작할께요! 마귀광대버섯!');
  }
  if (message.content === '클론, ㅎㅇ') {
    message.reply('오냐');
  }
  if (message.content === '클론, 핑!') {
    message.channel.send('퐁?').then(function(ping) {
    ping.edit(`퐁! ${ping.createdTimestamp - message.createdTimestamp}ms가 소요되었습니다.`)
  })
  }
  
  

 












  


  

 
});







// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('Your token!');
