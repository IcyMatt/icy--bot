const discord = require ('discord.js');

var client = new discord.Client();

const token = "NDg0ODQ5NTY4NTY0MTE3NTA0.DnHrBA.JYQ5IFnoBdHWJli3Fi51ct05j8s";

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setActivity ("Having an Existential Crysis");
});

const prefix = "icy";
client.on ("message", (message) => {

    if (message.author.bot) return;

    msg = message.content.toLowerCase();

    if (msg.startsWith (prefix + " cringe")) {
        message.channel.send ('This command will be ready whenever Matt will fucking code it.');
    }

    timeout = 3000;
    if(msg.startsWith (prefix + " top tsundere")) {
        message.channel.send ('Calculating the top three tsunderes...');

        setTimeout(() => {
            message.channel.send ('The top three tsunderes are:\nGiulia;\nGiulia and\nGiulia!');
        }, timeout);
    }

    if (msg.startsWith (prefix + " scrivi")) {
        message.delete ();
        editedmessage = message.content.slice (11);

        message.channel.send (editedmessage);
    }

    if (msg.startsWith (prefix + " is " + message.mentions.members.first() + " a tsundere?")) {
        if (message.mentions.members.has("378972055434952706")) {
            chance = 8;
            var random = Math.floor (Math.random () * (chance - 1 + 1)) + 1;
            switch (random) {
                case 1: message.channel.send ('abso-fucking-lutely yes.'); break;
                case 2: message.channel.send ('I\'m pretty sure not.'); break;
                case 3: message.channel.send ('Maybe not, probably yes but hiding it.'); break;
                case 4: message.channel.send ('Did you have any doubts?'); break;
                case 5: message.channel.send ('No, not really.'); break;
                case 6: message.channel.send ('We both know who we\'re talking about.'); break;
                case 7: message.channel.send ('We both know who we\'re talking about.'); break;
                case 8: message.channel.send ('We both know who we\'re talking about.'); break;
            }
        } else if (message.mentions.members.has("326001219619258379")) {
            chance = 8;
            var random = Math.floor (Math.random () * (chance - 1 + 1)) + 1;
            switch (random) {
                case 1: message.channel.send ('abso-fucking-lutely yes.'); break;
                case 2: message.channel.send ('I\'m pretty sure not.'); break;
                case 3: message.channel.send ('Maybe not, probably yes but hiding it.'); break;
                case 4: message.channel.send ('Did you have any doubts?'); break;
                case 5: message.channel.send ('No, not really.'); break;
                case 6: message.channel.send ('Oh obviously not, she\'s my favourite yandere after all!'); break;
                case 7: message.channel.send ('Oh obviously not, she\'s my favourite yandere after all!'); break;
                case 8: message.channel.send ('Oh obviously not, she\'s my favourite yandere after all!'); break;
            }
        } else {
            chance = 5;
            var random = Math.floor (Math.random () * (chance - 1 + 1)) + 1;
            switch (random) {
                case 1: message.channel.send ('abso-fucking-lutely yes.'); break;
                case 2: message.channel.send ('I\'m pretty sure not.'); break;
                case 3: message.channel.send ('Maybe not, probably yes but hiding it.'); break;
                case 4: message.channel.send ('Did you have any doubts?'); break;
                case 5: message.channel.send ('No, not really.'); break;
        }
    }
    }

    disgusting1 = "./disgusting/disgusting1.gif"; disgusting2 = "./disgusting/disgusting2.png"; disgusting3 = "./disgusting/disgusting3.png";
    if (msg.startsWith ("disgusting")) {
        message.delete ();
        number = 7;
        var random = Math.floor (Math.random () * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted!', { files: [disgusting1] }); break;
            case 2: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: [disgusting2] }); break;
            case 3: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: [disgusting3] }); break;
            case 4: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: ["./disgusting/disgusting4.gif"] }); break;
            case 5: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: ["./disgusting/disgusting5.jpg"] }); break;
            case 6: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: ["./disgusting/disgusting6.jpg"] }); break;
            case 7: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: ["./disgusting/disgusting7.png"] }); break;
            case 8: message.channel.send ('Ugh, ' + message.author.username + ' is disgusted.', { files: ["./disgusting/disgusting8.jpg"] }); break;
        }
    }

    if (msg.startsWith (prefix + ' roll a d4')) {
        var d4 = ["1","2","3","4"];
        var random = Math.floor (Math.random () * 4);
        message.channel.send ('You rolled ' + d4[random]);
    } else if (msg.startsWith (prefix + ' roll a d6')) {
        var random = Math.floor (Math.random () * 6) + 1;
        message.channel.send ('You rolled ' + random);
    } else if (msg.startsWith (prefix + ' roll a d8')) {
        var random = Math.floor (Math.random () * 8) + 1;
        message.channel.send ('You rolled ' + random);
        if (random === 8) {
            setTimeout(() => {
                message.channel.send ('8oy, you got all the luck! All of it!!!!!!!!');
            }, 1000);
        }
    } else if (msg.startsWith (prefix + ' roll a d10')) {
        var random = MAth.floor (Math.random () * 10) + 1;
        message.channel.send ('You rolled ' + random);
    } else if (msg.startsWith (prefix + ' roll a d12')) {
        var random = Math.floor (Math.random () * 12) + 1;
        message.channel.send ('You rolled ' + random);
    } else if (msg.startsWith (prefix + ' roll a d20')) {
        var random = Math.floor (Math.random () * 20) + 1;
        message.channel.send ('You rolled ' + random);
        if (random === 1) {
            setTimeout(() => {
                message.channel.send ('Critical Failure, damn.');
            }, 1000);
        } else if (random === 20) {
            setTimeout(() => {
                message.channel.send ('Jesus fucking Christ that\'s a Critical Success.');
            }, 1000);
        }
    } else if (msg.startsWith (prefix + ' roll a d%')) {
        var random = Math.floor (Math.random () * 10) + 1;
        var dadoper = Math.floor (Math.random () * 10) + 1;
        var dadop = ["00","10","20","30","40","50","60","70","80","90"];
        message.channel.send ('You rolled ' + dadop[dadoper] + ' and ' + random);
    }

});

client.login (token);