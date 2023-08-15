import React from 'react';
import Card from './Card';

const Projects = () => {
  // Array of project data
  const projects = [
    {
      id: 'projectModal1',
      title: 'Mood Sync',
      description: "MoodSync records users' emotional states through journal-style input and displays vibrant colors representing their feelings on the emotional color spectrum.",
      overview: "MoodSync is a revolutionary platform that captures users' emotional states through expressive journal-style input, dynamically translating those emotions into a stunning array of vibrant colors on the emotional color spectrum, providing users with a visually captivating reflection of their feelings. Additionally, MoodSync features an interactive graph that dynamically stores and visually represents all users' emotional data, presenting a comprehensive view of the collective emotions in a dynamic and informative bar graph. This unique combination of individualized color representations and collective emotional insights empowers users to better understand their emotional journey and fosters a sense of connection within the MoodSync community.",
      links: [
        { url: 'https://moodsync-calendar-1a40e0647873.herokuapp.com/', text: 'Mood Sync' },
        { url: 'https://github.com/Reyesfrancisp/MoodSync_Calendar.git', text: 'Mood Sync Github' }
      ],
      screenshot: '/assets/screenshots/moodSync.png',
    },
    {
      id: 'projectModal2',
      title: 'Note Taker',
      description: 'This website is a note-taking app designed to help users stay organized by allowing them to input, store, and retrieve notes with clickable JSON entries.',
      overview: "This note-taking app is designed to help users stay organized by providing features such as storing titles and notes inputted by the user. The app allows notes to be stored in a JSON file and made clickable, enabling easy retrieval back into the input boxes. Users can also utilize the 'Create New' button to clear input boxes and the 'Save Note' button to save their desired notes, making it a comprehensive tool for creating and organizing notes.",

      links: [
        { url: "https://express-note-taker-ad-39bdba79f2e9.herokuapp.com/", text: "Note Taker" },
        { url: "https://github.com/AnthonyDipopolo/express_note_taker", text: "Note Taker Github" }


      ],
      screenshot: '/assets/screenshots/noteTaker.png',
    },
    {
      id: 'projectModal3',
      title: 'Web Developer Code Quiz',
      description: 'This website is a note-taking app designed to help users stay organized by allowing them to input, store, and retrieve notes with clickable JSON entries.',
      overview: "This webpage is an interactive quiz designed to assess junior web development knowledge with interview-based questions. Triggered by the start button, the quiz features a timer and presents 5 questions. After completion, users can enter their initials, and their scores will be saved and displayed next to their initials.",

      links: [
        { url: "https://anthonydipopolo.github.io/api-code-quiz/", text: "Web Developer Code Quiz" },
        { url: "https://github.com/AnthonyDipopolo/api-code-quiz", text: "Web Developer Code Quiz Github" }
      ],
      screenshot: '/assets/screenshots/devQuiz.png',
    },
    {
      id: 'projectModal4',
      title: 'Random Password Generator',
      description: 'This website is a note-taking app designed to help users stay organized by allowing them to input, store, and retrieve notes with clickable JSON entries.',
      overview: "This JavaScript code serves as a password generator, designed to create strong and random passwords based on user preferences. When using the code, users have the flexibility to choose whether to include lowercase letters, uppercase letters, numbers, and special characters in their passwords, tailoring the password's complexity to their security needs. Additionally, the code prompts the user to enter the desired length of the password, empowering them to generate passwords with varying levels of strength and uniqueness. By incorporating user input, this password generator provides a customizable and robust solution to enhance password security for various applications and platforms.",
      links: [
        { url: "https://anthonydipopolo.github.io/random-password-generator-js/", text: "Random Password Generator" },
        { url: "https://github.com/AnthonyDipopolo/random-password-generator-js", text: "Random Password Generator Github Repository" }
      ],
      screenshot: '/assets/screenshots/randomPass.png',
    },
    {
      id: 'projectModal5',
      title: 'Twitter Clone',
      description: 'This application enables signed-in users to create, edit, and delete thoughts, which appear on the dashboard and home screen. Others can comment on these thoughts, fostering interaction and sharing among users.',
      overview: "This full-stack application empowers users to express their thoughts. Upon signing in, users can create thoughts, visible on the dashboard and home screen. These thoughts are editable and removable. Users can also engage by commenting on posts. The app's core purpose is enabling users to seamlessly create, read, edit, and delete thoughts, fostering collaborative sharing among users.",
      links: [
        { url: "https://tech-blog-ad-c32ea018bfd0.herokuapp.com/", text: "Twitter Clone" },
        { url: "https://github.com/AnthonyDipopolo/mvc-tech-blog", text: "Twitter Clone Github Repository" }
      ],
      screenshot: '/assets/screenshots/twitterClone.png',
    },
    {
      id: 'projectModal6',
      title: 'Weather Dashboard',
      description: 'This application provides weather forecasts for user-specified cities. It features a search history that retains previously selected cities, offering quick access to their forecasts.',
      overview: "Experience the power of weather forecasting with our innovative application that brings you up-to-date weather insights for cities of your choice. Seamlessly tailored to your preferences, this platform combines convenience and comprehensive weather data to empower your daily planning. With a user-friendly interface, this app invites you to explore and predict the weather conditions for any city you desire. Stay ahead of changing climates by effortlessly inputting your chosen city, instantly gaining access to its weather forecast.",
      links: [
        { url: "https://anthonydipopolo.github.io/weather-dashboard-api/", text: "Weather Dashboard" },
        { url: "https://github.com/AnthonyDipopolo/weather-dashboard-api", text: "Weather Dashboard Github Repository" }
      ],
      screenshot: '/assets/screenshots/weatherDashboard.png',
    }
  ];

  return (
    <div className="marginLeft">
      <div className="row">
        {/* Map over project data to render Card components */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={`col-md-4 col-lg-3 col-xl-3 mb-4 card-container`}
          >
            {/* Render Card component with project data */}
            <Card
              title={project.title}
              overview={project.overview}
              description={project.description}
              screenshot={project.screenshot}
              links={project.links}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;





