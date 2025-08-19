import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CompanyFormation() {
  const services = [
    "Business Incorporation: Seamless setup in UAE mainland and freezones",
    "Strategic Planning: Vision setting, market entry, and growth blueprints",
    "Compliance & Tax Planning: VAT strategies, tax optimization, and regulatory reporting",
    "Regulatory Approvals: Licensing, permits, and government liaison",
    "Financial Planning & Budgeting: Dynamic business models and capital stewardship",
    "Operational Governance: Robust organizational structure and compliance frameworks",
    "IT & Digital Advisory: Next-gen systems integration and digital transformation",
    "Market Research & Entry Strategy: Feasibility studies and global target market analysis",
  ]

  return (
    <section id="company-formation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Company Formation & Strategic Business Setup
            </h2>
            <p className="text-xl text-[#D7B459] font-semibold mb-4">
              Empowering Visionaries to Launch, Scale, and Succeed
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to expand across borders or establish a solid foothold in the UAE? We provide 360° guidance for
              every stage of your business journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Services:</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#D7B459] mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-8 bg-[#D7B459] hover:bg-[#D7B459]/90 text-white">
                Start Your Business Setup
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="border-2 border-[#D7B459]/20">
              <CardHeader className="bg-[#D7B459]/5">
                <CardTitle className="text-[#D7B459]">Why Choose Our Setup Services?</CardTitle>
                <CardDescription>Comprehensive support from concept to operation</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#D7B459] rounded-full mr-3"></div>
                    <span className="text-gray-700">UAE mainland and freezone expertise</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#D7B459] rounded-full mr-3"></div>
                    <span className="text-gray-700">End-to-end regulatory compliance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#D7B459] rounded-full mr-3"></div>
                    <span className="text-gray-700">Strategic market entry planning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#D7B459] rounded-full mr-3"></div>
                    <span className="text-gray-700">Digital transformation advisory</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-[#D7B459] rounded-full mr-3"></div>
                    <span className="text-gray-700">Ongoing operational support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
