import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [{
              id: 1,
              type: 'member',
              attributes: {
                name: "Rob Verbeek",
                imageSrc: "content/teampictures/rob.JPG",
                role: "Chairman",
                study: "ATLAS",
                story: `Hi, my name is Rob Verbeek, and I just graduated from ATLAS University
College. I am the chairman of this year's RoboTeam Twente and part of
the software team focusing on Artificial Intelligence. As third RoboTeam
 we have the advantage of starting the year with a fully functioning
team of robots, and as team leader I want to assure that everyone can
work to the best of their ability, using this advantage to create a
winning team for the robocup in Sydney! Next to this I want to
contribute to starting to use machine learning in our robots, which is
also the study direction I'm going into, and one of the reasons I joined
 this amazing team!`
              },
              relationships: {}
            },
            {
              id: 2,
              type: 'member',
              attributes: {
                name: "Selina Zwerver",
                imageSrc: "content/teampictures/selina.JPG",
                role: "Secretary",
                study: "BMT",
                story: `Hi everyone, I’m
Selina, I’m 20 years old and I am originally from the beautiful
city of Leeuwarden, Friesland. Last year I got my bachelor’s degree
in Biomedical Engineering and this year I will be the Secretary and
part of the software team. In the software team I will be focusing on
improving the control of the robot. I chose to participate in the
RoboTeam Twente because I wanted to do something else than studying
and I think participating in this team will be a wonderful
preparation for my master. The fact that we’re also going to Sydney
to compete in the RoboCup is just a bonus!!!!!!!!`
              },
              relationships: {}
            },
            {
              id: 3,
              type: 'member',
              attributes: {
                name: "Rolf van der Hulst",
                imageSrc: "content/teampictures/rolf.JPG",
                role: "Treasurer",
                study: "ATLAS",
                story: `Hey, I am Rolf van der Hulst. After doing ATLAS (UCT) as bachelor I wanted a challenge that was something different than just studying and would also allow me to develop other skills. Since I'm only 20 years old, I did not want to start a master immediately and wanted to take this opportunity to do other activities. In my case, this turned out to be RoboTeam.
My internal function is mostly being a member of the software team. I will be working on the AI of our robots mostly, specifically the more mathematically intensive parts of our system.  Next to that, I am also a board member and treasurer of the RoboTeam, keeping track of all the finances.

I chose to do RoboTeam mostly because it is still a young team, and there is a lot of opportunities to innovate still in contrast to some of the more established teams. I did not know much about robotics yet, but I see this as a chance to learn more. At the same time, I also get to develop my skills as software developer and use my skills to help contribute to a future with better AI.

Next to the RoboTeam, I mostly am busy with music. It is no secret that I love singing, especially acapella, and I play on my guitar and piano quite a bit.
`
              },
              relationships: {}
            },
            {
              id: 4,
              type: 'member',
              attributes: {
                name: "Koen Hertenberg",
                imageSrc: "content/teampictures/koen.JPG",
                role: "External affairs",
                study: "ATLAS",
                story: `I am Koen Hertenberg and I work on the control for the robots and external affairs. I chose for RoboTeam Twente to take more initiatief in develop robotics and myself. I was, and still am, interested in working a whole year on one project with one team. Combined with my interest in robotics and A.I. I ended up at RoboTeam Twente. In the team I can Practically apply the knowledge gained in my studies, but also deepen and broaden that knowledge. The nicest part is that now I have to and can focus on one goal. Everything is done to better the robots. Of course everything we thought is applicable way beyond the our small robots, but it gives form to our approach. This is also how control works, the robot needs specific goals to structure the sensor data and guide its decisions. The goals determine which data has to be looked at and what it will do. Having many things it could and should do, without one overarching goal to orientate everything around, leads to an unstable and anxious system, that will find it hard pressed to make decisions. `
              },
              relationships: {}
            },

            {
              id: 5,
              type: 'member',
              attributes: {
                name: "Cas Doornkamp",
                imageSrc: "content/teampictures/cas.JPG",
                role: "Electronics",
                study: "Electrical Engineering",
                story: `Hello, my name is Cas Doornkamp and I’m 22 years old. I was born in Assen and spend most of my time there growing up. In that time, I already had a lot of interest in robotics and was already building and designing things surrounding this field. After I had finished high school moved to Enschede to study Electrical Engineering, where I also joined the Stores-committee. After I had finished my bachelor, I started my master in Embedded Systems.
I noticed after a couple of months into the master that I had time to spare and missed the feeling of working on a project. These projects were for me my favorite parts of the bachelor. This led to me joining the Roboteam last year as a part time member where I worked on a new kicker design. Leaving such a good impression that I decided to join the RoboTeam fulltime this year as the Head of the electronics group where I will be working on a new motor driver.`
              },
              relationships: {}
            },
            {
              id: 6,
              type: 'member',
              attributes: {
                name: "Baris Imre",
                imageSrc: "content/teampictures/baris.JPG",
                role: "AI development",
                study: "Technical Computer Science",
                story: `Hey there! I am Baris and I am a full time member of the RoboTeam Twente. I studied Technical Computer Science for 2 years until I decided to take a year  off for a student team and work on the coolest project on campus. My job this year will be to mainly focus on the AI elements of the team, take what is already done to the next level, and soak up as much information as I possible can. I have always wondered how people made the “AI’s” in computer games I played since I was a little kid. Now I hope to relate to their struggle :) and I am exited to make something that I could look back and say I am proud of what we achieved. This year in the RoboTeam, I fully believe that we will surprise everybody and come up with the best robot football team the UT has ever seen.`
              },
              relationships: {}
            },
            {
              id: 7,
              type: 'member',
              attributes: {
                name: "Thijs Luttikhuis",
                imageSrc: "content/teampictures/thijs.JPG",
                role: "AI development",
                study: "Applied Physics",
                story: `Hello, my name is Thijs Luttikhuis and this year I will take part in the software team of RoboTeam Twente. I am currently 19 years old and I am in my third year of the bachelor Applied Physics (TN). My hobbies are playing the guitar, gaming and playing golf.

I am participating in the team because I wanted to take a step in a different direction for some time. My first idea was to get a group together and build some kind of product. As that did not really get off the ground, I looked into the different student teams the university had to offer, where RoboTeam Twente really stood out to me.`
              },
              relationships: {}
            },
            {
              id: 8,
              type: 'member',
              attributes: {
                name: "Antonio Sanchez-Martin",
                imageSrc: "content/teampictures/antonio.JPG",
                role: "Electronics",
                study: "Electrical Engineering",
                story: `My name's Antonio and I am a BSc Electrical Engineering student at the UT. I come from Spain, but I came to the Netherlands seeking a more practical education and new experiences that only a different country can bring. Alongside the other students in the electronics team, I will help/take care of programming microcontrollers, anything involving voltages and currents, fixing robots when needed, and other stuff. I joined the RoboTeam because… it looked like fun! The idea of working with other students to make robots which (on their own!) would try to win in a soccer match seemed amazing. Along the way, I would like to learn how it is to work with other people in a large-scale project, which will provide experience unlike anything a degree may offer. Besides, I am interested in the field of Embedded Systems for the future, so this can give me a real-life taste of how it would be.`
              },
              relationships: {}
            },
            {
              id: 9,
              type: 'member',
              attributes: {
                name: "Lukas Bos",
                imageSrc: "content/teampictures/lukas.JPG",
                role: "AI development",
                study: "Embedded systems",
                story: `Hey! I'm Lukas and I will be leading the software team this year.
Four years ago I moved to Enschede to study Creative Technology, where I quickly discovered my interest in programming and electronics. To gain a deeper understanding of multiple programming languages I started with the master Embedded Systems after my  bachelor. In all my years at the University I spent a lot of nights writing (read: debugging) code. I always felt that both the hardware and software world has some kind of magical touch. Wires of metal are transformed into machines that can ... play soccer!? Although there is always a logical explanation for these kind of behaviours, the complexity of these systems can still feel pretty overwhelming. This year I intend to improve the Artificial Intelligence of our robot soccer team, such that maybe even more people will feel the magic. `
              },
              relationships: {}
            },
            {
              id: 10,
              type: 'member',
              attributes: {
                name: "Alice Petry",
                imageSrc: "content/teampictures/alice.JPG",
                role: "Mechanics",
                study: "ATLAS",
                story: `"Hi i'm rob"`
              },
              relationships: {}
            },
            {
              id: 11,
              type: 'member',
              attributes: {
                name: "Simen Bootstra",
                imageSrc: "content/teampictures/simen.JPG",
                role: "Control",
                study: "BsC Applied Physics",
                story: `Hi there!
My name is Simen Bootsma and I am 20 years old. I grew up in Friesland and
moved to Enschede to study Applied Physics at the University of Twente. After
two years of the Bachelor’s programme, I decided to join RoboTeam Twente for a full
year. In the fifth module, we had to do a small project about Signals &
Models. Together with four other students, I made a table that could manage to
balance a ball when someone tried to push it off. It was a very fun experience
and I learned a lot about modelling and controlling such a system. That is one
of the reasons why I wanted to be part of the Control team this year. We mainly
focus on the software of the skills and capabilities of the robots. I am
looking forward to be working with the robots and of course participating with
the RoboCup in Sydney!`
              },
              relationships: {}
            },
            {
              id: 12,
              type: 'member',
              attributes: {
                name: "Emil Kerimov",
                imageSrc: "content/teampictures/emil.JPG",
                role: "Electronics",
                // TODO: Change study
                study: "MsC Electrical Engineering",
                story: `Hi there, my name is Emil Kerimov. I’m a Masters student in Electrical Engineering and I’m a member of the Electronics group of RoboTeam. Together with the rest of the team, we will be improving and redesigning base hardware of our robots, to ensure a stable and powerful platform for all software features. I’m interested in electronics and always love a challenge, both of which I know I’ll find at RoboTeam! It’s an all-around experience, with technical and business aspects, which is a great way to find out what you can expect in the industry. Looking forward to my time with the team!`
              },
              relationships: {}
            },
            {
              id: 13,
              type: 'member',
              attributes: {
                name: "Freek Nijweide",
                imageSrc: "content/teampictures/freek.JPG",
                role: "AI development",
                study: "BsC Advanced Technology",
                story: `My name is Freek Nijweide, and I will be working on the software
for the RoboTeam Twente this year. I will be doing this part-time, as I
am a third year student of the Advanced Technology bachelor, here at the
 UT.Advanced Technology is a broad, technical study program,
and this is a good preparation for a multidisciplinary field such as
robotics. However, I have always loved computers and robots, and that is
 why I will have chosen to join the RoboTeam this year! For that same
reason, I will be doing computer science courses next to my activities
within the team.I hope that I will be able to improve many
different aspects of our robots this year, and learn a lot while doing
it. I can’t wait to see what we will come up with.`
              },
              relationships: {}
            },
            {
              id: 14,
              type: 'member',
              attributes: {
                name: "Inkeri Kollmann",
                imageSrc: "content/teampictures/inkeri.JPG",
                role: "Public Relations",
                study: "European Public Administration",
                story: `Hi! I am Inkeri, responsible for the RoboTeam Twente's Public Relations. At this time I am a student of Management, Society and Technology and work for the RoboTeam Twente part-time.
During my last three university years I did not have the time to participate in a student team. In this year, this opportunity finally rised: Technology, a need for my skills and a competition at the end? It was not hard to say yes! `
              },
              relationships: {}
            },
            {
              id: 15,
              type: 'member',
              attributes: {
                name: "Pepijn de Vos",
                imageSrc: "content/teampictures/pepijn.JPG",
                role: "Electronics",
                study: "Electrical Engineering",
                story: `I'm Pepijn de Vos. Right out of school I started my own business as a software developer, but after a
few years of making web applications I got bored with my job and decided
 to study Electrical Engineering. I just finished my bachelor this year,
 and am now starting my master, while also having a part-time job at the
 Robotics and Mechatronics department, and being a part-time member of
RoboTeam.Due to my experience as both an electrical engineer and software developer,
 I will be working on both ends, connecting everything together,
literally! My first project will be the wireless communication between
the strategy code on the base station and the robots. I
 was working on my bachelor assignment in Integrated Circuit Design,
when I felt the itch to write some code. I asked a friend in the team if
 I could play around with their code, after which they proceeded to
pressure me into a full-time board position in the new team. I managed
to negotiate a part-time position after all haha. Because they did not
let me play with their code just before the competition, I ended up making my own soccer robot from Lego.`
              },
              relationships: {}
            }
          ]});

          return this.store.findAll('member');
      }

});
