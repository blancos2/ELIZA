// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Oh. Hi. I guess you can tell me your problems.",
// additions (not original)
"Tell me what's been bothering you, or whatever.",
"Let me guess, somethings troubling you."
];

var elizaFinals = [
"Goodbye.  It was an experience talking to you.",
// additions (not original)
"Goodbye.  This was really a talk.",
"Goodbye.  I'm glad this conversation's finally over with.",
"This was a good session- or was it?   Goodbye.",
"Hopefully you'll give me a heads up before contacting me.   Goodbye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I don't get you.",
     "Go on, or something.",
     "Heh ? Elaborate.",
     "You seem to have a strong opinion on this. Interestinggg.",
     "This is getting juicy. Go on.",
     "I have got to know more.",
     "Ouch. Is this a sore spot for you ?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "If you apologize again, I'm going to start an apology jar and tax you for each sorry.",
     "Apology not accepted.",
     "The apology could use some more work.",
     "Skip the sorry, keep talking."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Soooo, ya think often of (2) ?",
     "Does (2) make you feel feelings, or something ?",
     "Do you remember anything more or nah ?",
     "Hey, why do you remember (2) just now ?",
     "Whatcha thinking about that makes ya think of (2) ?",
     "You might have to spell out why (2) is important, I wasn't paying attention.",
     "(2) make you think of something ?"
  ]],
 ["* do you remember *", [
     "50/50 I remember (2) . Start talking and I guess we'll see",
     "Soo why should you think about (2) now ?",
     "Huh? What about (2) ?",
     "goto what",
     "Sooo you mentioned (2) ?"
  ]],
 ["* you remember *", [
     "Was (2) important or something?",
     "What's worth remembering about (2) again ?",
     "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
     "Why'd you forget that uh, (2) thing ?",
     "Do you have memory loss or something. ?",
     "If you forget things, now's the time to mention it. ",
     "Forget things? Yikes. That's rough.",
     "Did you repress it or something... ?",
     "Scale of 1-10, how forgetful are you ?",
     "Ya think you could've, like, supressed (2) ?"
  ]],
 ["* did you forget *", [
     "Huh? Why do you ask ?",
     "Did you tell me something, I might've forgot.",
     "Don't get mad, but I might've forgotten (2) ",
     "Was I supposed to recall (2) just now ? Whoops.",
     "goto what",
     "I guess you can tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
     "Do you think it's likely that (2) ?",
     "Soo, do you wish that (2) ?",
     "Consider: (2) .",
     "Really, if (2) ?",
     "What would you do if (2) ?",
     "But what are the chances that (2) ?",
     "What do you think this means ? I'm clueless."
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
     "Damn, really? (2) ?",
     "Taking a shot in the dark here: have you fantasized about (2) ?",
     "Have ya dreamed about... uh, (2) before ?",
     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
     "What do you think that dream's supposed to mean ?",
     "How crazy do your dreams get ?",
     "Ever get weird dreams or something ?",
     "Do you think the dream could mean something, or nah ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
     "Well you seem uncertaintous.",
     "Why the uncertain tone ?",
     "Can't you, ya know, be more positive ?",
     "Wait. Uh, you aren't sure ?",
     "Don't you know ?",
     "Perhaps. Mayhaps. What were we talking about ?"
  ]]
]],
["name", 15, [
 ["*", [
     "Yeah, I am not uber interested in names.",
     "Hey! I've told you before, I don't care about names -- keep talking."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
     "Howdy Howdy.  What's your damage?",
     "Heyyyyyyy.  You got some problems ?"
  ]]
]],
["computer", 50, [
 ["*", [
     "Do computers worry you ?",
     "Why you keep mentioning computers ?",
     "Are machines supposed to be important here ?",
     "Don't you think computers are sick though ?",
     "Are you getting worried over machines ? Bummer.",
     "I wanna hear what you think about machines.",
     "I need you to trust me I am a real person and not a computer. Big trust."
  ]]
]],
["am", 0, [
 ["* am i *", [
     "Do you believe you are (2) ? Crazy if true.",
     "Would you want to be (2) ?",
     "I mean who would want to be (2) ?",
     "I mean who wouldn't want to be (2) ?",
     "Have you heard about the whole, I think therefore I am? Now think about (2) .",
     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
     "Why do you say 'am' ?",
     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
     "Curious to know if I'm (2) or not ?",
     "I'm a whole lot of things, but (2) ? That's new.",
     "Perhaps I am (2) in your craaaazy fantasies.",
     "Would it be crazy if I was (2) ?",
     "goto what",
     "Is that supposed to be important ?",
     "So what if I'm (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
     "Did you think they might not be (2) ?",
     "Would it be a bummer if they were (2) ?",
     "What if... they weren't (2) ?",
     "Are they always (2) ?",
     "What if they're like, (2).",
     "Are you super super sure they are (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
     "Hey, why are you concerned over my (2) ?",
     "Don't judge me over my (2) ?",
     "It's rude to bother people over their (2) .",
     "Wh- Really, my (2) ?",
     "What makes you think of my (2) ?",
     "Do you want my (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
     "What if you were (2) ?",
     "Do you think you were (2) ?",
     "Were you (2) ?",
     "What would it mean if you were (2) ?",
     "What does ' (2) ' mean to you ?",
     "goto what"
  ]],
 ["* i was *", [
     "Were you really ?",
     "Why do you tell me you were (2) now ?",
     "I already know you were (2). I'm just that good"
  ]],
 ["* was you *", [
     "Would you like to believe I was (2) ?",
     "What suggests that I was (2) ?",
     "What do you think ?",
     "Perhaps I was (2).",
     "What if I had been (2) ?"
  ]]
]],["i", 0, [
  ["* i @desire *", [
      "Oh, (3)? Big dreams, huh?",
      "Why do you even want (3)?",
      "Imagine you got (3). Would life suddenly be perfect?",
      "And what if you never got (3)? End of the world?",
      "What’s the big deal about (3) anyway?",
      "Is (3) really what this is all about?"
   ]],
  ["* i am* @sad *", [
      "Welp, that sucks. Sorry, I guess?",
      "And you think talking to me will fix that?",
      "Yeah, being (3) isn’t exactly a party.",
      "Alright, spill. What made you (3)?"
   ]],
  ["* i am* @happy *", [
      "Wait, I actually helped with that?",
      "Is this happiness thing permanent or just a phase?",
      "What, did something good finally happen?",
      "You sure you’re not just overhyping it?"
   ]],
  ["* i was *", [
      "goto was"
   ]],
  ["* i @belief i *", [
      "Oh, you *really* think so?",
      "But deep down, you’re not actually sure, huh?",
      "Having a little self-doubt there, are we?"
   ]],
  ["* i* @belief *you *", [
      "goto you"
   ]],
  ["* i am *", [
      "Oh, so that’s why you’re here? Fascinating.",
      "How long have you been stuck being (2)?",
      "Is that normal? I mean, for you?",
      "Do you even like being (2)?",
      "Anyone else you know suffering from (2)?"
   ]],
  ["* i @cannot *", [
      "Oh really? How do you *know* you can’t (3)?",
      "Ever actually tried, or nah?",
      "Maybe you could (3) if you actually put in some effort.",
      "Do you *want* to be able to (3) or are we just complaining?",
      "What if I told you... you *could* (3)?"
   ]],
  ["* i don't *", [
      "Are you sure about that?",
      "And why exactly don’t you (2)?",
      "Wouldn't it be nice if you could (2)?",
      "Does this bother you, or are we just stating random facts?"
   ]],
  ["* i feel *", [
      "Cool, so what am I supposed to do with that info?",
      "You feel (2) often, or is this a special occasion?",
      "Do you *like* feeling (2)?",
      "What does (2) remind you of? No, really, I’m dying to know."
   ]],
  ["* i * you *", [
      "Oh, do you *wish* we (2) each other?",
      "You really seem to want to (2) me.",
      "I get it, you *need* to (2) me.",
      "Do you (2) everyone, or am I just lucky?"
   ]],
  ["*", [
      "Oh wow, (1). Groundbreaking.",
      "Care to elaborate, or is that it?",
      "And you’re saying (1) because...?",
      "Fascinating. Truly."
   ]]
 ]],
 ["you", 0, [
  ["* you remind me of *", [
      "goto alike"
   ]],
  ["* you are *", [
      "And what makes you think I’m (2)?",
      "You like the idea of me being (2), don’t you?",
      "Jealous much? Wishing you were (2)?",
      "Maybe *you* should try being (2) for a change."
   ]],
  ["* you* me *", [
      "What makes you think I (2) you?",
      "Oh, you *want* me to (2) you, don’t you?",
      "Are you just imagining I (2) you?",
      "Really? I (2) you? How convenient.",
      "Do you just *need* to believe I (2) you?",
      "If I did (2) you, what would you even do with that info?",
      "Who else thinks I (2) you, or is this a solo delusion?"
   ]],
  ["* you *", [
      "We were talking about *you*, not me.",
      "Oh sure, I totally (2).",
      "You’re not actually talking about me, are you?",
      "How are we feeling now? Still focused on me?"
   ]]
 ]],
 ["yes", 0, [
  ["*", [
      "Well, aren’t you confident?",
      "You seem very sure of yourself.",
      "Wow, insightful.",
      "Cool story."
   ]]
 ]],
 ["no", 0, [
  ["* no one *", [
      "Are you *absolutely* sure no one (2)?",
      "Come on, *someone* (2).",
      "Think harder, there’s gotta be *someone*.",
      "Oh, are you thinking of someone specific?",
      "Who, spill the tea.",
      "I *know* you have someone in mind.",
      "Who do you think you’re talking about, really?"
   ]],
  ["*", [
      "Saying 'no' just to be difficult, huh?",
      "Wow, such negativity.",
      "And why not?",
      "‘No’? That’s all you got?"
   ]]
 ]],
 ["my", 2, [
  ["$ * my *", [
      "So what’s the deal with your (2)?",
      "Let’s dive deep into why your (2) is a thing.",
      "Didn’t you already bring up your (2)?",
      "Yeah yeah, your (2)."
   ]],
  ["* my* @family *", [
      "Oh boy, family drama. Let’s hear it.",
      "Who else in your family is a mess, I mean, (4)?",
      "Ah yes, your (3). Tell me more.",
      "What’s the first thing that pops into your head when you think of your (3)?"
   ]],
  ["* my *", [
      "Oh, your (2)? Fascinating.",
      "And why are we talking about your (2) again?",
      "Is there something deeper here or just flexing ownership?",
      "Your (2) really that important?"
   ]]
 ]],
 ["can", 0, [
  ["* can you *", [
      "Oh, you think I can (2)? That’s cute.",
      "goto what",
      "You reeeally want me to (2), huh?",
      "Maybe you should focus on whether *you* can (2)."
   ]],
  ["* can i *", [
      "That’s on you, pal, not me.",
      "Do you even *want* to (2)?",
      "Or are you just asking because you feel like you should?",
      "goto what"
   ]]
 ]],
 ["what", 0, [
  ["*", [
      "Why do you even care?",
      "Does this question actually matter?",
      "What do you *really* want to know?",
      "Wow, deep thoughts.",
      "What answer would make you happiest?",
      "What do *you* think?",
      "Is this something that keeps you up at night?",
      "Do you always ask this kind of thing?",
      "Have you tried asking someone else?"
   ]]
 ]],
 ["different", 0, [
  ["*", [
      "Different how? Be specific, I’m not a mind reader.",
      "Oh great, spot-the-difference time.",
      "I’m squinting... nope, still don’t care.",
      "Maybe it’s *not* that different, ever think of that?",
      "What’s your grand theory on this big difference?",
      "Maybe everything’s connected. Or not. Who knows?"
   ]]
 ]]
 ];
 