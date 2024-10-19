import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Just Liberty Incorporated?",
      answer: "Just Liberty Incorporated is a Colorado-based nonprofit charity dedicated to enhancing legal and political understanding and engagement through innovative digital platforms. Our mission is to simplify complex systems in law and politics, making them accessible and empowering for everyone."
    },
    {
      question: "Why was Just Liberty Incorporated created?",
      answer: "We formed Just Liberty to address the challenges and barriers within legal and political systems, particularly for those in lower socio-economic groups. By providing intuitive tools and resources, we aim to empower individuals, ensuring they have the knowledge and confidence to engage effectively in these systems."
    },
    {
      question: "What does 'Just Legal' offer?",
      answer: "'Just Legal' is an interactive platform designed to simplify legal processes. It provides step-by-step flowcharts, plain-language explanations, and resources to help users navigate the legal system confidently. This includes guides, templates, and a comprehensive database of case law to support various legal needs."
    },
    {
      question: "What does 'Just Politics' offer?",
      answer: "'Just Politics' helps users align their values with political candidates, track political transparency, and engage in citizen-driven lobbying efforts. It provides personalized, unbiased information on political candidates and issues through AI-powered insights."
    },
    {
      question: "How does 'Just Politics' empower users?",
      answer: "'Just Politics' provides personalized, unbiased information to help users make informed voting decisions. The platform tracks political spending, candidate promises, and helps users align their values with candidates through value-based questions."
    },
    {
      question: "Who can benefit from Just Liberty Incorporated?",
      answer: "Our services are designed for anyone seeking clarity and empowerment in legal and political matters, especially those traditionally underserved by these systems. This includes pro se litigants, politically disengaged citizens, educators, and students."
    },
    {
      question: "How can I get involved with Just Liberty Incorporated?",
      answer: "You can find us at truejust.org and email us at contact@truejust.org contribute by volunteering , donating, or using and sharing our platforms 'Just Legal' and 'Just Politics'. Each action supports our mission to demystify legal and political systems and empower communities."
    },
    {
      question: "What impact does Just Liberty Incorporated have on the community?",
      answer: "Just Liberty empowers individuals with tools and knowledge to navigate legal and political systems confidently. Our platforms encourage self-advocacy in legal matters and active participation in democracy, fostering a more engaged and equitable society."
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {faqData.map((item, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => toggleExpand(index)}>
            <Text style={styles.question}>{item.question}</Text>
          </TouchableOpacity>
          {expanded === index && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answer: {
    fontSize: 16,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default FAQ;
