# Creating the 2-sided resume PDF with the provided structure and content
from fpdf import FPDF
# Create a new PDF document
pdf = FPDF()

# Page 1 - Header, Professional Summary, and Skills
pdf.add_page()

# Header Section
pdf.set_font('Arial', 'B', 16)
pdf.cell(200, 10, txt="Mpho Vincent Makgwe", ln=True, align='C')

pdf.set_font('Arial', '', 12)
pdf.cell(200, 10, txt="Email: example@example.com | Phone: +27XXXXXXXXX", ln=True, align='C')
pdf.cell(200, 10, txt="GitHub: https://github.com/yourusername | LinkedIn: linkedin.com/in/yourprofile", ln=True, align='C')
pdf.ln(10)

# Professional Summary
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Professional Summary", ln=True)

pdf.set_font('Arial', '', 12)
summary = (
    "I am a dedicated Full-Stack Developer with a focus on back-end technologies, offering over a year of experience "
    "in JavaScript, TypeScript, React, and Node.js. I have completed specialized courses in full-stack development, "
    "with additional expertise in Java, Spring Boot, Angular, AWS, and MySQL. Known for my strong initiative, clean code "
    "practices, and passion for solving complex technical challenges. Eager to contribute to dynamic development teams and "
    "further grow my skills through remote opportunities."
)
pdf.multi_cell(0, 10, summary)
pdf.ln(5)

# Skills Section
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Skills", ln=True)

pdf.set_font('Arial', '', 12)
skills = (
    "Languages: JavaScript, TypeScript, Java, HTML, CSS, Python\n"
    "Frameworks/Libraries: Node.js, React, Angular, Spring, Spring Boot, TailwindCSS, Next.js\n"
    "Databases: MySQL, MongoDB, Firebase, Supabase\n"
    "Cloud Services: AWS EC2\n"
    "Tools & Platforms: Git, GitHub, Jenkins, REST APIs, Express.js, Supabase, Firebase, Docker\n"
    "Version Control: Git, GitHub\n"
    "Methodologies: Agile, Scrum\n"
    "Other Technologies: API Routing, CI/CD (Jenkins), MongoDB Compass, WebSockets\n"
    "Soft Skills: Problem-solving, teamwork, initiative, adaptability, resilience, communication, collaboration"
)
pdf.multi_cell(0, 10, skills)

# Page 2 - Professional Experience, Education, Projects, Certifications, Interests
pdf.add_page()

# Professional Experience
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Professional Experience", ln=True)

# Experience 1
pdf.set_font('Arial', 'B', 12)
pdf.cell(200, 10, txt="Full-Stack Developer (JavaScript/React)", ln=True)
pdf.set_font('Arial', 'I', 12)
pdf.cell(200, 10, txt="Recipe App (October 2023 – November 2023)", ln=True)
pdf.set_font('Arial', '', 12)
recipe_app = (
    "Spearheaded the development of a dynamic recipe web application with a MongoDB-powered backend. Focused on API integration, "
    "data retrieval, and back-end setup, ensuring a smooth workflow for team members. Utilized Node.js, Express.js, TypeScript, "
    "and Git for version control, delivering a highly interactive user experience. Collaborated with team members to integrate "
    "recipe categories and an editable repository for authorized users."
)
pdf.multi_cell(0, 10, recipe_app)
pdf.ln(5)

# Experience 2
pdf.set_font('Arial', 'B', 12)
pdf.cell(200, 10, txt="Front-End Developer (React/Podcast App)", ln=True)
pdf.set_font('Arial', '', 12)
podcast_app = (
    "Independently built a podcast app using React, leveraging Next.js for server-side rendering and Firebase for authentication. "
    "Implemented responsive UI with Tailwind CSS, enabling seamless user interaction across devices."
)
pdf.multi_cell(0, 10, podcast_app)
pdf.ln(5)

# Experience 3
pdf.set_font('Arial', 'B', 12)
pdf.cell(200, 10, txt="Java Developer (Full Stack)", ln=True)
pdf.set_font('Arial', 'I', 12)
pdf.cell(200, 10, txt="Learner's Academy | Deviare Full Stack Java Program", ln=True)
pdf.set_font('Arial', '', 12)
learners_academy = (
    "Contributed to the development of an online educational portal that manages classes, subjects, students, and teachers. "
    "Implemented back-end logic using Java, Spring Boot, and MySQL to handle student records and administrative functions. "
    "Developed RESTful APIs for efficient data management and retrieval, ensuring optimal performance and security."
)
pdf.multi_cell(0, 10, learners_academy)
pdf.ln(10)

# Education
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Education", ln=True)
pdf.set_font('Arial', '', 12)
education = (
    "JavaScript Specialist Certification - Codespace Academy\n"
    "Full Stack Java Developer Certification - Deviare"
)
pdf.multi_cell(0, 10, education)
pdf.ln(5)

# Projects
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Projects", ln=True)
pdf.set_font('Arial', '', 12)
projects = (
    "LockedMe.com Prototype: A file management system where users can retrieve, add, delete, and search files in a structured manner. "
    "Technologies: Java, Git, GitHub, Maven, Scrum.\n"
    "AI Smart Glasses for Visually Impaired (Business Proposal): Proposed a business idea for smart glasses that provide real-time audio alerts and AI-based face recognition for visually impaired individuals."
)
pdf.multi_cell(0, 10, projects)
pdf.ln(5)

# Certifications
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Certifications & Training", ln=True)
pdf.set_font('Arial', '', 12)
certifications = (
    "AWS Certified Cloud Practitioner (In Progress)\n"
    "Java Full Stack Development - Deviare\n"
    "JavaScript Specialist - Codespace Academy\n"
    "Spring Framework and Spring Boot - Deviare\n"
    "CI/CD with Jenkins - Deviare"
)
pdf.multi_cell(0, 10, certifications)
pdf.ln(5)

# Interests
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="Interests", ln=True)
pdf.set_font('Arial', '', 12)
interests = (
    "Continuous learning in emerging technologies such as AI and Machine Learning.\n"
    "Python programming for enhanced data manipulation and automation."
)
pdf.multi_cell(0, 10, interests)
pdf.ln(5)

# References
pdf.set_font('Arial', 'B', 14)
pdf.cell(200, 10, txt="References", ln=True)
pdf.set_font('Arial', '', 12)
pdf.cell(200, 10, txt="Available upon request.", ln=True)

# Save the file
output_file = "/mnt/data/Mpho_Vincent_Makgwe_Resume.pdf"
pdf.output(output_file)

output_file
