import SectionHeader from "../ui/SectionHeader"
import GridColumn from "./GridColumn"


const experienceColumnInfo = [
  {
    title: 'Frontend Developer Intern',
    subtitle: 'TechStart Inc.',
    dateText: 'Jun 2024 - Aug 2024',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.'
  },
  {
    title: 'Web Development Freelancer',
    subtitle: 'Self-Employed',
    dateText: 'Jan 2023 - Present',
    description: 'Built custom websites for small businesses using modern web technologies. Managed full project lifecycle from requirements to deployment.'
  }
]

const educationColumnInfo = [
  {
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'University of Technology',
    dateText: '2020 - 2024',
    description: 'Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering.'
  },
  {
    title: 'Full Stack Web Development Bootcamp',
    subtitle: 'CodeAcademy Pro',
    dateText: '2023',
    description: 'Intensive 6-month program covering modern web development stack including React, Node.js, databases, and deployment strategies.'
  },
]

const Experience = () => {
  return (
    <section id='experience' className="w-full bg-background-secondary min-h-[50vh] py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-8 lg:px-4">
        <SectionHeader title={'Experience & Education'} subtitle={'My journey in technology and continuous learning'} />

        <div className="grid lg:grid-cols-2 gap-12">
          <GridColumn id={'exp-column'} title='Experience' columnInfo={experienceColumnInfo} color={'primary'} />
          <GridColumn id={'edu-column'} title='Education' columnInfo={educationColumnInfo} color={'green-600'} />
        </div>
      </div>
    </section>
  )
}

export default Experience