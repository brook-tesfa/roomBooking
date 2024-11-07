"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BedDouble, Users, Wifi, Coffee, Tv } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { loadStripe } from '@stripe/stripe-js'

interface RoomCardProps {
  title: string
  price: string
  image: string
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export function RoomCard({ title, price, image }: RoomCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price: parseInt(price.replace('$', '')),
        }),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error('Payment error:', error)
        }
      }
    } catch (error) {
      console.error('Payment error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const amenities = [
    { icon: <BedDouble className="h-4 w-4" />, label: 'King Bed' },
    { icon: <Users className="h-4 w-4" />, label: '2-3 Guests' },
    { icon: <Wifi className="h-4 w-4" />, label: 'Free Wi-Fi' },
    { icon: <Coffee className="h-4 w-4" />, label: 'Coffee Maker' },
    { icon: <Tv className="h-4 w-4" />, label: 'Smart TV' },
  ]

  return (
    <>
      <Card className="overflow-hidden">
        <div className="aspect-video relative">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="p-4">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <BedDouble className="h-4 w-4" />
              <span>King Bed</span>
              <Users className="h-4 w-4 ml-2" />
              <span>2-3 Guests</span>
            </div>
            <p className="font-bold">{price}<span className="text-sm font-normal">/night</span></p>
          </div>
          <Button 
            className="w-full mt-4" 
            onClick={() => setIsModalOpen(true)}
          >
            Book Now
          </Button>
        </div>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img src={image} alt={title} className="object-cover w-full h-full" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{price}<span className="text-base font-normal text-muted-foreground">/night</span></h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    {amenity.icon}
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-2">Room Description</h4>
                <p className="text-muted-foreground">
                  Experience luxury in our spacious {title.toLowerCase()} featuring modern amenities, 
                  stunning views, and premium furnishings for the ultimate comfort during your stay.
                </p>
              </div>

              <Button 
                className="w-full" 
                onClick={handlePayment}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Pay Now'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}