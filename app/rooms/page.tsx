import { RoomCard } from "@/components/room-card"

export default function RoomsPage() {
  const rooms = [
    {
      title: "Deluxe Ocean View",
      price: "$299",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
    },
    {
      title: "Premium Suite",
      price: "$499",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80"
    },
    {
      title: "Executive Room",
      price: "$399",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80"
    },
    {
      title: "Garden View Suite",
      price: "$349",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80"
    },
    {
      title: "Penthouse Suite",
      price: "$799",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80"
    },
    {
      title: "Family Room",
      price: "$449",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of luxurious rooms and suites, each designed to provide 
            the perfect blend of comfort and elegance for your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </div>
    </div>
  )
}