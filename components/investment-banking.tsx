import { TrendingUp, DollarSign, Building, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function InvestmentBanking() {
  const services = [
    {
      icon: TrendingUp,
      title: "Venture Capital & Private Equity",
      description: "Full-spectrum support for funding rounds, strategic alliances, and public listings.",
      features: ["Series A-C funding rounds", "Strategic partnerships", "Exit planning", "Investor relations"],
    },
    {
      icon: DollarSign,
      title: "Mortgage & Business Financing",
      description: "Smart loan structuring for both individuals and large enterprises.",
      features: ["Business loans", "Asset financing", "Working capital", "Trade finance"],
    },
    {
      icon: Building,
      title: "Banking Consultancy",
      description: "Prime global banking connections and actionable financial strategies.",
      features: ["Banking relationships", "Account opening", "Treasury management", "Cash flow optimization"],
    },
    {
      icon: Users,
      title: "Risk Management & Due Diligence",
      description: "Rigorous vetting and risk mitigation—transparency at every stage.",
      features: ["Financial due diligence", "Risk assessment", "Compliance review", "Transaction advisory"],
    },
  ]

  return (
    <section id="investment-banking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Investment Banking & Financial Advisory
            </h2>
            <p className="text-xl text-[#D7B459] font-semibold mb-4">
              Funding, Structuring & Scaling: Capital That Powers Growth
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We unlock value for corporates and high-growth startups through strategic capital strategies and deep
              market insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-[#D7B459]/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#D7B459]/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#D7B459]" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-[#D7B459] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#D7B459]/10 to-[#D7B459]/5 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Scale Your Business?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you're seeking venture capital, planning an IPO, or need strategic financial advisory, our
                investment banking team has the expertise and network to make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Discuss Funding Options
                </button>
                <button className="border-2 border-[#D7B459] text-[#D7B459] hover:bg-[#D7B459] hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Schedule Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
