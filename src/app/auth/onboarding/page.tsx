'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    targetCLB: 7,
    hoursPerWeek: 10,
    weakAreas: [] as string[],
    examType: 'TEF' as 'TEF' | 'TCF',
  })

  const weakAreasOptions = [
    'Speaking Fluency',
    'Grammar',
    'Vocabulary',
    'Pronunciation',
    'Writing Structure',
    'Listening',
    'Reading',
  ]

  const handleWeakAreaToggle = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      weakAreas: prev.weakAreas.includes(area)
        ? prev.weakAreas.filter((a) => a !== area)
        : [...prev.weakAreas, area],
    }))
  }

  const handleComplete = () => {
    // Save preferences and redirect to dashboard
    router.push('/dashboard')
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-2xl"
      >
        <div className="card-luxury">
          <div className="text-center mb-8">
            <h1 className="heading-2 text-deep-navy mb-2">Let's Get Started</h1>
            <p className="text-navy-light">Personalize your learning experience (Step {step} of 3)</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-cream rounded-full h-1 mb-12">
            <div
              className="bg-muted-gold h-1 rounded-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>

          {/* Step 1: Exam Type */}
          {step === 1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <div>
                <h2 className="heading-4 mb-4">Which exam are you preparing for?</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['TEF', 'TCF'].map((exam) => (
                    <button
                      key={exam}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          examType: exam as 'TEF' | 'TCF',
                        }))
                      }
                      className={`p-6 rounded-lg border-2 transition font-serif text-lg font-semibold ${
                        formData.examType === exam
                          ? 'border-muted-gold bg-muted-gold/10 text-muted-gold'
                          : 'border-cream bg-cream text-deep-navy hover:border-muted-gold'
                      }`}
                    >
                      {exam}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => setStep(2)} className="btn-primary w-full">
                Continue
              </button>
            </motion.div>
          )}

          {/* Step 2: Target CLB & Hours */}
          {step === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-deep-navy mb-4">
                  Target CLB Level: <span className="text-muted-gold font-bold">{formData.targetCLB}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={formData.targetCLB}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      targetCLB: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 bg-cream rounded-lg appearance-none cursor-pointer accent-muted-gold"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>CLB 0</span>
                  <span>CLB 12</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-deep-navy mb-2">
                  Hours per week: <span className="text-muted-gold font-bold">{formData.hoursPerWeek}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={formData.hoursPerWeek}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hoursPerWeek: parseInt(e.target.value),
                    }))
                  }
                  className="w-full h-2 bg-cream rounded-lg appearance-none cursor-pointer accent-muted-gold"
                />
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="btn-ghost flex-1">
                  Back
                </button>
                <button onClick={() => setStep(3)} className="btn-primary flex-1">
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Weak Areas */}
          {step === 3 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              <div>
                <h2 className="heading-4 mb-4">What are your weak areas? (Select at least one)</h2>
                <div className="grid grid-cols-2 gap-3">
                  {weakAreasOptions.map((area) => (
                    <button
                      key={area}
                      onClick={() => handleWeakAreaToggle(area)}
                      className={`p-4 rounded-lg border-2 transition font-medium text-sm ${
                        formData.weakAreas.includes(area)
                          ? 'border-muted-gold bg-muted-gold/10 text-muted-gold'
                          : 'border-cream bg-cream text-deep-navy hover:border-muted-gold'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="btn-ghost flex-1">
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  disabled={formData.weakAreas.length === 0}
                  className="btn-primary flex-1 disabled:opacity-50"
                >
                  Complete Setup
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
