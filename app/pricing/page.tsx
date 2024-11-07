import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Standard Room",
      price: "$199",
      features: [
        "King-size bed",
        "City view",
        "Free Wi-Fi",
        "Room service",
        "Air conditioning",
      ],
    },
    {
      name: "Deluxe Room",
      price: "$299",
      features: [
        "Ocean view",
        "Premium amenities",
        "Breakfast included",
        "Access to spa",
        "Priority service",
      ],
    },
    {
      name: "Executive Suite",
      price: "$499",
      features: [
        "Panoramic view",
        "Private balcony",
        "Butler service",
        "Luxury bathroom",
        "VIP privileges",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Room Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of luxurious rooms and suites, each designed to provide the ultimate comfort and relaxation during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/night</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full">Book {plan.name}</Button>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}