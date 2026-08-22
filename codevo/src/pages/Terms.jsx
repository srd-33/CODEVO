export default function Terms() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <section className="pt-10 pb-16">
        <div className="app-container max-w-4xl">
          <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Terms & Conditions
          </h1>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-8">
            <Section
              title="Eligibility"
              text="The internship is intended for VTU engineering students unless otherwise specified."
            />

            <Section
              title="Registration"
              text="Students must provide accurate academic and personal information during registration."
            />

            <Section
              title="Certificate Eligibility"
              text="Certificates are issued only after completing the internship requirements and evaluations."
            />

            <Section
              title="Code of Conduct"
              text="Students are expected to maintain professional behavior during webinars, discussions and project submissions."
            />

            <Section
              title="Changes"
              text="CODEVO reserves the right to modify internship schedules and program content whenever necessary."
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