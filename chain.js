const fs = require('fs');

var TITLES = [
  'What the fuck did you just fucking say about me, you little bitch?',
  'I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills.',
  'I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target.',
  'I will wipe you the fuck out with precision the likes of which ha never been seen before on this Earth, mark my fucking words.',
  'You think you can get away with saying that shit to me over the Internet? Think again, fucker.',
  'As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot.',
  'The storm that wipes out the pathetic little thing you call your life.',
  'You’re fucking dead, kid.',
  'I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands.',
  'Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit.',
  'If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue.',
  'But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot.',
  'I will shit fury all over you and you will drown in it.',
  'You’re fucking dead, kiddo.',

  'I don’t give a fuck who you are or where you live.',
  'You can count on me to be there to bring your fucking life to a hellish end.',
  'I’ll put you in so much fucking pain that it’ll make Jesus being nailed to a cross in the desert look like a fucking back massage on a tropical island.',
  'I don’t give a fuck how many reps you have or how tough you are IRL, how well you can fight, or how many fucking guns you own to protect yourself.',
  'I’ll fucking show up at your house when you aren’t home.',
  'I’ll turn all the lights on in your house, leave all the water running, open your fridge door and not close it, and turn your gas stove burners on and let them waste gas.',
  'You’re going to start stressing the fuck out, your blood pressure will triple, and you’ll have a fucking heart attack.',
  'You’ll go to the hospital for a heart operation, and the last thing you’ll see when you’re being put under in the operating room is me hovering above you, dressed like a doctor.',
  'When you wake up after being operated on, wondering what ticking time bomb is in your chest waiting to go off.',
  'You’ll recover fully from your heart surgery.',
  'And when you walk out the front door of the hospital to go home I’ll run you over with my fucking car out of no where and kill you.',
  'I just want you to know how easily I could fucking destroy your pathetic excuse of a life, but how I’d rather go to a great fuckng length to make sure your last remaining days are spent in a living, breathing fucking hell.',
  'It’s too late to save yourself, but don’t bother committing suicide either… I’ll fucking resuscitate you and kill you again myself you bitch-faced phaggot.',
  'Welcome to hell, population: you.',

  'What the fuck did you just fucking say about Navy Seal copypastas, you little newfag? I’ll have you know they\'ve ranked top out of all the comments on the Internet, and they have been translated in numerous contexts on 4chan, and have over 300 confirmed variants.',
  'Navy Seal copypastas are trained in memetic warfare and are the top copypasta in the entire circlejerk arsenel.',
  'You are nothing to them but just another target.',
  'They will wipe you the fuck out with precision the likes of which has never been seen before on this subreddit, mark my fucking words.',
  'You think you can get away with saying that shit about Navy Seal copypastas over the Internet? Think again, fucker.',
  'As we speak this copypasta is contacting it\'s secret network of /b/tards across the USA and your IP is being doxxed right now so you better prepare for the storm, maggot.',
  'The storm that wipes out the pathetic little thing you call your life.',
  'You’re fucking dead, kid.',
  'Navy Seal copypastas can be anywhere, anytime, and they can confuse you in over seven hundred ways, and that’s just with mad-lib permutations.',
  'Not only are they extensively trained in trolling, but they have access to the entire arsenal of Anonymous and will use it to its full extent to wipe your miserable ass off the face of the Internet, you little shit.',
  'If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue.',
  'But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot.',
  'This copypasta will shit fury all over you and you will drown in it.',
  'You’re fucking dead, kiddo.'
];

var terms = [];
var seeds = [];
var chain = {};

for (var i = 0; i < TITLES.length; i++) {
  words = TITLES[i].split(/ +/);
  terms.push(words[words.length - 1]);
  seeds.push(words[0]);
  for (var j = 0; j < words.length - 1; j++) {
    if (chain.hasOwnProperty(words[j])) {
      chain[words[j]].push(words[j+1]);
    } else {
      chain[words[j]] = [words[j+1]];
    }
  }
}

fs.writeFile('public/chain.json', JSON.stringify({terms, seeds, chain}));