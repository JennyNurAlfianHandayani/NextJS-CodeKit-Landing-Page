import { Globe, Users, Award, TrendingUp } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Globe,
      title: "Global Network. Local Insight.",
      description:
        "Partners in every major market ensure you're always ahead of the curve with local expertise and global reach.",
    },
    {
      icon: TrendingUp,
      title: "End-to-End Business Support",
      description:
        "From ideation to IPO—and everything in between. Complete business lifecycle support under one roof.",
    },
    {
      icon: Users,
      title: "Partner-Led, Boutique Service",
      description: "Personalized, hands-on expertise with direct access to senior partners and decision-makers.",
    },
    {
      icon: Award,
      title: "Regulatory Insight & Strategic Foresight",
      description: "Stay compliant and seize opportunities with our deep regulatory knowledge and market intelligence.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-[#D7B459]/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose MS Global?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your ambitions into real-world success with MS Global Services—where innovation meets execution,
              and your growth is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#D7B459]/10 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="h-8 w-8 text-[#D7B459]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have trusted MS Global Services to guide their growth
                journey from startup to global success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Start Your Journey Today
                </button>
                <button className="border-2 border-[#D7B459] text-[#D7B459] hover:bg-[#D7B459] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                  Download Our Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
