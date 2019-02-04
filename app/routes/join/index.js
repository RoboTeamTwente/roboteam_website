import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.push({
      data: [{
              id: 0,
              type: 'offer',
              attributes: {
                title:    "Team Manager",
                fullTime: true,
                halfTime: false,
                partTime: false,
                isBoard: true,
                imageSrc: "content/join/team-manager.JPG",
                content: `The team manager is responsible for the general structure and well-being of the team, as well as being the main representative of the RoboTeam Twente. This includes chairing the management team and team meetings and continuously being in discussion with all team members. You feel responsible for the progress of the team and are enthusiastic to create a good working environment for everyone.
                          Are you inclined to take up leadership, motivate people and push the RoboTeam Twente forward? Then team manager is the right function for you!`
              },
              relationships: {}
            },
            {
              id: 1,
              type: 'offer',
              attributes: {
                title:    "Finance and Logistics Manager",
                fullTime: true,
                halfTime: false,
                partTime: false,
                isBoard: true,
                imageSrc: "content/join/finance-logistics.jpg",
                content: `All parts of the RoboTeam Twente that deal with finances and logistics are the responsibility of the finance and logistics manager. 
                This includes tasks like overseeing the finances of the team, handling internal communication and organising the team’s events 
                as well as planning the trip to the next destination of the RoboCup. As Logistics manager you have to be able to work in a structured and organized way. 
                You must be able to quickly have information about the finances/events at all times. Does this sound like you? Then apply for Finance and Logistics Manager!`
              },
              relationships: {}
            },
            {
              id: 2,
              type: 'offer',
              attributes: {
                  title:    "Communication Manager",
                  fullTime: true,
                  halfTime: false,
                  partTime: false,
                  isBoard: true,
                  imageSrc: "content/join/communications-manager.JPG",
                  content: `The function of communication manager consists of two parts: marketing and external relations. 
                  As head of marketing, you are responsible for all publicity of the RoboTeam Twente. This includes promotion in and around the region of Twente, as well as publicity on (social) media. 
                  The communication manager is responsible for maintaining all partnerships of the RoboTeam Twente, as well as acquiring new ones.
        
                  The communication manager is a social and proactive person, inclined to promote the team as best as possible. You preferably have a feeling for promotion on social media, and marketing in general.`
              },
              relationships: {}
            },
            {
              id: 3,
              type: 'offer',
              attributes: {
                title:    "Technical manager",
                fullTime: true,
                halfTime: false,
                partTime: false,
                isBoard: true,
                imageSrc: "content/join/technical-manager.JPG",
                content: `The technical manager is responsible for the technical product of the RoboTeam Twente: the robots. 
                The technical manager oversees the work of the team, both mechatronics and software. 
                Tasks include making the planning together with the team, and making sure it is being followed. 
                Constant communication with all subteams is crucial to make sure everyone works together towards the same goal. 
                Are you technically inclined? Do you have what it takes to lead a team of motivated people in the best possible soccer team for the RoboCup 2020? 
                Then apply for technical manager!`
              },
              relationships: {}
            },
            {
              id: 4,
              type: 'offer',
              attributes: {
                title:    "Lead Software",
                fullTime: true,
                halfTime: false,
                partTime: false,
                isBoard: false,
                imageSrc: "content/join/lead-software.jpg",
                content: `The Lead Software is the main software developer in the software team. This person is experienced with software systems and programming, and has insight in how to set up and maintain a large software project. 
                The software lead is not only capable of finding his own way through the large amounts of code, but is also able to assign tasks to other developers. 
                The lead software will also be in close contact with the technical manager to discuss the team planning and technical feasibilities. 
                The lead software oversees the code quality of the software team, and is able to make design choices with the team when necessary.
                
                Is programming part of your day-to-day routine, and are you ready to use this to bring the RoboTeam to a higher level? 
                Then apply for lead software!`
              },
              relationships: {}
            },
            {
              id: 5,
              type: 'offer',
              attributes: {
                title:    "Software developer",
                fullTime: true,
                halfTime: true,
                partTime: true,
                isBoard: false,
                imageSrc: "/content/join/software-developer.JPG",
                content: `The software team works on the software of the RoboTeam Twente, and can roughly be divided into two teams; 
                artificial intelligence and control. The artificial intelligence team is busy with the high-level code of our robots; tactics and strategies, the right software structures to direct the robots. 
                Added to this, the AI team expertiments with new methods to make our robots even smarter, like machine learning.
                The control team is concerned with how the robot executes the commands it receives. This includes things like making sure the robot goes where it needs to go without drifting off,  making sure that our ball control is good and that robots avoid objects. 
                Do you want to apply your programming skills to build a tournament-winning robot soccer team? Then the software team is the right place for you!

                (Experience with programming is required for the software team, and good knowledge of C++ is a big advantage. 
                If the latter is not the case, we will help you get up to speed before the start of the year!)`
              },
              relationships: {}
            },
            {
              id: 6,
              type: 'offer',
              attributes: {
                title:    "Electronics",
                fullTime: true,
                halfTime: true,
                partTime: true,
                isBoard: false,
                imageSrc: "content/join/electronics-team.JPG",
                content: `The electronics teams job is to design the PCBs on the robot as well as the software that each robot runs. 
                This encompases the circuitry around the main processor, like Motor drivers, kicking/chipping/power regulation and sensors. The software side handles the communication with the main computer and runs all the processes to control the individual circuitry. 
                Your challenge in this team will be to place as much functionality on a small area while ensuring proper and reliable execution of the robot. Does working on this sound interesting? Consider applying for the electronics team!`
              },
              relationships: {}
            },
            {
              id: 7,
              type: 'offer',
              attributes: {
                title:    "Mechanics",
                fullTime: true,
                halfTime: true,
                partTime: true,
                isBoard: false,
                imageSrc: "content/join/mechanics-team.jpg",
                content: `The mechanics team is responsible for the maintenance of the current robots, as well as the design and production of the new robots.
                Dribbling with a ball or scoring would not be possible if the robots could not take control over the ball in the first place. 
                As a member of the mechanics team, you will mainly focus on improving ball handling. If you love designing, prototyping and testing, the mechanics team is the team for you.
                Are you ready to design and build a team of 12 robots that can be sent to the RoboCup 2020? Then apply for the mechanics team!`
              },
              relationships: {}
            },
            {
              id: 8,
              type: 'offer',
              attributes: {
                title:    "Graphic Designer",
                fullTime: false,
                halfTime: false,
                partTime: true,
                isBoard: false,
                imageSrc: "content/join/graphic-design.jpg",
                content: `As graphic designer, you will be responsible for the design of all PR material of RoboTeam Twente. You can influence the design of the website, flyers, posters, videos, sponsor packages, clothing, and other things you can come up with.
                          Do you know how to find the exact right kind of paper to use for a flyer? And do you know how to give us a professional look? Apply as a graphic designer! `
              },
              relationships: {}
            },
             {
              id: 9,
              type: 'offer',
              attributes: {
                title:    "Public Relations and Events",
                fullTime: false,
                halfTime: false,
                partTime: true,
                isBoard: false,
                imageSrc: "content/join/pr-events.jpg",
                content: `Besides building robots, the RoboTeam Twente is involved with a lot of events where we show our robots. This involves planning events and presenting our plans on social media.
                        Do you want to present our robots at events and on social media? Then join us for Public Relations and Events!`
              },
              relationships: {}
            },
             {
              id: 10,
              type: 'offer',
              attributes: {
                title:    "Educational Affairs",
                fullTime: false,
                halfTime: false,
                partTime: true,
                isBoard: false,
                imageSrc: "content/join/educational.jpeg",
                content: `As an education officer you will maintain the educational affairs of the team. This means contacting schools or other instances such that we can provide workshops in order to inspire the next generation. 
                          Are you interested in bringing excitement about robotics to the next generation? Then apply for Educational Affairs!`
              },
              relationships: {}
            }
          ]});

          return this.store.findAll('offer');
      }
});
