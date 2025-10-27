import Navbar from "@/components/navbar";
import Head from "next/head";
import { Footer } from "@/components/footer";

export default function Workshops() {
  return (
    <main className="flex flex-col items-center justify-center bg-background">
      <Head>
        <title>Workshops - Making Cents of Math</title>
        <meta name="description" content="Learn about our interactive math and financial literacy workshops for middle school students." />
      </Head>
      <Navbar showAnimation={false} />
      
      <div className="mt-16 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Our <span className="text-primary">Workshops</span>
          </h1>
          <p className="text-lg md:text-lg text-center text-muted-foreground font-medium mb-12">
            <span className="font-bold">Interactive 2-hour sessions</span> that transform how students see math
          </p>
        </div>
      </div>

      <div className="w-full bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Workshop <span className="text-primary">Details</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-foreground">Duration</h3>
              <p className="text-lg text-muted-foreground"><span className="font-bold">2 hours</span> of engaging, hands-on learning</p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-foreground">Target Audience</h3>
              <p className="text-lg text-muted-foreground"><span className="font-bold">Elementary and middle school students</span> (grades 6-9)</p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-foreground">Location</h3>
              <p className="text-lg text-muted-foreground"><span className="font-bold">We come directly to your school</span></p>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-foreground">Cost</h3>
              <p className="text-lg text-muted-foreground"><span className="font-bold">Completely FREE</span> for all schools</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Curriculum <span className="text-primary">Covered</span>
          </h2>
          
          <div className="space-y-8">
            <div className="bg-card border border-border p-8 rounded-lg border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lesson 1: Different Kinds of Bank Accounts</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Students will understand different types of bank accounts (Chequing, Savings, TFSA, RRSP) and which accounts are best for different scenarios.
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-gray-700 mb-2">Topics Covered:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Chequing Accounts: Used for daily expenses and transactions; student accounts often have no monthly fees</li>
                  <li>Savings Accounts: Set money aside and earn interest over time for short-term goals</li>
                  <li>High Interest Savings Accounts (HISA): Higher interest rates, ideal for leaving money untouched</li>
                  <li>Tax-Free Savings Account (TFSA): Investment account with tax-free income</li>
                  <li>Registered Retirement Savings Plan (RRSP): Tax-deductible contributions for long-term savings</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-gray-700 mb-2">Activity:</h4>
                <p className="text-gray-600">
                  Bank account simulation game where students manage $100 per "month" across different accounts, draw scenario cards (bubble tea purchases, car repairs, interest growth), and compete to maximize their total savings.
                </p>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lesson 2: Basic Financial Math Models</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Students will learn how money grows or shrinks over time through interest, understand credit and debit, and grasp appreciation and depreciation.
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Topics Covered:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Interest Calculations: Simple interest with examples like bank savings, credit card debt, or loans</li>
                  <li>Credit vs Debit: How spending on credit differs from debit; fees, interest, and impact on financial health</li>
                  <li>Appreciation vs Depreciation: How assets gain or lose value over time with practical examples</li>
                  <li>Practice Problems: Calculate interest earned on savings, interest owed on loans, and asset value changes</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lesson 3: Debt Management</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Students will understand different types of debt, how they work, and strategies for managing them responsibly.
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Topics Covered:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Student Loans: Government loans vs personal loans, interest rates, repayment options</li>
                  <li>Mortgages: Principal, interest, down payment, open vs closed, fixed vs variable rates</li>
                  <li>Credit Cards: Borrowing limits, minimum payments, interest accrual, importance of paying on time</li>
                  <li>Credit Score: What affects it and why it matters for future financial decisions</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Activity:</h4>
                <p className="text-muted-foreground">
                  Students analyze printed "student profiles" with tuition, living costs, job options, and scholarships. Teams calculate total debt and determine which student made the best financial decisions.
                </p>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lesson 4: Investments</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Students will understand how investments grow over time, the role of tax-advantaged accounts, and how to evaluate appreciation and depreciation of assets.
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Topics Covered:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Introduction to Investing: Putting money into something that can grow in value</li>
                  <li>TFSA vs RRSP: Tax-free growth vs tax deductions for retirement savings</li>
                  <li>Types of Investments: Stocks, bonds, mutual funds, and cash explained simply</li>
                  <li>Risk vs Reward: Understanding safer investments vs higher-return options</li>
                  <li>Appreciation & Depreciation: How different assets change in value over time</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Activity:</h4>
                <p className="text-muted-foreground">
                  Market simulation game where teams manage item cards (cars, antiques, watches) with market values. They respond to market events, calculate appreciation/depreciation, trade items strategically, and compete for highest total value.
                </p>
              </div>
            </div>
            
            <div className="bg-card border border-border p-8 rounded-lg border-l-4 border-l-primary hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Lesson 5: Financial Abuse</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Students will recognize financial abuse, identify warning signs, and learn ways to protect themselves or others.
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Topics Covered:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>What is Financial Abuse: When someone uses money or financial control to manipulate or harm another person</li>
                  <li>Warning Signs: Recognizing red flags in financial relationships and control dynamics</li>
                  <li>Legal Rights: Understanding support organizations and reporting options</li>
                  <li>Case Studies: Real-world scenarios to identify and respond to financial abuse</li>
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="font-bold text-foreground mb-2">Activity:</h4>
                <p className="text-muted-foreground">
                  Teams analyze scenarios and use beanbag toss to categorize situations as "Safe/Normal" or "Potential Risk for Financial Abuse," developing decision-making skills in a fun, interactive format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-secondary py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Workshop <span className="text-primary">Activities</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-foreground">Bank Account Station</h3>
              <p className="text-muted-foreground">
                Simulation game involving financial scenarios to manage currency across different bank accounts with scenario cards and strategic decision-making.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-foreground">Student Loan Analysis</h3>
              <p className="text-muted-foreground">
                Teams analyze student profiles with tuition, living costs, and income sources to calculate total debt and identify best financial decisions.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-foreground">Market Simulation</h3>
              <p className="text-muted-foreground">
                Teams manage item portfolios, respond to market events, calculate appreciation/depreciation, and trade strategically to maximize value.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-foreground">Credit Score Building</h3>
              <p className="text-muted-foreground">
                Interactive scenario-based activity where students learn how everyday financial decisions impact credit scores using real-world examples.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-foreground">Financial Safety Challenge</h3>
              <p className="text-muted-foreground">
                Teams identify financial abuse warning signs through scenario analysis and decision-making activities.
              </p>
            </div>
            
            <div className="bg-card border border-border p-6 rounded-lg hover:shadow-md hover:border-primary/50 transition-all duration-200 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-3 text-foreground">Interest Calculations</h3>
              <p className="text-muted-foreground">
                Students solve real-world interest problems related to savings, loans, and credit to understand how money grows or shrinks over time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Book a Workshop?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-medium">
            Bring Making Cents of Math to your middle school and give your students the tools they need for financial success!
          </p>
          <a 
            href="/get-involved"
            className="inline-block font-medium px-10 py-3 bg-primary text-primary-foreground text-lg rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
