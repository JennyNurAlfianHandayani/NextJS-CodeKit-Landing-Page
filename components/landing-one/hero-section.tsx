import { ArrowRight, Globe, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Gateway to <span className="text-[#D7B459]">Global Business</span> Success
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Strategic Business Advisory | Audit & Tax Compliance | Investment Banking Solutions
          </p>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            A boutique consultancy headquartered in Dubai, UAE, with a truly global footprint. We specialize in guiding
            entrepreneurs, fast-growing SMEs, and large enterprises with end-to-end business advisory, tax consultancy,
            and strategic financial solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-[#D7B459] hover:bg-[#D7B459]/90 text-white px-8 py-3">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D7B459] text-[#D7B459] hover:bg-[#D7B459] hover:text-white px-8 py-3 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#D7B459]/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-[#D7B459]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">International expertise with local market insights</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#D7B459]/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-[#D7B459]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growth Focused</h3>
              <p className="text-gray-600 text-sm">From startup to IPO - we scale with you</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#D7B459]/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-[#D7B459]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Compliance First</h3>
              <p className="text-gray-600 text-sm">Regulatory expertise and risk mitigation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
