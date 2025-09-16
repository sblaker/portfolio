export default function BioSection() {
  return (
    <div className="bg-[#1C1C1C] p-6 rounded-3xl shadow-lg relative">
      <h2 className="text-2xl font-bold text-white mb-4">
        A Journey into Digital Security
      </h2>
      <p className="text-gray-400 mb-4">
        I am Antonino Trifirò, a future cybersecurity engineer with a solid
        academic background and a strong passion for the challenges of the
        digital world.
      </p>
      <p className="text-gray-400 mb-4">
        I earned my Bachelor&apos;s degree in Computer Engineering (L-8) at the
        University of Palermo and I am now completing my Master&apos;s degree in
        Computer Engineering, specializing in Cybersecurity (LM-32).
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Skills and Interests
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          <li>
            Programming languages: C, Java, JavaScript, Python, TypeScript, C++,
            and Bash.
          </li>
          <li>
            Web technologies: React, Next.js, Tailwind CSS, Node.js, and
            Wordpress. This website was built using React and Next.js.
          </li>
          <li>IoT and embedded systems: ESP32, ESP8266, Arduino</li>
          <li>
            Participation in CyberChallenge.IT and Hack The Box challenges,
            focusing on CTFs, reverse engineering, and web security.
          </li>
          <li>
            My curiosity embraces the entire spectrum of cybersecurity, from
            malware analysis to network defense and machine learning
            applications for security.
          </li>
        </ul>
      </div>
    </div>
  );
}