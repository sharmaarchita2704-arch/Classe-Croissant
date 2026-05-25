'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function DiagnosticsPage() {
  const [diagnostics] = useState({
    weakPatterns: [
      {
        pattern: 'Overusing simple connectors',
        frequency: 12,
        impact: 'Critical',
        examples: [
          'Using "et" instead of "d\'ailleurs", "en outre", "néanmoins"',
          'Relying on "parce que" instead of "en raison de", "du fait que"',
        ],
        recommendation:
          'Practice connectors list daily. Replace at least 3 simple connectors in each speaking/writing session.',
        clbImpact: 'Current CLB 5. Using advanced connectors could reach CLB 7.',
      },
      {
        pattern: 'Incorrect subjunctive usage',
        frequency: 8,
        impact: 'High',
        examples: [
          'Using indicative after "je doute que"',
          'Forgetting subjunctive after "il faut que", "il est important que"',
        ],
        recommendation:
          'Learn triggers for subjunctive. Create flashcards with expressions that require subjunctive.',
        clbImpact: 'Current CLB 5. Mastering subjunctive could reach CLB 6.',
      },
      {
        pattern: 'Mispronunciation of [r] and [u] sounds',
        frequency: 6,
        impact: 'Medium',
        examples: ['Rolling r instead of guttural r', 'Confusing "ou" and "u" sounds'],
        recommendation: 'Practice with pronunciation guides. Record yourself and compare with native speakers.',
        clbImpact: 'Current CLB 5. Clear pronunciation could reach CLB 6.',
      },
    ],
    repeatedErrors: [
      {
        error: 'Gender agreement (e.g., "un fille" instead of "une fille")',
        count: 15,
        severity: 'Critical',
        lesson: 'Gender & Adjectives',
      },
      {
        error: 'Verb conjugation errors in past tense',
        count: 10,
        severity: 'High',
        lesson: 'Past Tenses',
      },
      {
        error: 'Missing or incorrect article usage',
        count: 8,
        severity: 'High',
        lesson: 'Articles',
      },
      {
        error: 'Pronoun placement errors',
        count: 6,
        severity: 'Medium',
        lesson: 'Pronouns',
      },
    ],
    missingConnectors: [
      { connector: 'D\'ailleurs', meaning: 'Moreover, incidentally' },
      { connector: 'En outre', meaning: 'In addition, furthermore' },
      { connector: 'Néanmoins', meaning: 'Nevertheless, however' },
      { connector: 'C\'est pourquoi', meaning: 'That is why' },
      { connector: 'De surcroit', meaning: 'Moreover, on top of that' },
      { connector: 'Ensuite', meaning: 'Then, next' },
    ],
    clbPrediction: {
      current: 5,
      potentialWithImprovements: {
        connectors: 6,
        subjonctif: 6,
        pronunciation: 6,
        allImprovements: 7,
      },
      timeline: '3-4 weeks with focused practice',
    },
    studyPlan: [
      { week: 1, focus: 'Connectors - 20 min daily', priority: 'Critical' },
      { week: 2, focus: 'Subjunctive mood - 15 min daily', priority: 'High' },
      { week: 3, focus: 'Gender & articles - 15 min daily', priority: 'High' },
      { week: 4, focus: 'Pronunciation drills - 20 min daily', priority: 'Medium' },
    ],
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-ivory p-6 md:p-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="heading-1 text-deep-navy mb-2">Diagnostic Engine</h1>
          <p className="text-navy-light">Detailed analysis of your weak patterns and improvement roadmap</p>
        </motion.div>

        {/* CLB Prediction */}
        <motion.div variants={itemVariants} className="card-luxury mb-8 bg-gradient-to-r from-muted-gold/10 to-deep-navy/5">
          <h2 className="heading-3 text-deep-navy mb-6">CLB Prediction</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 bg-white rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Current</p>
              <p className="heading-2 text-deep-navy">CLB {diagnostics.clbPrediction.current}</p>
            </div>
            {Object.entries(diagnostics.clbPrediction.potentialWithImprovements).map(([key, value]) => (
              <div key={key} className="p-4 bg-white rounded-lg text-center">
                <p className="text-sm text-gray-600 mb-1 capitalize">
                  {key === 'allImprovements' ? 'With All Improvements' : key}
                </p>
                <p className="heading-2 text-muted-gold">CLB {value as number}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4 p-3 bg-cream rounded-lg">
            Estimated timeline: <span className="font-semibold">{diagnostics.clbPrediction.timeline}</span>
          </p>
        </motion.div>

        {/* Weak Patterns */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="heading-2 text-deep-navy mb-6">Weak Patterns Detected</h2>
          <div className="space-y-6">
            {diagnostics.weakPatterns.map((pattern, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-luxury border-l-4 border-muted-gold"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="heading-3 text-deep-navy">{pattern.pattern}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Appears <span className="font-bold text-muted-gold">{pattern.frequency}</span> times in your
                      assessments
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${
                      pattern.impact === 'Critical'
                        ? 'bg-red-100 text-red-700'
                        : pattern.impact === 'High'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {pattern.impact}
                  </span>
                </div>

                <div className="mb-4 p-3 bg-cream rounded-lg">
                  <p className="text-sm font-semibold text-deep-navy mb-2">Examples:</p>
                  <ul className="space-y-2">
                    {pattern.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-700">
                        <span className="text-muted-gold font-bold">•</span> {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 p-3 bg-deep-navy/5 rounded-lg border-l-4 border-deep-navy">
                  <p className="text-sm font-semibold text-deep-navy mb-2">Recommendation:</p>
                  <p className="text-sm text-gray-700">{pattern.recommendation}</p>
                </div>

                <div className="p-3 bg-muted-gold/10 rounded-lg border-l-4 border-muted-gold">
                  <p className="text-sm font-semibold text-muted-gold">{pattern.clbImpact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Repeated Errors */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="heading-2 text-deep-navy mb-6">Top Repeated Errors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {diagnostics.repeatedErrors.map((error, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-luxury"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="heading-4 text-deep-navy flex-1">{error.error}</h3>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded whitespace-nowrap ml-2 ${
                      error.severity === 'Critical'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {error.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Repeated <span className="font-bold text-red-600">{error.count}</span> times
                </p>
                <a
                  href="/grammar"
                  className="text-sm text-muted-gold hover:text-deep-navy font-semibold"
                >
                  Learn: {error.lesson}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Missing Connectors */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="heading-2 text-deep-navy mb-6">Missing Connectors to Master</h2>
          <div className="card-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {diagnostics.missingConnectors.map((item, idx) => (
                <div key={idx} className="p-4 bg-cream rounded-lg">
                  <p className="font-mono font-bold text-muted-gold text-lg">{item.connector}</p>
                  <p className="text-sm text-gray-600 mt-2 italic">{item.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recommended Study Plan */}
        <motion.div variants={itemVariants} className="card-luxury bg-deep-navy text-cream">
          <h2 className="heading-2 mb-6">Your Personalized 4-Week Study Plan</h2>
          <div className="space-y-4">
            {diagnostics.studyPlan.map((week, idx) => (
              <div key={idx} className="p-4 bg-deep-navy/50 rounded-lg border-l-4 border-muted-gold">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg">{week.week === 1 ? 'Week 1' : `Week ${week.week}`}</p>
                    <p className="text-sm opacity-90">{week.focus}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      week.priority === 'Critical'
                        ? 'bg-red-500/20 text-red-200'
                        : week.priority === 'High'
                          ? 'bg-orange-500/20 text-orange-200'
                          : 'bg-yellow-500/20 text-yellow-200'
                    }`}
                  >
                    {week.priority}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <a href="/study-plan" className="btn-primary">
            Generate Full Study Plan
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
