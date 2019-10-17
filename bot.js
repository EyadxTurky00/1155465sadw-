var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();







client.on("message", msg => {
    var prefix = '_'//البركفس
    if(msg.content.startsWith(prefix + 'myguild')){
      let embed = new Discord.RichEmbed()
      .setThumbnail(msg.guild.iconURL)
      .setColor("RANDOM")
      .addField("Year📆",msg.guild.createdAt.getFullYear())
      .addField("Hour📆", msg.guild.createdAt.getHours())
      .addField("Day📆", msg.guild.createdAt.getDay())
      .addField("Month📆", msg.guild.createdAt.getMonth())
      .addField("Minutes📆", msg.guild.createdAt.getMinutes())
      .addField("Seconds📆", msg.guild.createdAt.getSeconds())
      .addField("Full📆", msg.guild.createdAt.toLocaleString())
      .setTimestamp()
      msg.channel.send(embed);
    }
  });






client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
  :crown:اسم العضو  ${member}:crown:  
  انت العضو رقم ${member.guild.memberCount} `) 
  }).catch(console.error)
  })




client.on('message', message => {
  let args = message.content.split(" ")
  if (args[0].toLowerCase().startsWith(prefix+'roles')) {
    let str = "";
    var role = message.guild.roles.forEach(role => {
      str +=" "+role.name+'\n'
    })
    message.channel.send(`\`\`\`${str}\`\`\``)
  }
})



client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"top-servers")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});



client.on('message', message => {///////Abdellhadi
const prefix = '_'	///////Abdellhadi
    if(message.content === prefix + 'creatcolores') {///////Abdellhadi
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
						 //// حقوق سيرفر كودز 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",///////Abdellhadi
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })///////Abdellhadi
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",///////Abdellhadi
                    permissions: []
     })///////Abdellhadi
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",///////Abdellhadi
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",///////Abdellhadi
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",///////Abdellhadi
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",///////Abdellhadi
                    permissions: []
     })
                     message.guild.createRole({///////Abdellhadi
                  name: "12",
                    color: "#BA55D3",
                    permissions: []///////Abdellhadi
     })
                     message.guild.createRole({///////Abdellhadi
                  name: "13",
                    color: "#9932CC",
                    permissions: []///////Abdellhadi
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",///////Abdellhadi
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []///////Abdellhadi
     })
                               message.guild.createRole({
                  name: "16",///////Abdellhadi
                    color: "#8B008B",
                    permissions: []
     })///////Abdellhadi
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",///////Abdellhadi
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",///////Abdellhadi
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })///////Abdellhadi
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#FF0000",
                    permissions: []
     })///////Abdellhadi
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })///////Abdellhadi
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "35",
                    color: "#FF7F50",
                    permissions: []///////Abdellhadi
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "36",
                    color: "#FF6347",///////Abdellhadi
                    permissions: []
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "37",
                    color: "#FF4500",
                    permissions: []///////Abdellhadi
     })
                                         message.guild.createRole({
                  name: "38",///////Abdellhadi
                    color: "#FFD700",///////Abdellhadi
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",///////Abdellhadi
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",///////Abdellhadi
                    permissions: []
     })
                                         message.guild.createRole({///////Abdellhadi
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })     

     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``الالوان قيد الانشاء ....``')});
    }
	});





client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var prefix = "_";
  if(msg.content.startsWith(prefix + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});


