drop table if exists articles;
drop table if exists messages;



create table messages (
   id integer not null primary key,
   name varchar(64) unique not null,
   phone varchar(64) not null,
   email varchar(64),
   introduction varchar(512),
   timestamp timestamp not null
);

create table articles (
   id integer not null primary key,
   title varchar(64) unique not null,
   image varchar(64) not null,
   content text not null,
   timestamp timestamp not null
);

insert into articles values(
     1, 'Let it go by your loving part',  'IMG_0623.jpg', '<p>Often I heard friends say, “Don’t think too much. Don’t let someone irrelevant or obnoxious beats yourself up.” I always feel it’s easier said than done, thinking “Ya~ but how?” If someone wrongs me, I can just ignore it. How good it must be! What if I could really diffuse from the hurt?</p><p>One time, I was in a training course role playing pseudo-client. The teacher suggested that I could be more deepening in my self-disclosure in future therapy. It would help my problem. I felt like accused of not investing myself enough in the practice. I felt wronged, unfair. I did share my personal problem in a pseudo-session. Considering the length and goal of this practice, it is just impossible to reveal each detail and nuance of the problem. I felt like I was judged to be incompetent even being in the client’s role. How can this be? There is no right and wrong about a client’s sharing content. I felt humiliated and angry. But I froze. Could not defend myself. She is the teacher who owns higher status. Besides, no one ever disagreed with her in this course. Possibly the sense of shame creeped in so that I lost voice for my feelings. I could only stay there and felt my face blushed.</p> <p>The other day I had an amazing healing experience in a self-compassion workshop. In one instructed exercise, I looked inward a self-judgement thought, sensing it in my body and thinking how it served me. Moving on, I said to this “hard-worker”, “Thank you. You really try your best to protect me from harm. You detect every dangerous signal and get prepared to fight back so as to survive.” </p> <p>Through turning toward this “loyal solder”, I felt sad and grateful for her. It seemed there is part of me trying to protect the vulnerable me. The shameful feeling in the previous training must be this solder’s warning for me to strive excellence so that I could pass every challenge. </p><p>Then, the instructor said” Now the self-criticism is heard. We thank it. Let’s make room for our self-compassionate part”</p> <p>The validation of my “hard-working solder part” touched me and the loving part emerged gradually. </p><p>The loving part said, “I appreciate your(solder) effort. I care for your(whole me) wellbeing. Let’s change. Let’s not beaten ourself up.”</p> <p>“Wait a second! no I can’t. I did not do anything wrong. It’s her who faulted me. It’s her making me consider myself incompetent. Why should “I”change my thinking, it’s not my fault!”, the solder started fighting again to protect harsh enemy. </p><p>The loving part contains, “I know it feels unfair. I am there with you. It is not your fault. But I just want you to change for the better. I want you to feel better. ” </p><p>As such, it seems space grows between the hurt me and wanting to change me. The only route for feeling better is no longer limited to get even from the teacher. The hard-working solder can forgive the hurt me not talking back at that moment. Not talking back does not indicate weakness. The hurt me had learned to protect self from further fight by silence and also she did not have a nurturing environment to learn assertiveness. </p><p>The loving part said, "It is alright to feel angry, wanting the other’s apology, and also weak for not demanding so. I see each part of you try so hard to protect yourself. I care for your effort and your wellbeing. You deserve a break from the struggle. You can let go, as if you are watching the cloud blew by the wind or feeling the breeze passing your face. You don’t have to hold on the task. You can simply rest."</p><p>As I driving home from the class, the big blue sky and white cloud were just there hanging above me accompanying all the way home. I was embraced by this inviting nature in this long drive. My heart caressed and opens.</p>', datetime('2019-11-06 01:44:40')
);




