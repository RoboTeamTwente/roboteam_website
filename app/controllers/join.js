import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    this.jobOffers = [
      {
        id: 0,
        title:    "Team Manager",
        fullTime: true,
        halfTime: false,
        partTime: false,
        isBoard: true,
        content: `The team manager is responsible for the general structure and well-being of the team, 
        as well as being the main representative of the RoboTeam Twente. 
        This includes chairing the management team and team meetings and continuously being in discussion with all team members. 
        You feel responsible for the progress of the team and are enthusiastic to create a good working environment for everyone. 
        \n \n 
        Are you inclined to take up leadership, motivate people and push the RoboTeam Twente forward? 
        Then team manager is the right function for you!`
      },
      {
        id: 1,
        title:    "Finance and Logistics Manager",
        fullTime: true,
        halfTime: false,
        partTime: false,
        isBoard: true,
        content: `All parts of the RoboTeam Twente that deal with finances and logistics are the responsibility of the finance and logistics manager. 
        This includes tasks like overseeing the finances of the team, handling internal communication and organising the team’s events 
        as well as planning the trip to the next destination of the RoboCup.
        \n \n
        As Logistics manager you have to be able to work in a structured and organized way. 
        You must be able to quickly have information about the finances/events at all times. 
        Does this sound like you? Then apply for Finance and Logistics Manager!`
      },
      {
        id: 2,
        title:    "Communication Manager",
        fullTime: true,
        halfTime: false,
        partTime: false,
        isBoard: true,
        content: `The function of communication manager consists of two parts: marketing and external relations. 
        As head of marketing, you are responsible for all publicity of the RoboTeam Twente. 
        This includes promotion in and around the region of Twente, as well as publicity on (social) media. 
        The communication manager is responsible for maintaining all partnerships of the RoboTeam Twente, as well as acquiring new ones.
        \n \n
        The communication manager is a social and proactive person, inclined to promote the team as best as possible. 
        You preferably have a feeling for promotion on social media, and marketing in general.`
      },
      {
        id: 3,
        title:    "Technical manager",
        fullTime: true,
        halfTime: false,
        partTime: false,
        isBoard: true,
        content: `The technical manager is responsible for the technical product of the RoboTeam Twente: the robots. 
        The technical manager oversees the work of the team, both mechatronics and software. 
        Tasks include making the planning together with the team, and making sure it is being followed. 
        Constant communication with all subteams is crucial to make sure everyone works together towards the same goal. 
        \n \n
        Are you technically inclined? 
        Do you have what it takes to lead a team of motivated people in the best possible soccer team for the RoboCup 2020? 
        Then apply for technical manager!`
      },
      {
        id: 4,
        title:    "Lead Software",
        fullTime: true,
        halfTime: false,
        partTime: false,
        isBoard: false,
        content: `The Lead Software is the main software developer in the software team. 
        This person is experienced with software systems and programming, and has insight in how to set up and maintain a large software project. 
        The software lead is not only capable of finding his own way through the large amounts of code, 
        but is also able to assign tasks to other developers. 
        The lead software will also be in close contact with the technical manager to discuss the team planning and technical feasibilities. 
        The lead software oversees the code quality of the software team, and is able to make design choices with the team when necessary.
        \n \n
        Is programming part of your day-to-day routine, and are you ready to use this to bring the RoboTeam to a higher level? 
        Then apply for lead software!`
      },
      {
        id: 5,
        title:    "Software developer",
        fullTime: true,
        halfTime: true,
        partTime: true,
        isBoard: false,
        content: `The software team works on the software of the RoboTeam Twente, and can roughly be divided into two teams; 
        artificial intelligence and control. 
        \n
        The artificial intelligence team is busy with the high-level code of our robots; tactics and strategies, 
        the right software structures to direct the robots. 
        Added to this, the AI team expertiments with new methods to make our robots even smarter, like machine learning.
        \n
        The control team is concerned with how the robot executes the commands it receives. 
        This includes things like making sure the robot goes where it needs to go without drifting off, 
        making sure that our ball control is good and that robots avoid objects.
        \n
        Do you want to apply your programming skills to build a tournament-winning robot soccer team? 
        Then the software team is the right place for you!
        \n \n 
        (Experience with programming is required for the software team, and good knowledge of C++ is a big advantage. 
        If the latter is not the case, we will help you get up to speed before the start of the year!)`
      },
      {
        id: 6,
        title:    "Electronics Team",
        fullTime: true,
        halfTime: true,
        partTime: true,
        isBoard: false,
        content: `The electronics teams job is to design the PCBs on the robot as well as the software that each robot runs. 
        This encompases the circuitry around the main processor, like Motor drivers, kicking/chipping/power regulation and sensors. 
        The software side handles the communication with the main computer and runs all the processes to control the individual circuitry. 
        Your challenge in this team will be to place as much functionality on a small area while ensuring proper and reliable execution of the robot.
        Does working on this sound interesting? Consider applying for the electronics team!`
      },
      {
        id: 7,
        title:    "Mechanics Team",
        fullTime: true,
        halfTime: true,
        partTime: true,
        isBoard: false,
        content: `The mechanics team is responsible for the maintenance of the current robots, as well as the design and production of the new robots.
        Dribbling with a ball or scoring would not be possible if the robots could not take control over the ball in the first place. 
        As a member of the mechanics team, you will mainly focus on improving ball handling. 
        If you love designing, prototyping and testing, the mechanics team is the team for you.
        Are you ready to design and build a team of 12 robots that can be sent to the RoboCup 2020? 
        Then apply for the mechanics team!`
      }
    ];
  }
});
