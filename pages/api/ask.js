

export default async function handler(req, res) {
  const { question } = req.body;

  // Mocked answer logic
  const mockAnswers = {
    "How many calls did I make last month?": "You made 27 calls in June 2025.",
    "What is my Q2 attainment?": "Your Q2 attainment is 92% against a target of $120,000.",
    "Which HCPs have low script-to-call conversion?": "Dr. Smith and Dr. Lee have a conversion rate under 10%."
  };

  const answer = mockAnswers[question] || `Sorry, I’m a mock AI right now and can't process: "${question}"`;

  res.status(200).json({ answer });
}
