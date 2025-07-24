import SectionHeader from "../ui/SectionHeader"
import GridColumn from "./GridColumn"
import { educationColumnInfo, experienceColumnInfo } from '@/data/me.js'


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