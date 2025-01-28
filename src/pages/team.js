import styles from '../components/Team/team.module.scss';

const teamMembers = [
    {
        name: "Patricia Markert",
        role: "Project Lead, Archaeologist",
        contact: [
            { type: "email", value: "pmarkert@uwo.ca" },
            { type: "website", value: "https://anthropology.uwo.ca/people/faculty/trish_markert.html" }
        ]
    },
    {
        name: "Michael Salton",
        role: "Game Development, Environment Design",
        contact: [
            { type: "email", value: "michaeldsalton@gmail.com" },
            { type: "website", value: "https://www.michaelsalton.com/" }
        ]
    },
    {
        name: "Emily Grant",
        role: "Art, Modelling",
        contact: [
            { type: "email", value: "grantemilym0@gmail.com" },
            { type: "website", value: "https://www.linkedin.com/in/emily-grant-475841306" }
        ]
    },
    {
        name: "Hiu Yi Joyce Lee",
        role: "Music, Sound",
        contact: [
            { type: "email", value: "joyceleehiuyi3@gmail.com" },
            { type: "website", value: "https://www.linkedin.com/in/joyce-lee-abb397290/" }
        ]
    },
    {
        name: "Terrence Ju",
        role: "Web",
        contact: [
            { type: "email", value: "t.juottawa@gmail.com" },
            { type: "website", value: "https://www.linkedin.com/in/terry-ju/" }
        ]
    }
];

export default function Team() {
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>The Team</h1>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.teamList}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <h2 className={styles.name}>{member.name}</h2>
                        <p className={styles.role}>{member.role}</p>
                        <ul className={styles.contactInfo}>
                            {member.contact.map((info, i) => (
                                <li key={i}>
                                    {info.type === "email" ? (
                                        <a href={`mailto:${info.value}`}>{info.value}</a>
                                    ) : info.type === "website" ? (
                                        <a href={info.value} target="_blank" rel="noopener noreferrer">{info.value}</a>
                                    ) : (
                                        info.value
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
                {/* Citation section */}
                <div className={styles.citationContainer}>
                    <p className={styles.citationTitle}>
                        Markert, Patricia G., Michael Salton, Emily Missetta Grant, and Joyce Lee.   
                        <em> Discover Old D’Hanis for Windows/Mac</em>, V. 1., Saltbox Interactive.
                    </p>
                    
                    <p className={styles.sectionHeading}>
                        Project Support and Acknowledgments
                    </p>
                    
                    <p>
                        This project has been supported by Western University, Binghamton University, the National Geographic Society, the Wenner-Gren Foundation, the Mellon Foundation/American Council of Learned Societies, the Council of Texas Archeologists, and the Medina County Historical Commission.
                    </p>
                    
                    <p>
                        It features data and research from the Old D’Hanis Archaeological Mapping Project and Castro Colonies Oral History Project, with credit to online archives such as the Portal to Texas History (University of North Texas Libraries) and UTSA Special Collections.
                    </p>
                    
                    <p>
                        Most importantly, it has been made possible by the community of D’Hanis and Medina County more broadly, who continue to be involved in the development of the game and future research directions.
                    </p>
                </div>

        </div>
    );
}
