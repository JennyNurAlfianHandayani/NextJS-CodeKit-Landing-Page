import { BarChart3, TrendingUp, FileText, Users } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CapitalMarkets() {
  const services = [
    {
      icon: BarChart3,
      title: "IPO Planning & Regulatory Advisory",
      description: "Comprehensive IPO preparation and regulatory compliance guidance.",
    },
    {
      icon: TrendingUp,
      title: "Qualified Institutional Placement (QIP) & QIB Services",
      description: "Expert structuring and execution of institutional placement programs.",
    },
    {
      icon: FileText,
      title: "Preferential Placement Structuring",
      description: "Strategic preferential allotment planning and execution.",
    },
    {
      icon: Users,
      title: "Merchant Banking Coordination for Indian Listings",
      description: "End-to-end merchant banking services for Indian market listings.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Indian & Global Capital Markets Consultancy
            </h2>
            <p className="text-xl text-[#D7B459] font-semibold mb-4">
              Tap Into Institutional Investment & Public Markets
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team of specialists provides seamless access to Indian and international stock markets, helping you
              achieve your listing and capital-raising ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#D7B459]" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready for Public Markets?</h3>
                <p className="text-gray-300 mb-6">
                  From pre-IPO planning to post-listing compliance, we guide you through every step of your capital
                  markets journey.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Regulatory compliance and documentation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Investor roadshows and presentations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#D7B459] rounded-full mr-3"></div>
                    Post-listing support and compliance
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-4">Start Your IPO Journey</h4>
                  <p className="text-sm text-gray-300 mb-4">
                    Get expert guidance on listing requirements and market preparation.
                  </p>
                  <button className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full">
                    Schedule IPO Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
