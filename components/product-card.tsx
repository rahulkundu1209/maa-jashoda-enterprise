import Image from 'next/image'

interface ProductCardProps {
  name: string
  description: string
  imageUrl: string
  whyChoose: string
}

export function ProductCard({ name, description, imageUrl, whyChoose }: ProductCardProps) {
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
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="bg-primary/10 border-l-4 border-primary p-3 rounded">
          <p className="text-xs font-semibold text-primary mb-1">Why Choose Ours?</p>
          <p className="text-sm text-foreground">{whyChoose}</p>
        </div>
      </div>
    </div>
  )
}
