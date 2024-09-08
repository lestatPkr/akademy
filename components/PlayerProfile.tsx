import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveRadar } from '@nivo/radar'
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'

const playerData = {
  name: "Javier Baez",
  alias: "Javier B",
  birthDate: "2000-05-05",
  weight: "57.0 kg",
  height: "163.0 cm",
  nationality: "Spain",
  position: "Defensa",
  organization: "Kaantera FC",
  school: "Kaantera España",
  team: "Kaantera Vigo",
  subTeam: "Kaantera Sub 11"
}

const competencies = [
  { skill: 'Paredes', value: 80 },
  { skill: 'Conducción', value: 90 },
  { skill: 'Cambio de Dirección', value: 75 },
  { skill: 'Profundidad ofensiva', value: 60 },
  { skill: 'Despejes', value: 70 },
  { skill: 'Pase', value: 85 },
  { skill: 'Tiro', value: 65 },
  { skill: 'Control', value: 80 },
  { skill: 'Apoyos', value: 70 },
]

const competenciesOverTime = [
  {
    id: 'Pase',
    data: [
      { x: '9/4/23', y: 50 },
      { x: '10/2/23', y: 80 },
      { x: '11/6/23', y: 90 },
      { x: '1/1/24', y: 85 },
      { x: '1/25/24', y: 90 },
      { x: '3/18/24', y: 90 },
      { x: '5/18/24', y: 85 },
      { x: '7/15/24', y: 75 },
    ]
  },
  {
    id: 'Despeje',
    data: [
      { x: '9/4/23', y: 40 },
      { x: '10/2/23', y: 60 },
      { x: '11/6/23', y: 65 },
      { x: '1/1/24', y: 70 },
      { x: '1/25/24', y: 75 },
      { x: '3/18/24', y: 80 },
      { x: '5/18/24', y: 90 },
      { x: '7/15/24', y: 90 },
    ]
  },
  // ... Add similar data structures for other competencies
]

const matchStats = {
  partidosConvocados: 0,
  partidosJugados: 0,
  partidosComoTitular: 0,
  minutosJugados: 0,
  mediaMinutosJugados: 0,
  eventos: 0,
  goles: 1,
  asistencias: 0,
  tarjetasAmarillas: 1,
  tarjetasRojasDobleAmarilla: 0,
  tarjetasRojasDirecta: 0,
}

const noConvocatoriaPieData = [
  { id: 'Lesión', value: 2 },
  { id: 'Decisión técnica', value: 1 },
  { id: 'Sanción', value: 1 },
]

export default async function PlayerProfile() {
  return (  
    <div className="container mx-auto p-4">
      <Card className="flex flex-col md:flex-row gap-4 mb-4">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Javier Baez"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-2">{playerData.name}</h1>
          <p className="text-xl mb-4">Alias: {playerData.alias}</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Fecha de Nacimiento:</strong> {playerData.birthDate}</p>
              <p><strong>Peso y altura:</strong> {playerData.weight} | {playerData.height}</p>
              <p><strong>Nacionalidad:</strong> {playerData.nationality}</p>
              <p><strong>Posición:</strong> {playerData.position}</p>
            </div>
            <div>
              <p><strong>Organización:</strong> {playerData.organization}</p>
              <p><strong>Escuela:</strong> {playerData.school}</p>
              <p><strong>Sede:</strong> {playerData.team}</p>
              <p><strong>Equipo:</strong> {playerData.subTeam}</p>
            </div>
          </div>
        </div>
      </Card>

    </div>
  )
}