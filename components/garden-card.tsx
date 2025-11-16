import Image from 'next/image'

interface GardenCardProps {
  name: string
  description: string
  imageUrl: string
}

export function GardenCard({ name, description, imageUrl }: GardenCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-muted">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
