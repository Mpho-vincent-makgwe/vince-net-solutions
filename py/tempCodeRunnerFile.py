from fpdf import FPDF

# Create a PDF object
pdf = FPDF()

# Add a page
pdf.add_page()

# Set title font
pdf.set_font("Arial", "B", 16)
pdf.cell(200, 10, txt="Mpho Vincent Makgwe", ln=True, align='C')

# Add contact details
pdf.set_font("Arial", "", 12)
pdf.cell(200, 10, txt="Email: example@example.com | Phone: +27XXXXXXXXX", ln=True, align='C')
pdf.cell(200, 10, txt="GitHub: https://github.com/yourusername | LinkedIn: linkedin.com/in/yourprofile", ln=True, align='C')

# Add a line break
pdf.ln(10)

# Add Professional Summary
pdf.set_font("Arial", "B", 14)
pdf.cell(200, 10, txt="Professional Summary", ln=True)
pdf.set_font("Arial", "", 12)
summary = ("I am a dedicated Full-Stack Developer with a focus on back-end technologies, offering over a year of "
           "experience in JavaScript, TypeScript, React, and Node.js. I have completed specialized courses in full-stack "
           "development, with additional expertise in Java, Spring Boot, Angular, AWS, and MySQL. Known for my strong initiative, "
           "clean code practices, and passion for solving complex technical challenges. Eager to contribute to dynamic development teams "
           "and further grow my skills through remote opportunities.")
pdf.multi_cell(0, 10, txt=summary)

# Add Skills
pdf.set_font("Arial", "B", 14)
pdf.cell(200, 10, txt="Skills", ln=True)
pdf.set_font("Arial", "", 12)
skills = ("Languages: JavaScript, TypeScript, Java, HTML, CSS, Python\n"
          "Frameworks/Libraries: Node.js, React, Angular, Spring, Spring Boot, TailwindCSS, Next.js\n"
          "Databases: MySQL, MongoDB, Firebase, Supabase\n"
          "Cloud Services: AWS EC2\n"
          "Tools & Platforms: Git, GitHub, Jenkins, REST APIs, Docker\n"
          "Version Control: Git, GitHub\n"
          "Methodologies: Agile, Scrum\n"
          "Other Technologies: API Routing, CI/CD (Jenkins), WebSockets\n"
          "Soft Skills: Problem-solving, teamwork, initiative, adaptability, communication")
pdf.multi_cell(0, 10, txt=skills)

# Add Professional Experience
pdf.set_font("Arial", "B", 14)
pdf.cell(200, 10, txt="Professional Experience", ln=True)

# Recipe App Experience
pdf.set_font("Arial", "B", 12)
pdf.cell(200, 10, txt="Full-Stack Developer (JavaScript/React)", ln=True)
pdf.set_font("Arial", "I", 12)
pdf.cell(200, 10, txt="Recipe App | October 2023 – November 2023", ln=True)
pdf.set_font("Arial", "", 12)
recipe_app = ("Spearheaded the development of a dynamic recipe web application with a MongoDB-powered backend. "
              "Focused on API integration, data retrieval, and back-end setup. Utilized Node.js, Express.js, TypeScript, and "
              "Git for version control.")
pdf.multi_cell(0, 10, txt=recipe_app)

# Podcast App Experience
pdf.set_font("Arial", "B", 12)
pdf.cell(200, 10, txt="Front-End Developer (React/Podcast App)", ln=True)
pdf.set_font("Arial", "", 12)
podcast_app = ("Independently built a podcast app using React, leveraging Next.js for server-side rendering and Firebase for authentication. "
               "Implemented responsive UI with Tailwind CSS.")
pdf.multi_cell(0, 10, txt=podcast_app)

# Java Developer Experience
pdf.set_font("Arial", "B", 12)
pdf.cell(200, 10, txt="Java Developer (Full Stack)", ln=True)
pdf.set_font("Arial", "I", 12)
pdf.cell(200, 10, txt="Learner's Academy | Deviare Full Stack Java Program", ln=True)
pdf.set_font("Arial", "", 12)
learners_academy = ("Contributed to the development of an online educational portal that manages classes, subjects, students, and teachers. "
                    "Implemented back-end logic using Java, Spring Boot, and MySQL. Developed RESTful APIs for efficient data management and retrieval.")
pdf.multi_cell(0, 10, txt=learners_academy)

# Add Education
pdf.set_font("Arial", "B", 14)
pdf.cell(200, 10, txt="Education", ln=True)
pdf.set_font("Arial", "", 12)
education = ("JavaScript Specialist Certification – Codespace Academy\n"
             "Full Stack Java Developer Certification – Deviare")
pdf.multi_cell(0, 10, txt=education)

# Add Certifications & Training
pdf.set_font("Arial", "B", 14)
pdf.cell(200, 10, txt="Certifications & Training", ln=True)
pdf.set_font("Arial", "", 12)
certifications = ("AWS Certified Cloud Practitioner (In Progress)\n"
                  "Java Full Stack Development – Deviare\n"
                  "JavaScript Specialist – Codespace Academy\n"
                  "Spring Framework and Spring Boot – Deviare")
pdf.multi_cell(0, 10, txt=certifications)

# Add Interests
pdf.set_font("Arial", "B", 14)
pdf.cell(200, 10, txt="Interests", ln=True)
pdf.set_font("Arial", "", 12)
interests = ("Continuous learning in emerging technologies such as AI and Machine Learning.\n"
             "Python programming for enhanced data manipulation and automation.")
pdf.multi_cell(0, 10, txt=interests)

# Save the PDF to file
pdf_output = "/mnt/data/Mpho_Vincent_Makgwe_Resume.pdf"
pdf.output(pdf_output)

pdf_output