client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = '_'

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "424811279497297940") return;

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/peery13");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 
if (message.content.startsWith(prefix + 'setgame')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 



});
const moment = require('moment')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`_help `,`_inv`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);100000

});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
         ------------------------------
         _bc1 : برودكاست لجميع اعضاء السيرفر بايمبد
         _bc2 : برودكاست لجميع اعضاء السيرفر بدون ايمبد
         _bc3 : برودكاست للاعضاء  الاونلاين فقط
         ------------------------------
         _id : عرض ملفك الشخصي
         _ask : البوت يسئلك اسئلة
         _server : احصائيات 
		 _creatcolores : لأنشاء الالوان
		 _myguild : عرض ملفك الشخصي نطور
         ------------------------------
         _ban : حظر العضو من السيرفر
         _kick : طرد العضو من السيرفر
         _clear : مسح الشات
         _createroles : عمل رتب متكاملة للسيرفر
		 _roles : اظهار رتب السيرفر
         _voicesetup : انشاء روم فويس اونلاين
         لكتابة الكلام الذي في الروم اكتب _voicesetup الكلام و 0 
         ------------------------------
         _guilds : عدد سيرفر البوت
         _inv : دعوه البوت الى سيرفر
         _help : عرض هذه الرسالة
         ------------------------------
		 مبرمج البوت : EyadxTurky#7511
         
       **  `)
   message.author.sendEmbed(embed)
   
   }
   });  
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
    var prefix = "_"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
client.on('message', message => {
    if (message.content.startsWith("_avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
client.on('message', message => {
if (message.content.startsWith("kick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});
client.on('message', message => {
if (message.content.startsWith("ban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});
client.on('message', message => {
  if (true) {
if (message.content === '_inv') {
      message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=449359611036827663&permissions=8&scope=bot').catch(e => console.log(e.stack));

    }
   } 
  });


client.on('message', message => {
     if (message.content === "_inv") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc1') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on('message', message => {
    if (message.content == "_ask") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
		var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})
client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc2') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc3")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.size}\`\``);
   } 
});
//========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "users")) {
       message.channel.send(`Users: \`\`${client.users.size}\`\``);
   } 
});
//=========================================================
client.on('message',function(message) {
   if(message.content.startsWith(prefix + "channels")) {
       message.channel.send(`channels: \`\`${client.channels.size}\`\``);
   } 
});
client.on('message', message => {
    if (message.content === "_createroles") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "| 𝑭𝑶𝑼𝑵𝑫𝑬𝑹⚜️", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑪𝑶 𝑭𝑶𝑼𝑵𝑫𝑬𝑹✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑬𝑿𝑬𝑪𝑼𝑻𝑰𝑽𝑬✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑴𝑨𝑺𝑻𝑬𝑹✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑪𝑶𝑵𝑻𝑹𝑶𝑳𝑳𝑬𝑹✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑯𝑬𝑨𝑫 𝑨𝑫𝑴𝑰𝑵✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑺𝑼𝑷𝑬𝑹 𝑨𝑫𝑴𝑰𝑵✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑨𝑫𝑴𝑰𝑵✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑺𝑼𝑷𝑬𝑹 𝑽𝑰𝑺𝑶𝑹✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑻𝑹𝑰𝑨𝑳✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑴𝑶𝑫✨", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "| 𝑻𝑹𝑼𝑺𝑻𝑬𝑫✨", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "| | 𝑺𝑼𝑷𝑷𝑶𝑹𝑻✨", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "| الادارة ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "ـــــــــــــــــــــــــــــــــــــــــــــــــــ", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "👑 ‎ مـلـك الـدولـة 👑", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "ـــــــــــــــــــــــــــــــــــــــــــــــــــ", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🗽 𝑨𝑫𝑴𝑰𝑵𝑺 𝑴𝑨𝑵𝑨𝑮𝑨𝑹", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🚫 𝑩𝑨𝑵𝑵𝑬𝑫 𝑴𝑨𝑵𝑨𝑮𝑨𝑹🚫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "💸مسؤول التعويض💸", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "ـــــــــــــــــــــــــــــــــــــــــــــــــــ", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🖉مصمم السيرفر ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🛠مبرمج السيرفر  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🛠مبرمج الدسكورد  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "ـــــــــــــــــــــــــــــــــــــــــــــــــــ", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "⭐⭐⭐ وزير الداخلية ⭐⭐⭐", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐⭐ نائب وزير الداخلية ⭐⭐", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "👮 مسؤول الشرطة ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "👮مسؤول مقابلات الشرطة ⭐", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "👮منسوبي وزارة الداخلية ⭐ ⭐", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "👮مسؤول تدريبات الشرطة ⭐", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K17-👮فريق اول ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K16-👮فريق ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K15-👮لواء ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K14-👮عميد ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K13-👮عقيد ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K12-👮مقدم ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K11-👮رائد ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K10-👮نقيب ⭐↫", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "⭐ K9-👮ملازم اول ⭐↫", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "⭐ K8-👮ملازم ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K7-👮رئيس رقباء ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "👑⭐ K6-👮وكيل رقيب ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K5-👮رقيب اول ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K4-👮رقيب ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K3-👮عريف ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K2-👮جندي اول ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐ K1-👮جندي ⭐↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "👮جندي تحت التدريب ⭐", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐⭐", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "⭐⭐⭐", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "⭐⭐⭐⭐ ⭐⭐⭐", color: "#ffffff", permissions: [] })
					 message.guild.createRole({ name: "ـــــــــــــــــــــــــــــــــــــــــــــــــــ", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 وزير الصحة  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 نائب وزير الصحة  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 مدير المستشفى  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥مسؤول الترقيات🏥", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥مسؤول النقاط🏥", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥مسؤول المكافئات🏥", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥مسؤول المقابلات🏥", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🚑منسوبي وزارة الصحة 👨‍⚕️", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥مدرب معتمد🏥", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🚁مسعف طيار🚁", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 بروفيسور  ↫", color: "#ffffff", permissions: [] })
		             message.guild.createRole({ name: "🏥 استشاري  ↫", color: "#ffffff", permissions: [] })
		             message.guild.createRole({ name: "🏥 اخصائي  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 دكتور  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 ممرض  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 مسعف  ↫", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "🏥 مسعف تحت التدريب  ↫", color: "#ffffff", permissions: [] })
                    

message.channel.sendMessage('** الرجاء الانتظار جاري انشاء الرتب **')
}
});


      client.on('message', async message => {
  if(message.content.startsWith(prefix + "voicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});
client.on("guildMemberAdd", member => {
        if(member.guild.id === "625497592284971022") {  // ايدي السيرفر
  const channel = member.guild.channels.find('id', '625508515653484587'); //ايدي الروم
if (!channel) return;
channel.send(`**<@${member.user.id}> Welcome To __PowerTeam__  ** ❤️ `)  
}});
client.on("guildMemberRemove", member => {
        if(member.guild.id === "625497592284971022") { 
  const channel = member.guild.channels.find('id', '625508515653484587'); 
if (!channel) return;
  channel.send(`**${member.user.tag} Left The Server  ** 😭 `) 
}});
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member")); //اسم ا��رتبة
    });
client.login('token');
