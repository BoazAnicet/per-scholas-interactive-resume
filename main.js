const resumes = [
  {
    name: "First Last",
    emailAddress: "email@examle.com",
    phoneNumber: "555-555-555",
    linkedin: "https://www.linkedin.com/username",
    github: "https://www.github.com/username",
    location: "Anywhere, USA",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quae atque labore, eum laboriosam fuga vel earum nesciunt quo delectus.",
    experience: [
      {
        company: "Per Scholas",
        title: "Student",
        // startDate: Date("January 2023"),
        // endDate: Date("April 2023"),
        startDate: "Jan. 2023",
        endDate: "Apr. 2023",
        location: "New York",
        duties: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repudiandae in id officia eius dolore, quod labore sapiente, odit inventore itaque asperiores.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda necessitatibus non eum harum quibusdam! Dignissimos perferendis neque sed blanditiis cupiditate pariatur voluptatem consequuntur labore mollitia, illum explicabo distinctio delectus id?",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quis ad vel, officia ut, temporibus deleniti dicta, corrupti nostrum at id nobis obcaecati reprehenderit quae?",
        ],
      },
      {
        company: "Per Scholas",
        title: "Student",
        // startDate: Date("January 2023"),
        // endDate: Date("April 2023"),
        startDate: "Jan. 2023",
        endDate: "Apr. 2023",
        location: "New York",
        duties: [
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla repudiandae in id officia eius dolore, quod labore sapiente, odit inventore itaque asperiores.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda necessitatibus non eum harum quibusdam! Dignissimos perferendis neque sed blanditiis cupiditate pariatur voluptatem consequuntur labore mollitia, illum explicabo distinctio delectus id?",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quis ad vel, officia ut, temporibus deleniti dicta, corrupti nostrum at id nobis obcaecati reprehenderit quae?",
        ],
      },
    ],
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Express", "MongoDB"],
  },
];

const renderRésumé = () => {
  // Get container
  let container = document.getElementById("container");
  // Create header
  let header = Object.assign(document.createElement("h1"), {
    innerHTML: resumes[0].name,
  });
  // Append header to container
  container.append(header);
  // Create contacts div
  let contacts = Object.assign(document.createElement("div"), {
    className: "contacts",
  });
  // Create email div
  let email = Object.assign(document.createElement("div"), {
    className: "email-address",
    innerHTML: resumes[0].emailAddress,
  });
  // Create phone div
  let phone = Object.assign(document.createElement("div"), {
    className: "phone-number",
    innerHTML: resumes[0].phoneNumber,
  });
  // Create location div
  let location = Object.assign(document.createElement("div"), {
    className: "location",
    innerHTML: resumes[0].location,
  });
  // Append email, phone number and location to contacts div
  contacts.append(email);
  contacts.append(phone);
  contacts.append(location);
  // Append contacts to container
  container.append(contacts);

  // Create links div
  let links = Object.assign(document.createElement("div"), {
    className: "links",
  });
  // Create Linkedin link
  let linkedin = Object.assign(document.createElement("a"), {
    className: "link",
    innerHTML: "Linkedin",
    href: resumes[0].linkedin,
  });
  // Create Github link
  let github = Object.assign(document.createElement("a"), {
    className: "link",
    innerHTML: "Github",
    href: resumes[0].github,
  });
  // Append Linkedin and Github to links
  links.append(linkedin);
  links.append(github);
  // Append links to container
  container.append(links);

  // Create summary div
  let summary = Object.assign(document.createElement("div"), {
    className: "summary",
  });
  // Create summary header
  let summaryHeader = Object.assign(document.createElement("h2"), {
    innerHTML: "Professional Summary",
  });
  // Create summary text
  let summaryText = Object.assign(document.createElement("div"), {
    innerHTML: resumes[0].summary,
  });
  // Append summary header and text to summary div
  summary.append(summaryHeader);
  summary.append(summaryText);
  // Append summary to container
  container.append(summary);

  // Create experiences div
  let experiences = Object.assign(document.createElement("div"), {
    className: "experiences",
  });
  // Create experience header
  let expHeader = Object.assign(document.createElement("h2"), {
    innerHTML: "Experience",
  });
  // Append header to experiences div
  experiences.append(expHeader);
  // Map over experience array
  resumes[0].experience.map((el) => {
    // Create work div
    let work = Object.assign(document.createElement("div"), {
      className: "work",
    });
    // Create work heading
    let heading = Object.assign(document.createElement("div"), {
      className: "heading",
    });
    // Create company name
    let companyName = Object.assign(document.createElement("div"), {
      className: "company-name",
      innerHTML: el.company,
    });
    // Create date
    let date = Object.assign(document.createElement("div"), {
      className: "date",
      innerHTML: `${el.startDate} - ${el.endDate}`,
    });
    // Append company name and work date to heading
    heading.append(companyName);
    heading.append(date);
    // Append heading to work
    work.append(heading);
    // Append work to experience
    experiences.append(work);

    // Create duties div
    let duties = Object.assign(
      document.createElement("div", { className: "duties" })
    );
    // Create title-and-location div
    let titleAndLocation = Object.assign(document.createElement("div"), {
      className: "title-and-location",
    });
    // Create title and location
    let title = Object.assign(document.createElement("i"), {
      innerHTML: el.title,
    });
    let location = Object.assign(document.createElement("i"), {
      innerHTML: el.location,
    });
    // Append title and location to title-and-location div
    titleAndLocation.append(title);
    titleAndLocation.append(location);
    // Append title-and-location to duties
    duties.append(titleAndLocation);
    // Append duties to work
    work.append(duties);
    // Create ul to hold duties
    let dutiesList = Object.assign(document.createElement("ul"));
    // Map over duties and append them to ul
    el.duties.map((el) => {
      // Create duties
      let duty = Object.assign(document.createElement("li"), { innerHTML: el });
      // Append to ul
      dutiesList.append(duty);
    });
    // Append ul to duties
    duties.append(dutiesList);
  });
  // Append experiences div to container
  container.append(experiences);

  // Create skills div
  let skills = Object.assign(document.createElement("div"), {
    className: "skills",
  });
  // Create skills header
  let skillsHeader = Object.assign(document.createElement("h2"), {
    innerHTML: "Skills",
  });
  // Create skills ul
  let skillsList = Object.assign(document.createElement("ul"));
  // Map over skills array and append to skillsList
  resumes[0].skills.map((el) => {
    let skill = Object.assign(document.createElement("li"), { innerHTML: el });
    skillsList.append(skill);
  });

  // Append skills header and list to skills div
  skills.append(skillsHeader);
  skills.append(skillsList);
  // Append skills to contianer
  container.append(skills);
};

renderRésumé();
