import { RoomCard } from "@/components/room-card"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin } from "lucide-react"

export default function Home() {
  const featuredRooms = [
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
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 pt-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Experience Luxury at Its Finest
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Book your perfect stay in our handpicked selection of premium hotels
            </p>
          </div>

          {/* Search Card */}
          <Card className="p-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
                  <Input id="location" placeholder="Where are you going?" className="pl-8" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Room Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Room</SelectItem>
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                    <SelectItem value="suite">Suite</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Guests</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button className="w-full">Search Rooms</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold mb-8">Featured Rooms</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredRooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </section>
    </main>
  )
}