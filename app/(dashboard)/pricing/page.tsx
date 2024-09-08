import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Star } from "lucide-react"
import Image from "next/image"


const tiers = [
  {
    name: "Starter",
    price: "$99",
    description: "Perfect for small academies just getting started",
    features: [
      "Up to 50 player profiles",
      "Basic performance tracking",
      "Training schedule management",
      "Parent communication tools",
      "Email support",
    ],
    notIncluded: [
      "Advanced analytics",
      "Customizable competency framework",
      "Scouting tools",
      "API access",
    ],
  },
  {
    name: "Pro",
    price: "$299",
    description: "Ideal for growing academies with advanced needs",
    features: [
      "Up to 200 player profiles",
      "Advanced performance analytics",
      "Customizable competency framework",
      "Video analysis integration",
      "Scouting and recruitment tools",
      "Priority email and chat support",
    ],
    notIncluded: [
      "Unlimited player profiles",
      "White-labeling",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale academies",
    features: [
      "Unlimited player profiles",
      "Full customization options",
      "Advanced API access",
      "White-labeling",
      "Dedicated account manager",
      "24/7 phone and email support",
      "On-site training and setup",
    ],
    notIncluded: [],
  },
]

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Academy Director",
    academy: "Elite Youth FC",
    image: "/placeholder.svg?height=100&width=100",
    quote: "SoccerAcademyPro has revolutionized how we manage our academy. The performance tracking and analytics have been invaluable in developing our young talents.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head Coach",
    academy: "Striker's Academy",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The customizable competency framework has allowed us to tailor our training programs to each player's needs. It's a game-changer for player development.",
  },
  {
    name: "Emma Chen",
    role: "Technical Director",
    academy: "Future Stars Soccer",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The scouting and recruitment tools have helped us identify and nurture talent more effectively. SoccerAcademyPro is an essential part of our success.",
  },
]

export default async function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Choose the Right Plan for Your Academy</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Flexible pricing options to support academies of all sizes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <Card key={index} className={`flex flex-col ${tier.name === 'Pro' ? 'border-green-500 border-2' : ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-4xl font-bold mb-4">{tier.price}</div>
                <p className="text-sm text-gray-500 mb-4">{tier.name === 'Enterprise' ? 'Contact us for pricing' : 'per month'}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <X className="h-5 w-5 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={tier.name === 'Pro' ? 'default' : 'outline'}>
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Not sure which plan is right for you?</h2>
          <p className="text-gray-600 mb-8">Our team is here to help you find the perfect solution for your academy's needs.</p>
          <Button size="lg">Schedule a Demo</Button>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role} at {testimonial.academy}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SoccerAcademyPro</h3>
              <p>Empowering soccer academies with cutting-edge management software.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Features</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@socceracademypro.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} SoccerAcademyPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}