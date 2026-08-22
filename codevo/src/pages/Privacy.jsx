export default function Privacy() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <section className="pt-10 pb-16">
        <div className="app-container max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-8">
            <Section
              title="Information We Collect"
              text="We collect your name, email address, phone number, college, USN and internship domain during registration."
            />

            <Section
              title="How We Use Your Data"
              text="Your information is used only for internship enrollment, webinar communication, certificates and student verification."
            />

            <Section
              title="Data Protection"
              text="We do not sell or share your personal information with third parties except where required for internship operations."
            />

            <Section
              title="Contact"
              text="For privacy-related queries, contact us at support@codevo.in."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ title, text }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
}